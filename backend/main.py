import os
import logging
import requests
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
    description="AI-powered chat using Groq and Telegram Notifications",
    version="1.4.2",
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


# --- Telegram Helper ---
def send_telegram_notification(data: ContactRequest):
    bot_token = os.getenv("TELEGRAM_BOT_TOKEN")
    chat_id = os.getenv("TELEGRAM_CHAT_ID")

    if not bot_token or not chat_id:
        msg = f"Telegram credentials missing: token={bool(bot_token)}, id={bool(chat_id)}"
        logger.warning(msg)
        return False, msg

    try:
        text = f"🚀 *New Portfolio Message!*\n\n" \
               f"👤 *Name:* {data.name}\n" \
               f"📧 *Email:* {data.email}\n" \
               f"📝 *Subject:* {data.subject}\n\n" \
               f"💬 *Message:*\n{data.message}"
        
        url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
        payload = {
            "chat_id": str(chat_id).strip(),
            "text": text,
            "parse_mode": "Markdown"
        }
        
        # USE SESSION TO DISABLE SYSTEM PROXIES (MANDATORY FOR HUGGING FACE IN SOME CASES)
        with requests.Session() as s:
            s.trust_env = False
            response = s.post(url, json=payload, timeout=15)
            
        if response.status_code == 200:
            logger.info("✅ Telegram notification sent successfully")
            return True, "Sent successfully"
        else:
            error_detail = response.text
            logger.error(f"❌ Telegram API error: {error_detail}")
            return False, f"Telegram API error ({response.status_code}): {error_detail}"
    except Exception as e:
        error_msg = str(e)
        logger.error(f"❌ Failed to send Telegram message: {error_msg}")
        return False, f"Exception: {error_msg}"


# --- Routes ---
@app.get("/api/health")
async def health_check():
    return {
        "status": "ok", 
        "service": "resume-api", 
        "version": "1.4.2",
        "telegram_configured": bool(os.getenv("TELEGRAM_BOT_TOKEN")) and bool(os.getenv("TELEGRAM_CHAT_ID")),
        "groq_configured": bool(os.getenv("GROQ_API_KEY"))
    }


@app.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    api_key = os.getenv("GROQ_API_KEY")
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
            role = "assistant" if msg.role.lower() == "assistant" else "user"
            messages.append({"role": role, "content": msg.content})
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
    # Instant Telegram notify
    success, detail = send_telegram_notification(request)
    if not success:
        return {
            "status": "error",
            "telegram_notified": False,
            "detail": detail
        }
    return {
        "status": "success", 
        "telegram_notified": True,
        "detail": detail
    }


@app.get("/api/suggestions")
async def get_suggestions():
    return {"suggestions": ["Skills?", "Projects?", "Certifications?"]}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=7860, reload=True)
