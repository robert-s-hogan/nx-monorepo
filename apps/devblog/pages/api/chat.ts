// pages/api/chat.js
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { messages } = req.body; // Expect an array of message objects

    try {
      const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo', // Adjust the model as needed
        messages: messages,
      });

      res.status(200).json(completion.data);
    } catch (error) {
      console.error(
        'Error in generateText:',
        error.response ? error.response.data : error
      );
      res.status(500).json({
        error: 'Failed to fetch response from OpenAI',
        details: error.message,
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
