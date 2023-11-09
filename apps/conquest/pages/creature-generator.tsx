import ConquestLayout from '../components/ConquestLayout';
import Head from 'next/head';
import Image from 'next/image';
import React, { ReactElement, useState } from 'react';

import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Section,
  Text,
} from '@with-nx/react-ui';
import { copyToClipboard } from '@with-nx/utils';
import { BiCopy, BiCheck, BiLoaderAlt } from 'react-icons/bi';

import ConquestCreatureGeneratorCard from '../components/ConquestCreatureGeneratorCard';
import { generateRandomValues } from './api/generateCreature';
import { useReducer } from 'react';

// Action Types
const LOADING = 'LOADING';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const RESET = 'RESET';

const initialState = {
  loading: false,
  error: null,
  creature: null,
  image: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...initialState, loading: true };
    case SUCCESS:
      return { ...initialState, creature: action.payload };
    case FAILURE:
      return { ...initialState, error: action.payload };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

interface Creature {
  imagePrompt?: string;
  name?: string;
  description?: string;
}

const CreatureGenerator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [challengeRating, setChallengeRating] = useState('');
  const [numberOfMonsters, setNumberOfMonsters] = useState('');
  const [numberOfPlayers, setNumberOfPlayers] = useState('');
  const [playerLevel, setPlayerLevel] = useState('');
  const [result, setResult] = useState<ReactElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState();
  const [creature, setCreature] = useState<Creature>({});
  const [isCopied, setIsCopied] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [requestCompleted, setRequestCompleted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // New state variable

  async function loadCreatureGenerateImage() {
    setImageLoading(true);
    try {
      const imageResponse = await fetch('/api/generateCreatureImage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imagePrompt: creature.imagePrompt,
        }),
      });

      const imageData = await imageResponse.json();
      if (imageResponse.status !== 200) {
        throw new Error(
          imageData.error
            ? `Image request failed with message: ${imageData.error.message}`
            : `Image request failed with status ${imageResponse.status}`
        );
      }

      const imageUrl = imageData.imageUrl;
      setImage(imageUrl);
    } catch (error) {
      console.error(`Error with OpenAI API request: ${error}`);
      alert(error.message);
    } finally {
      setImageLoading(false);
    }
  }

  async function onSubmit(event) {
    event.preventDefault();
    dispatch({ type: LOADING });

    setLoading(true);
    const randomValues = generateRandomValues();

    try {
      const payload = {
        numberOfPlayers: parseInt(numberOfPlayers, 10),
        playerLevel: parseInt(playerLevel, 10),
        ...randomValues,
      };

      // It's a good practice to validate the numbers after parsing
      if (isNaN(payload.numberOfPlayers) || isNaN(payload.playerLevel)) {
        throw new Error('Invalid number of players or player level');
      }

      const response = await fetch('/api/generateCreature', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      const creature = data.result;
      setResult(<ConquestCreatureGeneratorCard creature={creature} />);
      setCreature(creature);

      // Reset the input fields to default values or empty strings if you prefer
      setChallengeRating('');
      setNumberOfPlayers('');
      setPlayerLevel('');

      dispatch({ type: SUCCESS, payload: creature });
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message); // Set the error message

      alert(error.message);
      dispatch({ type: FAILURE, payload: error.message });
    } finally {
      setLoading(false);
      setRequestCompleted(true);
    }
  }

  return (
    <ConquestLayout>
      <Section className="container mx-auto">
        <Grid className="grid-cols-1 mx-auto gap-6 px-4 md:px-2 leading-none space-y-8">
          <Box className="max-w-lg w-full mx-auto">
            <Box className="h-full mt-12">
              <Heading level={3}>Create DND Monster</Heading>
            </Box>

            <form onSubmit={onSubmit} className="">
              <Flex className="flex-col space-y-4">
                <Input
                  type="number"
                  name="numberOfPlayers"
                  placeholder="Enter Number of Players"
                  value={numberOfPlayers}
                  onChange={(e) => setNumberOfPlayers(e.target.value)}
                />
                <Input
                  type="number"
                  name="playerLevel"
                  placeholder="Enter Player Level"
                  value={playerLevel}
                  onChange={(e) => setPlayerLevel(e.target.value)}
                />

                <Button
                  className="btn-primary"
                  type="submit"
                  disabled={state.loading}
                >
                  {state.loading ? (
                    <BiLoaderAlt className="animate-spin" />
                  ) : (
                    'Generate Creature'
                  )}
                </Button>
              </Flex>
            </form>
            {state.error && <Text className="text-red-600">{state.error}</Text>}
          </Box>
          {!loading && (
            <Box
              className={`my-8 ${
                requestCompleted && 'bg-gray-900 shadow-lg'
              } rounded-md p-6`}
            >
              <Grid className="creature-grid grid-cols-1 md:grid-cols-2 max-w-4xl gap-6">
                <Box>
                  <Flex className="flex-col space-y-4">
                    <Heading level={2} className="text-2xl">
                      {creature.name}
                    </Heading>
                    <Text className="leading-5">{creature.description}</Text>

                    {image ? (
                      <Box>
                        <Flex
                          className={`items-center justify-between ${
                            image ? 'bg-gray-800 rounded-t-md' : ''
                          }`}
                        >
                          <Text className="w-full text-white p-1 px-2">
                            DALLE-3
                          </Text>
                          <Button
                            onClick={(event) => {
                              event.preventDefault();
                              copyToClipboard(image, setIsCopied);
                            }}
                            className="flex justify-end text-gray-300 w-auto p-1"
                          >
                            {isCopied ? (
                              <BiCheck className="text-xl" />
                            ) : (
                              <BiCopy className="text-xl" />
                            )}
                          </Button>
                        </Flex>
                        <Image
                          src={image}
                          height={300}
                          width={300}
                          alt="pic"
                          className="h-72 w-full rounded-md rounded-t-none transform shadow-lg mb-3"
                        />
                      </Box>
                    ) : (
                      requestCompleted &&
                      !image && (
                        <Flex className="items-center justify-center h-72">
                          <Button
                            className="bg-gray-700 px-3 py-2"
                            onClick={loadCreatureGenerateImage}
                            disabled={imageLoading}
                          >
                            {imageLoading ? 'Loading Image...' : 'Fetch Image'}
                          </Button>
                        </Flex>
                      )
                    )}
                  </Flex>
                </Box>
                <Box className="md:pl-4 pt-4 md:pt-0">{result}</Box>
              </Grid>
            </Box>
          )}
        </Grid>
      </Section>
    </ConquestLayout>
  );
};

export default CreatureGenerator;
