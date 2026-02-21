import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from dotenv import load_dotenv
import google.generativeai as genai

from resume_data import SYSTEM_PROMPT

# Load environment variables
load_dotenv()

# Configure Gemini
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    print("⚠️  WARNING: GEMINI_API_KEY not set. Chat will return an error.")
else:
    genai.configure(api_key=GEMINI_API_KEY)

app = FastAPI(
    title="Swaraj's Resume Chat API",
    description="AI-powered chat to interact with Swaraj Ladke's professional resume",
    version="1.0.0",
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


# --- Routes ---
@app.get("/api/health")
async def health_check():
    return {"status": "ok", "service": "resume-chat-api"}


@app.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    if not GEMINI_API_KEY:
        raise HTTPException(
            status_code=500,
            detail="GEMINI_API_KEY is not configured. Please set it in the backend/.env file.",
        )

    try:
        model = genai.GenerativeModel(
            model_name="gemini-2.0-flash",
            system_instruction=SYSTEM_PROMPT,
        )

        # Build conversation history for Gemini
        gemini_history = []
        for msg in request.history or []:
            gemini_history.append(
                {"role": "user" if msg.role == "user" else "model", "parts": [msg.content]}
            )

        # Start a chat session
        chat_session = model.start_chat(history=gemini_history)

        # Send the new message
        response = chat_session.send_message(request.message)

        return ChatResponse(reply=response.text)

    except Exception as e:
        print(f"❌ Chat error: {e}")
        raise HTTPException(status_code=500, detail=f"AI processing error: {str(e)}")


@app.get("/api/suggestions")
async def get_suggestions():
    """Returns suggested questions for the chat UI."""
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
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
