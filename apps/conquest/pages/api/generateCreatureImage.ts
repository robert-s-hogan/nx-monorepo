import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const { imagePrompt } = req.body;

  const dndStyledPrompt = `Imagine a scene from a Dungeons & Dragons campaign: ${imagePrompt}. The art style should be reminiscent of classic fantasy illustrations, with intricate details, dynamic lighting, and a sense of adventure.`;

  try {
    const response = await openai.createImage({
      model: 'dall-e-3',
      prompt: dndStyledPrompt,
      n: 1,
      size: '1024x1024',
    } as any);

    const imageUrl = response.data.data[0].url;

    res.status(200).json({ imageUrl });
  } catch (error) {
    console.error(`Error with OpenAI API request: ${error.message}`);
    res.status(500).json({
      error: {
        message: 'An error occurred during your request.',
      },
    });
  }
}
