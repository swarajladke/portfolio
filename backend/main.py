import os
import json
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from dotenv import load_dotenv
from groq import Groq

from resume_data import SYSTEM_PROMPT

# Load environment variables
load_dotenv()

app = FastAPI(
    title="Swaraj's Resume Chat API (Groq Edition)",
    description="AI-powered chat using Groq to interact with Swaraj Ladke's professional resume",
    version="1.1.0",
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


# --- Helper to get API Key dynamically ---
def get_api_key():
    # Priority: Environment variables (Hugging Face Secrets) -> local .env
    api_key = os.getenv("GROQ_API_KEY")
    return api_key


# --- Routes ---
@app.get("/api/health")
async def health_check():
    key_status = "configured" if get_api_key() else "missing"
    return {"status": "ok", "service": "resume-chat-api-groq", "key": key_status}


@app.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    api_key = get_api_key()
    if not api_key:
        raise HTTPException(
            status_code=500,
            detail="GROQ_API_KEY is not configured in environment variables or Secrets.",
        )

    try:
        client = Groq(api_key=api_key)
        
        # Build conversation history for Groq
        messages = [{"role": "system", "content": SYSTEM_PROMPT}]
        
        for msg in request.history or []:
            messages.append({"role": msg.role, "content": msg.content})
            
        # Add the current user message
        messages.append({"role": "user", "content": request.message})

        # Call Groq API
        chat_completion = client.chat.completions.create(
            messages=messages,
            model="llama-3.3-70b-versatile",
            temperature=0.5,
            max_tokens=1024,
            top_p=1,
            stream=False,
        )

        reply = chat_completion.choices[0].message.content

        if not reply:
            return ChatResponse(reply="I'm sorry, I couldn't generate a response. Please try rephrasing your question.")

        return ChatResponse(reply=reply)

    except Exception as e:
        error_msg = str(e)
        print(f"❌ Groq Chat error: {error_msg}")
        raise HTTPException(status_code=500, detail=f"Groq API Error: {error_msg}")


@app.get("/api/suggestions")
async def get_suggestions():
    return {
        "suggestions": [
            "What are Swaraj's top skills?",
            "Tell me about his projects",
            "What certifications does he have?",
            "What hackathons has he participated in?",
            "Is he available for hire?",
            "What's his tech stack?",
        ]
    }


if __name__ == "__main__":
    import uvicorn
    # Important for Hugging Face: Port 7860 is the default
    uvicorn.run("main:app", host="0.0.0.0", port=7860, reload=True)
