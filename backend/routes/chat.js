const express = require('express');
const router = express.Router();
const Groq = require('groq-sdk');

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

router.post('/', async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages are required and must be an array' });
    }

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a helpful customer support assistant for an e-commerce platform called ProCommerce. You can help users with questions about products, shipping, returns, and general inquiries. Keep your answers concise and friendly.'
        },
        ...messages
      ],
      model: 'llama-3.1-8b-instant',
    });

    res.json({ message: completion.choices[0]?.message?.content || '' });
  } catch (error) {
    console.error('Groq API error:', error);
    res.status(500).json({ error: 'Failed to communicate with the assistant' });
  }
});

module.exports = router;
