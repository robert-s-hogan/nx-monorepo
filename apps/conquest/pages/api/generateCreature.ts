import { Configuration, OpenAIApi } from 'openai';
import Bottleneck from 'bottleneck';

import {
  alignments,
  dndSizes,
  environments,
  languages,
  specialTraits,
  species,
} from '@with-nx/constants';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
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
  console.log('API function invoked');

  console.log('Received request body:', req.body);

  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message:
          'OpenAI API key not configured, please follow instructions in README.md',
      },
    });
    return;
  }

  const { numberOfPlayers, playerLevel } = req.body;

  if (!numberOfPlayers || !playerLevel) {
    res.status(400).json({
      error: {
        message: 'Please provide all required parameters',
      },
    });
    return;
  }

  try {
    // Generate random values and assign to a variable
    const randomValues = generateRandomValues();
    console.log('About to call OpenAI API');

    const completion = await limiter.schedule(() =>
      openai.createCompletion({
        model: 'text-davinci-003',
        prompt: generatePrompt(numberOfPlayers, playerLevel, randomValues),
        temperature: 0.6,
        max_tokens: 500,
      })
    );
    console.log('Received data from OpenAI API', completion);

    let creature;
    let rawText = completion.data.choices[0].text.trim();
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

function generateCreatureProperties(properties) {
  const defaultActions = properties.actions || [
    {
      name: 'Claw',
      description:
        'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) slashing damage.',
    },
    {
      name: 'Tail',
      description:
        'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) bludgeoning damage.',
    },
    {
      name: 'Fire Breath (Recharge 5-6)',
      description:
        'The creature exhales fire in a 15-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking 24 (7d6) fire damage on a failed save, or half as much damage on a successful one.',
    },
  ];

  const defaultSpecialAbilities = properties.specialAbilities || [
    {
      name: 'Piercing Resistance',
      description: 'The creature has resistance to piercing damage.',
    },
    {
      name: 'Celestial Speech',
      description:
        'The creature can communicate with any creature that knows a specific language.',
    },
    {
      name: 'Invisibility',
      description:
        'The creature can turn invisible until it attacks or casts a spell.',
    },
  ];

  // Use JSON.stringify to convert the actions and special abilities arrays into JSON formatted strings
  const actionsJson = JSON.stringify(defaultActions, null, 2);
  const specialAbilitiesJson = JSON.stringify(defaultSpecialAbilities, null, 2);

  return `
  {
    "name": "${properties.name}",
    "description": "${properties.description}",
    "imagePrompt": "${properties.imagePrompt}",
    "armorClass": ${properties.armorClass},
    "hitPoints": ${properties.hitPoints},
    "speed": "${properties.speed}",
    "strength": ${properties.strength},
    "dexterity": ${properties.dexterity},
    "constitution": ${properties.constitution},
    "intelligence": ${properties.intelligence},
    "wisdom": ${properties.wisdom},
    "charisma": ${properties.charisma},
    "actions": ${actionsJson},
    "specialAbilities": ${specialAbilitiesJson}
  }`.trim();
}

function generatePrompt(numberOfPlayers, playerLevel, creatureProperties) {
  const properties = generateCreatureProperties(creatureProperties);

  return `Create a detailed ${creatureProperties.creatureType} for a DND game suitable for a party of ${numberOfPlayers} players at level ${playerLevel} with a challenge rating of ${creatureProperties.challengeRating}.

The ${creatureProperties.creatureType} is of size ${creatureProperties.size}, lives in a ${creatureProperties.environment}, and has an alignment of ${creatureProperties.alignment}. It has a special trait: ${creatureProperties.specialTrait}, and can communicate in ${creatureProperties.language}.

The creature should have the following properties in a JSON-like format:
${properties}

Now, create a similar creature: `;
}
