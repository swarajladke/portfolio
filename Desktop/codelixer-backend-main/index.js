// index.js

import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch'; // Make sure this is node-fetch v2
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const GROQ_API_KEY = process.env.GROQ_API_KEY;
console.log("🔑 Loaded GROQ_API_KEY:", GROQ_API_KEY ? "YES" : "NO");


app.post("/fix", async (req, res) => {
  const { prompt } = req.body;
  console.log("📥 Received prompt:", prompt);

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-120b",
        messages: [
          {
            role: "system",
            content: `
              You are CodeLixer, a real-time code autocorrect AI.
              Your ONLY task is to fix syntax, spelling, or formatting errors in the user's code.
              ⚠️ RULES:
              - Respond with corrected code ONLY (no explanations, no markdown, no comments).
              - Keep the same language and structure.
              - If code is already correct, return it unchanged.
              - Never ask the user for clarification.
              - Never include sentences or punctuation outside code.
            `
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.1,
        max_tokens: 100
      })
    });

    const data = await response.json();
    console.log("🧠 Groq raw response:", JSON.stringify(data, null, 2));

    const output = data?.choices?.[0]?.message?.content?.trim();

    if (!output) {
      return res.status(500).json({ error: "No response from Groq API" });
    }

    // Remove accidental markdown or backticks
    const cleanOutput = output.replace(/```[a-z]*|```/g, '').trim();

    res.json({ response: cleanOutput });
  } catch (err) {
    console.error("❌ Groq API error:", err);
    res.status(500).json({ error: "Something went wrong with Groq API" });
  }
});
