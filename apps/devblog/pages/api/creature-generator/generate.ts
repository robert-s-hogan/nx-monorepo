// /pages/api/creature-generator/generate.js
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

export function generateRandomValues() {
  // New code: Function to generate random values
  return {
    challengeRating: Math.floor(Math.random() * 30) + 1,
    creatureType: species[Math.floor(Math.random() * species.length)],
    alignment: alignments[Math.floor(Math.random() * alignments.length)],
    environment: environments[Math.floor(Math.random() * environments.length)],
    size: dndSizes[Math.floor(Math.random() * dndSizes.length)],
    specialTrait:
      specialTraits[Math.floor(Math.random() * specialTraits.length)],
    language: languages[Math.floor(Math.random() * languages.length)],
  };
}

function isValidJSON(text) {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}

// Defines a limiter that allows 2000 requests per minute
const limiter = new Bottleneck({
  minTime: (60 * 1000) / 2000,
});

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message:
          'OpenAI API key not configured, please follow instructions in README.md',
      },
    });
    return;
  }

  const {
    numberOfPlayers,
    playerLevel,
    challengeRating,
    creatureType,
    alignment,
    environment,
    size,
    specialTrait,
    language,
  } = req.body;

  // Validate essential parameters
  if (!numberOfPlayers || !playerLevel) {
    console.error('Missing required fields', { numberOfPlayers, playerLevel });
    res.status(400).json({
      error: {
        message: 'Please provide all required parameters',
      },
    });
    return;
  }

  // Generate random values and merge with provided data, prioritizing user input
  const randomValues = generateRandomValues();
  const completeData = {
    challengeRating: challengeRating || randomValues.challengeRating,
    creatureType: creatureType || randomValues.creatureType,
    alignment: alignment || randomValues.alignment,
    environment: environment || randomValues.environment,
    size: size || randomValues.size,
    specialTrait: specialTrait || randomValues.specialTrait,
    language: language || randomValues.language,
  };

  try {
    // Use the limiter to manage request rate
    const completion = await limiter.schedule(() =>
      openai.createCompletion({
        model: 'gpt-3.5-turbo-instruct',
        prompt: generatePrompt(numberOfPlayers, playerLevel, completeData),
        temperature: 0.6,
        max_tokens: 500,
      })
    );

    console.log('OpenAI API returned:', completion.data.choices[0].text);
    let creature;
    let rawText = completion.data.choices[0].text.trim();

    // Validate JSON response
    if (isValidJSON(rawText)) {
      creature = JSON.parse(rawText);
    } else {
      console.error(`Invalid JSON received: ${rawText}`);
      res.status(500).json({
        error: {
          message: 'Received invalid JSON from the OpenAI API.',
        },
      });
      return;
    }

    // Respond with the generated creature data
    res
      .status(200)
      .json({ result: creature, imagePrompt: creature.imagePrompt });
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
