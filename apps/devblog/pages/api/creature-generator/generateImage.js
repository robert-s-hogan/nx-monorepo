// /pages/api/generateImage.js
import { Configuration, OpenAIApi } from 'openai';
import Bottleneck from 'bottleneck';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Defines a limiter that allows 2000 requests per minute
const limiter = new Bottleneck({
  minTime: (60 * 1000) / 2000,
});

export default async function (req, res) {
  const { imagePrompt } = req.body;

  try {
    const response = await limiter.schedule(() =>
      openai.createImage({
        prompt: imagePrompt,
        n: 1,
        size: '512x512',
      })
    );

    const imageUrl = response.data.data[0].url;

    res.status(200).json({ imageUrl });
  } catch (error) {
    console.error('Detailed Error: ', error);
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        },
      });
    }
  }
}
