import os
import logging
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from dotenv import load_dotenv
from groq import Groq

from resume_data import SYSTEM_PROMPT

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Load environment variables
load_dotenv()

app = FastAPI(
    title="Swaraj's Resume Chat API (Groq Edition)",
    description="AI-powered chat using Groq and Contact Form handler",
    version="1.3.0",
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
    expose_headers=["*"],
)

# --- Models ---
class Message(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    message: str
    history: Optional[List[Message]] = []

class ChatResponse(BaseModel):
    reply: str

class ContactRequest(BaseModel):
    name: str
    email: str
    subject: str
    message: str

# --- Helper to get API Key ---
def get_api_key():
    return os.getenv("GROQ_API_KEY")

# --- Email Helper ---
def send_email_notification(data: ContactRequest):
    sender_email = os.getenv("SENDER_EMAIL") # Your gmail
    sender_password = os.getenv("SENDER_PASSWORD") # Your Gmail App Password
    receiver_email = os.getenv("RECEIVER_EMAIL", "swarajladke20@gmail.com")

    if not sender_email or not sender_password:
        logger.warning("Email credentials not configured. Skipping email notification.")
        return False

    try:
        msg = MIMEMultipart()
        msg['From'] = f"Portfolio Contact <{sender_email}>"
        msg['To'] = receiver_email
        msg['Subject'] = f"🚀 New Portfolio Message: {data.subject}"

        body = f"""
        New message from your portfolio website!
        
        From: {data.name} ({data.email})
        Subject: {data.subject}
        
        Message:
        ------------------------------------------
        {data.message}
        ------------------------------------------
        
        Reply directly to: {data.email}
        """
        msg.attach(MIMEText(body, 'plain'))

        # Use Gmail SMTP
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(sender_email, sender_password)
        server.send_message(msg)
        server.quit()
        logger.info(f"✅ Email notification sent to {receiver_email}")
        return True
    except Exception as e:
        logger.error(f"❌ Failed to send email: {e}")
        return False

# --- Routes ---
@app.get("/api/health")
async def health_check():
    return {"status": "ok", "service": "resume-api", "version": "1.3.0"}

@app.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    api_key = get_api_key()
    if not api_key:
        raise HTTPException(status_code=500, detail="GROQ_API_KEY missing")

    try:
        # Clear proxies for Hugging Face compatibility
        proxies = {k: os.environ.pop(k, None) for k in ["http_proxy", "https_proxy", "HTTP_PROXY", "HTTPS_PROXY"]}
        client = Groq(api_key=api_key)
        for k, v in proxies.items(): 
            if v: os.environ[k] = v

        messages = [{"role": "system", "content": SYSTEM_PROMPT}]
        for msg in request.history or []:
            messages.append({"role": msg.role, "content": msg.content})
        messages.append({"role": "user", "content": request.message})

        chat_completion = client.chat.completions.create(
            messages=messages,
            model="llama-3.3-70b-versatile",
            temperature=0.5,
            max_tokens=1024,
        )
        return ChatResponse(reply=chat_completion.choices[0].message.content)
    except Exception as e:
        return ChatResponse(reply=f"⚠️ AI Error: {str(e)}")

@app.post("/api/contact")
async def contact_form(request: ContactRequest):
    logger.info(f"📬 Received message from {request.name}")
    
    # Send email in background (or just call it)
    email_sent = send_email_notification(request)
    
    return {
        "status": "success", 
        "message": "Message received!",
        "email_notified": email_sent
    }

@app.get("/api/suggestions")
async def get_suggestions():
    return {"suggestions": ["Skills?", "Projects?", "Certifications?"]}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=7860, reload=True)
