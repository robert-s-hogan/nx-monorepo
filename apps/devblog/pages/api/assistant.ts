// pages/api/assistant.js
import { Configuration, OpenAIApi } from 'openai';

const assistantHandler = async (req, res) => {
  if (req.method === 'POST') {
    const { prompt } = req.body;

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    try {
      const response = await openai.createChatCompletion({
        model: 'asst_2PyBV92ER5H3s40w298zu3w1',
        messages: [{ role: 'user', content: prompt }],
      });
      res.status(200).json(response.data);
    } catch (error) {
      console.error('OpenAI API error:', error);
      if (error.response) {
        console.error('Error response:', error.response.data);
      }
      res.status(500).json({
        message: 'Failed to fetch response from OpenAI',
        details: error.message,
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default assistantHandler;
