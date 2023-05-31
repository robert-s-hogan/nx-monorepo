import Head from 'next/head';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { GiDoubleDragon } from 'react-icons/gi';
import { BiCopy, BiCheck } from 'react-icons/bi';

import {
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Text,
  Section,
} from '@with-nx/react-ui';
import { loadingMessages } from '@with-nx/constants';

import DevblogLayout from '../../components/layout/DevBlogLayout';
import { generateRandomValues } from '../api/creature-generator/generate';

export default function CreatureGenerator() {
  const [challengeRating, setChallengeRating] = useState('');
  const [numberOfMonsters, setNumberOfMonsters] = useState('');
  const [numberOfPlayers, setNumberOfPlayers] = useState('');
  const [playerLevel, setPlayerLevel] = useState('');
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [image, setImage] = useState();
  const [creature, setCreature] = useState({});
  const [isCopied, setIsCopied] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [requestCompleted, setRequestCompleted] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const randomValues = generateRandomValues();

    try {
      const response = await fetch('/api/creature-generator/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          numberOfPlayers,
          playerLevel,
          ...randomValues,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();

      const creature = data.result;
      setResult(<CreatureCard creature={creature} />);
      setCreature(creature);

      setChallengeRating('');
      setNumberOfPlayers('');
      setPlayerLevel('');
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
      setRequestCompleted(true);
    }
  }

  async function loadImage() {
    setImageLoading(true);
    try {
      const imageResponse = await fetch(
        '/api/creature-generator/generateImage',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            imagePrompt: creature.imagePrompt,
          }),
        }
      );

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

  function CreatureCard({ creature }) {
    return (
      <div className="creature-card">
        <Flex className="flex-col">
          <p>Armor Class: {creature.armorClass}</p>
          <p>Hit Points: {creature.hitPoints}</p>
          <p>Speed: {creature.speed}</p>
        </Flex>
        <hr className="my-2 h-0.5 border-t-0 bg-neutral-100" />
        <Flex className="flex space-x-2">
          <Flex className="flex-col text-center">
            <Text>STR</Text>
            <Text>{creature.strength}</Text>
          </Flex>
          <Flex className="flex-col text-center">
            <Text>DEX</Text>
            <Text>{creature.dexterity}</Text>
          </Flex>
          <Flex className="flex-col text-center">
            <Text>CON</Text>
            <Text>{creature.constitution}</Text>
          </Flex>
          <Flex className="flex-col text-center">
            <Text>INT</Text>
            <Text>{creature.intelligence}</Text>
          </Flex>
          <Flex className="flex-col text-center">
            <Text>WIS</Text>
            <Text>{creature.wisdom}</Text>
          </Flex>
          <Flex className="flex-col text-center">
            <Text>CHA</Text>
            <Text>{creature.charisma}</Text>
          </Flex>
        </Flex>
        <hr className="my-2 h-0.5 border-t-0 bg-neutral-100" />
        <Text className="mb-3">Actions:</Text>
        <div className="space-y-2">
          {creature.actions &&
            creature.actions.map((action, index) => (
              <Text key={index} className="mt-1">
                <b>
                  <i>{action.name}</i>
                </b>
                : {action.damage}
              </Text>
            ))}
        </div>
        <hr className="my-2 h-0.5 border-t-0 bg-neutral-100" />
        <Text className="mb-3">Special Abilities:</Text>

        <div className="space-y-2">
          {creature.specialAbilities &&
            creature.specialAbilities.map((ability, index) => (
              <Text key={index} className="mt-1">
                <b>
                  <i>{ability.name}</i>
                </b>
                : {ability.description}
              </Text>
            ))}
        </div>
      </div>
    );
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(image);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }

  function updateLoadingMessage() {
    const randomIndex = Math.floor(Math.random() * loadingMessages.length);
    setLoadingMessage(loadingMessages[randomIndex]);
  }

  useEffect(() => {
    let intervalId;

    if (loading) {
      intervalId = setInterval(() => {
        updateLoadingMessage();
      }, 2000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [loading]);

  return (
    <DevblogLayout>
      <Section className="space-y-4">
        <Flex className="items-center justify-center">
          <Image
            src="https://cloudflare-assets-nx-monorepo.vercel.app/conquest/conquest_logo.svg"
            height={100}
            width={100}
          />
        </Flex>
        <Heading level={3} className="text-center">
          Create DND Monster
        </Heading>
        <form onSubmit={onSubmit} className="max-w-lg mx-auto">
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

            <Button type="submit" className="btn-primary">
              Generate Creature
            </Button>
          </Flex>
        </form>
        {loading ? (
          <Flex className="items-center justify-center py-24">
            {loadingMessage}
          </Flex>
        ) : (
          <div
            className={`my-24 ${
              requestCompleted && 'bg-gray-900 shadow-lg'
            } rounded-md p-6`}
          >
            <Grid className="grid-cols-1 md:grid-cols-2 max-w-4xl gap-6 px-2 leading-none">
              <div className="text-gray-300 space-y-4">
                <Heading level={2} className="text-2xl">
                  {creature.name}
                </Heading>
                <Text className="leading-5">{creature.description}</Text>

                {image ? (
                  <div>
                    <Flex
                      className={`items-center justify-between ${
                        image ? 'bg-gray-600 rounded-t-md' : ''
                      }`}
                    >
                      <Text className="w-full p-1 px-2">DALLE-2</Text>
                      <Button
                        onClick={copyToClipboard}
                        className="flex justify-end text-gray-300 w-full p-1 px-2"
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
                      alt="pic"
                      className="h-72 w-full rounded-md rounded-t-none transform shadow-lg mb-3"
                      width={512}
                      height={512}
                    />
                  </div>
                ) : (
                  requestCompleted &&
                  !image && (
                    <Flex className="items-center justify-center h-72 border rounded-md">
                      <Button
                        className="bg-primary px-3 py-2 rounded-md"
                        onClick={loadImage}
                        disabled={imageLoading}
                      >
                        {imageLoading ? 'Loading Image...' : 'Fetch Image'}
                      </Button>
                    </Flex>
                  )
                )}
                {/* {creature.imagePrompt && (
                  <p className='text-gray-300 mt-4 italic'>
                    {creature.imagePrompt}
                  </p>
                )} */}
              </div>

              <div className="text-gray-300 md:pl-4">
                <div>{result}</div>
              </div>
            </Grid>
            {/* <div className='flex justify-between items-center px-4 mb-4 w-full'>
                <div className='flex'>
                  <i className='material-icons mr-2 text-red-600'>
                    favorite_border
                  </i>
                  <i className='material-icons text-blue-600'>remove_red_eye</i>
                </div>
                <div className='flex'>
                  <i className='material-icons ml-2 text-yellow-600'>
                    sentiment_very_satisfied
                  </i>
                  <i className='material-icons ml-2 text-yellow-600'>
                    sentiment_neutral
                  </i>
                  <i className='material-icons ml-2 text-yellow-600'>
                    sentiment_very_dissatisfied
                  </i>
                  <i className='material-icons ml-2 text-yellow-600'>
                    star_outline
                  </i>
                  <i className='material-icons ml-2 text-yellow-600'>
                    star_half
                  </i>
                  <i className='material-icons ml-2 text-yellow-600'>star</i>
                </div>
              </div> */}
          </div>
        )}
      </Section>
    </DevblogLayout>
  );
}
