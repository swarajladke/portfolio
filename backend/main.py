import os
import logging
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
    description="AI-powered chat using Groq to interact with Swaraj Ladke's professional resume",
    version="1.2.1",
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
    role: str  # "user" or "assistant"
    content: str


class ChatRequest(BaseModel):
    message: str
    history: Optional[List[Message]] = []


class ChatResponse(BaseModel):
    reply: str


# --- Helper to get API Key ---
def get_api_key():
    return os.getenv("GROQ_API_KEY")


# --- Routes ---
@app.get("/api/health")
async def health_check():
    key_status = "configured" if get_api_key() else "missing"
    return {"status": "ok", "service": "resume-chat-api-groq", "version": "1.2.1", "key": key_status}


@app.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    api_key = get_api_key()
    if not api_key:
        logger.error("GROQ_API_KEY is missing")
        raise HTTPException(status_code=500, detail="GROQ_API_KEY is not configured.")

    try:
        # --- PROXY FIX FOR HUGGING FACE ---
        # Some environments inject proxy settings that conflict with Groq's internal client.
        # We explicitly clear them for this request context if they exist.
        proxies = {
            "http_proxy": os.environ.pop("http_proxy", None),
            "https_proxy": os.environ.pop("https_proxy", None),
            "HTTP_PROXY": os.environ.pop("HTTP_PROXY", None),
            "HTTPS_PROXY": os.environ.pop("HTTPS_PROXY", None),
        }
        
        # Initialize client with the API key
        # Newer versions of Groq SDK have fixed the 'proxies' argument bug.
        client = Groq(api_key=api_key)
        
        # Restore proxy env vars after initialization to avoid breaking other system parts
        for key, value in proxies.items():
            if value:
                os.environ[key] = value

        # Build conversation history
        messages = [{"role": "system", "content": SYSTEM_PROMPT}]
        
        for msg in request.history or []:
            role = "assistant" if msg.role.lower() == "assistant" else "user"
            messages.append({"role": role, "content": msg.content})
            
        messages.append({"role": "user", "content": request.message})

        logger.info(f"Sending request to Groq (Llama 3.3 70B)")

        # Call Groq API
        chat_completion = client.chat.completions.create(
            messages=messages,
            model="llama-3.3-70b-versatile",
            temperature=0.5,
            max_tokens=1024,
        )

        reply = chat_completion.choices[0].message.content

        if not reply:
            return ChatResponse(reply="I'm sorry, I couldn't generate a response.")

        return ChatResponse(reply=reply)

    except Exception as e:
        error_msg = str(e)
        logger.error(f"Groq API Error: {error_msg}")
        return ChatResponse(reply=f"⚠️ AI Server Error: {error_msg}")


@app.get("/api/suggestions")
async def get_suggestions():
    return {
        "suggestions": [
            "What are Swaraj's top skills?",
            "Tell me about his projects",
            "What certifications does he have?",
            "What hackathons has he participated in?",
            "Is he available for hire?",
        ]
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=7860, reload=True)
