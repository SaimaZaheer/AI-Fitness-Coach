// server.js
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

// optional route imports (keep as you had them)
import openaiRoutes from "./routes/openai.js";
import huggingRoutes from "./routes/hugging.js";

// Hugging Face inference client
import { HfInference } from "@huggingface/inference";
// OpenAI (optional fallback)
import OpenAI from "openai";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/openai", openaiRoutes);
app.use("/api/hugging", huggingRoutes);

// Init clients (if keys present)
const HF_KEY = process.env.HUGGINGFACE_API_KEY || null;
const HF_MODEL = process.env.HUGGINGFACE_MODEL || "google/flan-t5-small"; 
let hf = null;
if (HF_KEY) {
  hf = new HfInference(HF_KEY);
  console.log("Hugging Face client initialized (model:", HF_MODEL + ")");
} else {
  console.warn("No HUGGINGFACE_API_KEY found — HF client disabled.");
}

let openai = null;
if (process.env.OPENAI_API_KEY) {
  openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  console.log("OpenAI client available (will be used as fallback if HF fails).");
}

// Helper: build system prompt (same persona)
function buildPrompt(message) {
  return `You are a friendly, energetic AI fitness coach. Give short motivational and workout-related replies with emojis.\nUser: ${message}\nCoach:`;
}

// Chat route — uses HF primary, OpenAI fallback, then mock
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  if (!message || message.trim().length === 0) {
    return res.status(400).json({ error: "Message is required" });
  }

  // 1) Try Hugging Face if available
  if (hf) {
    try {
      // textGeneration gives different structures depending on model.
      // Keep safe handling for returned shape.
      const hfResp = await hf.textGeneration({
        model: HF_MODEL,
        inputs: buildPrompt(message),
        parameters: { max_new_tokens: 120, temperature: 0.7 },
      });

      // hfResp may be object or array; try to extract generated text robustly
      const generated =
        (Array.isArray(hfResp) && hfResp[0]?.generated_text) ||
        hfResp?.generated_text ||
        hfResp?.[0]?.generated_text ||
        JSON.stringify(hfResp);

      // Trim off the echoed prompt if model returns it; naive approach: remove prompt prefix
      let reply = String(generated);
      if (reply.startsWith(buildPrompt(message))) {
        reply = reply.slice(buildPrompt(message).length).trim();
      }

      return res.json({ reply });
    } catch (hfError) {
      console.error("Hugging Face error:", hfError?.message || hfError);
      // fallthrough to try OpenAI if set
    }
  }

  // 2) Fallback: try OpenAI if configured
  if (openai) {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a friendly, energetic AI fitness coach. Give short motivational and workout-related replies with emojis.",
          },
          {
            role: "user",
            content: message,
          },
        ],
      });

      const aiReply = response.choices?.[0]?.message?.content;
      if (aiReply) return res.json({ reply: aiReply });
    } catch (openaiError) {
      console.error("OpenAI fallback error:", openaiError?.message || openaiError);
      // fallthrough to mock
    }
  }

  // 3) Final fallback: simple canned reply (ensures demo always works)
    const replies = [
  "Let's keep going! 💪 Try 3 sets of squats — 12 reps each.",
  "You're doing amazing! 🚀 Time for some stretching?",
  "Keep up the energy! 🔥 How about a short cardio burst?",
];
const fallback = replies[Math.floor(Math.random() * replies.length)];
return res.json({ reply: fallback });
});


// Root route
app.get("/", (req, res) => {
  res.send("AI Fitness Coach Backend is running 🚀");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
