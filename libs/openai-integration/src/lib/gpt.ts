// libs/openai-integration/src/lib/gpt.ts
import axios from 'axios';

const apiKey = process.env['OPENAI_API_KEY'];
const apiURL = 'https://api.openai.com/v1/chat/completions';

export async function generateText(messages: any[]) {
  try {
    const response = await axios.post(
      apiURL,
      {
        model: 'gpt-3.5-turbo', // Or whichever model you prefer
        messages: messages,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Failed to fetch response from OpenAI', error);
    throw error; // Re-throw to handle it in the calling function
  }
}
