import { Configuration, OpenAIApi } from 'openai';
import Bottleneck from 'bottleneck';
import {
  dndSizes,
  languages,
  specialTraits,
  environments,
  alignments,
  species,
} from '@with-nx/constants';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_DEVBLOG_CREATURE_GENERATOR_API_KEY,
});

const openai = new OpenAIApi(configuration);

const limiter = new Bottleneck({
  minTime: (60 * 1000) / 2000, // 2000 requests per minute
});

function extractJson(text) {
  const regex = /{[\s\S]*}/; // Matches the first occurrence of JSON-like content
  const matches = text.match(regex);
  return matches ? matches[0] : null;
}

function generatePrompt(
  numberOfPlayers,
  playerLevel,
  {
    challengeRating,
    creatureType,
    alignment,
    environment,
    size,
    specialTrait,
    language,
  }
) {
  // Ensuring the function utilizes provided data or fallbacks
  const actualCreatureType = creatureType || 'unknown creature type';
  const actualSize = size || 'medium';
  const actualEnvironment = environment || 'generic environment';
  const actualAlignment = alignment || 'neutral';
  const actualSpecialTrait = specialTrait || 'no special trait';
  const actualLanguage = language || 'common language';
  const actualChallengeRating = challengeRating || '1'; // Default to 1 if not provided

  return `Create a detailed description of a ${actualCreatureType} suitable for a D&D game with a party of ${numberOfPlayers} players at level ${playerLevel}, with a challenge rating of ${actualChallengeRating}. The creature is of size ${actualSize}, lives in a ${actualEnvironment}, and has an alignment of ${actualAlignment}. It has a special trait: ${actualSpecialTrait}, and can communicate in ${actualLanguage}.

The creature should have the following properties in a JSON-like format:

{
  "name": "${actualCreatureType}",
  "description": "Describe a ${actualSize} ${actualCreatureType} living in a ${actualEnvironment} with ${actualAlignment} alignment. It should look distinct and have the special trait of ${actualSpecialTrait}.",
  "imagePrompt": "Create an image of a ${actualSize} ${actualCreatureType} with characteristics of a ${actualEnvironment} creature, showcasing the trait of ${actualSpecialTrait}. The creature should reflect the alignment of ${actualAlignment} and be depicted in an appropriate setting for a D&D game.",
  "armorClass": "Specify armor class",
  "hitPoints": "Specify hit points",
  "speed": "Specify speed",
  "strength": "Specify strength",
  "dexterity": "Specify dexterity",
  "constitution": "Specify constitution",
  "intelligence": "Specify intelligence",
  "wisdom": "Specify wisdom",
  "charisma": "Specify charisma",
  "actions": [
    {
      "name": "Primary Action",
      "damage": "Specify damage",
      "reach": "Specify reach"
    }
  ],
  "specialAbilities": [
    {
      "name": "${actualSpecialTrait}",
      "description": "Detailed description of how the special trait ${actualSpecialTrait} impacts the creature's abilities or behavior."
    }
  ]
}
Now, create a similar creature: `;
}

function validateAndCorrectJson(jsonString) {
  let json;
  try {
    json = JSON.parse(jsonString);
  } catch (error) {
    console.error('Initial JSON parse failed:', error.message);
    throw new Error('Initial JSON parse failed: ' + error.message);
  }

  // Ensure actions and special abilities are arrays
  if (!Array.isArray(json.actions)) {
    json.actions = [];
  }
  if (!Array.isArray(json.specialAbilities)) {
    json.specialAbilities = [];
  }

  return json;
}

async function fetchCompletion(prompt) {
  try {
    const completion = await limiter.schedule(() =>
      openai.createCompletion({
        model: 'gpt-3.5-turbo-instruct',
        prompt: prompt,
        max_tokens: 1500,
        temperature: 0.7,
      })
    );
    if (!completion || !completion.data) {
      throw new Error('No completion data returned from OpenAI.');
    }
    const responseText = completion.data.choices[0].text;
    const jsonString = extractJson(responseText);
    if (!jsonString) {
      throw new Error('No JSON found in response.');
    }
    console.log('Extracted JSON String:', jsonString);
    const parsedData = validateAndCorrectJson(jsonString);
    console.log('Parsed JSON Data:', parsedData);
    return parsedData;
  } catch (error) {
    console.error('Error with OpenAI API request:', error);
    throw new Error(
      'Error parsing JSON or OpenAI API request: ' + error.message
    );
  }
}

function generateRandomValues(data) {
  return {
    challengeRating: data.challengeRating || Math.floor(Math.random() * 30) + 1,
    creatureType:
      data.creatureType || species[Math.floor(Math.random() * species.length)],
    alignment:
      data.alignment ||
      alignments[Math.floor(Math.random() * alignments.length)],
    environment:
      data.environment ||
      environments[Math.floor(Math.random() * environments.length)],
    size: data.size || dndSizes[Math.floor(Math.random() * dndSizes.length)],
    specialTrait:
      data.specialTrait ||
      specialTraits[Math.floor(Math.random() * specialTraits.length)],
    language:
      data.language || languages[Math.floor(Math.random() * languages.length)],
  };
}

export default async function handler(req, res) {
  if (!configuration.apiKey) {
    return res
      .status(500)
      .json({ error: { message: 'OpenAI API key not configured' } });
  }

  const { numberOfPlayers, playerLevel } = req.body;

  if (!numberOfPlayers || !playerLevel) {
    return res.status(400).json({
      error: {
        message: 'Missing required fields numberOfPlayers or playerLevel',
      },
    });
  }

  const completeData = generateRandomValues(req.body);

  const prompt = generatePrompt(numberOfPlayers, playerLevel, completeData);

  try {
    let result = await fetchCompletion(prompt);
    console.log('Result from fetchCompletion:', result);
    return res.status(200).json({
      result: result,
      message: 'Creature generated successfully',
    });
  } catch (error) {
    console.error('Error during the request process:', error);
    return res.status(500).json({
      error: {
        message: 'An error occurred during your request: ' + error.message,
      },
    });
  }
}
