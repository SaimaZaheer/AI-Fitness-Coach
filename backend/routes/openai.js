import dotenv from "dotenv";
dotenv.config();
import express from "express";
import OpenAI from "openai";

console.log("Loaded OpenAI Key:", process.env.OPENAI_API_KEY ? "✅ Found" : "❌ Missing");


const router = express.Router();
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/coach", async (req, res) => {
  try {
    const { prompt } = req.body;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a friendly AI fitness coach." },
        { role: "user", content: prompt },
      ],
    });

    res.json({ reply: completion.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to get AI response" });
  }
});

export default router;
