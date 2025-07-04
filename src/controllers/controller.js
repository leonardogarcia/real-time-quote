import { askOpenRouter } from '../services/service.js';
import Quote from '../models/Quote.js';
import { v4 as uuidv4 } from 'uuid';

export async function chat(req, res) {
  try {
    
    const { prompt, userId } = req.body;

    if (!userId || !prompt) {
      return res.status(400).json({ error: 'userId e prompt são obrigatórios.' });
    }

    const result = await askOpenRouter(prompt);

    const document = {
      id: uuidv4(),
      userId,
      prompt,
      response: result.response,
      model: result.model,
      timestamp: result.timestamp
    };

    await Quote.create(document);

    res.status(200).json({
      success: true,
      response: document
    });
  } catch (error) {
    console.error('Erro ao chamar OpenRouter:', error.response?.data || error.message);
    res.status(500).json({
      success: false,
      message: 'Erro na comunicação com o OpenRouter',
      error: error.message
    });
  }
}