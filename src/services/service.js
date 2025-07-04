import openRouterClient from '../config/openRouterClient.js';
import Quote from '../models/Quote.js';

export async function askOpenRouter(messages) {
  const response = await openRouterClient.post('/chat/completions', {
    model: 'google/gemma-3-12b-it:free',
    messages: [
      {
        role: 'user',
        content: 'Como está a cotação do dólar hoje?',
      },
    ]
  });

  const content = response.data.choices?.[0]?.message?.content;

  return {
    response: content,
    timestamp: new Date().toISOString(),
    model: response.data.model
  };
}