import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await axios.post(
      "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2",
      { inputs: prompt },
      {
        headers: { Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}` },
        responseType: "arraybuffer",
      }
    );

    const base64 = Buffer.from(response.data, "binary").toString("base64");
    res.json({ image: `data:image/png;base64,${base64}` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Hugging Face generation failed" });
  }
});

export default router;
