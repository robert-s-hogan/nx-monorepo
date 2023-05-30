import Head from 'next/head';
import { useState } from 'react';
import { Section } from '@with-nx/react-ui';
import DevblogLayout from '../../components/layout/DevBlogLayout';

import { GiDoubleDragon } from 'react-icons/gi';
import { BiCopy, BiCheck } from 'react-icons/bi';

import { generateRandomValues } from '../api/creature-generator/generate';

export default function Home() {
  const [challengeRating, setChallengeRating] = useState('');
  const [numberOfMonsters, setNumberOfMonsters] = useState('');
  const [numberOfPlayers, setNumberOfPlayers] = useState('');
  const [playerLevel, setPlayerLevel] = useState('');
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);
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
        <div className="flex-col">
          <p>Armor Class: {creature.armorClass}</p>
          <p>Hit Points: {creature.hitPoints}</p>
          <p>Speed: {creature.speed}</p>
        </div>
        <hr className="my-2 h-0.5 border-t-0 bg-neutral-100" />
        <div className="flex space-x-2">
          <div className="flex-col text-center">
            <p>STR</p>
            <p>{creature.strength}</p>
          </div>
          <div className="flex-col text-center">
            <p>DEX</p>
            <p>{creature.dexterity}</p>
          </div>
          <div className="flex-col text-center">
            <p>CON</p>
            <p>{creature.constitution}</p>
          </div>
          <div className="flex-col text-center">
            <p>INT</p>
            <p>{creature.intelligence}</p>
          </div>
          <div className="flex-col text-center">
            <p>WIS</p>
            <p>{creature.wisdom}</p>
          </div>
          <div className="flex-col text-center">
            <p>CHA</p>
            <p>{creature.charisma}</p>
          </div>
        </div>
        <hr className="my-2 h-0.5 border-t-0 bg-neutral-100" />
        <p className="mb-3">Actions:</p>
        <div className="space-y-2">
          {creature.actions &&
            creature.actions.map((action, index) => (
              <p key={index} className="mt-1">
                <b>
                  <i>{action.name}</i>
                </b>
                : {action.damage}
              </p>
            ))}
        </div>
        <hr className="my-2 h-0.5 border-t-0 bg-neutral-100" />
        <p className="mb-3">Special Abilities:</p>

        <div className="space-y-2">
          {creature.specialAbilities &&
            creature.specialAbilities.map((ability, index) => (
              <p key={index} className="mt-1">
                <b>
                  <i>{ability.name}</i>
                </b>
                : {ability.description}
              </p>
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

  return (
    <DevblogLayout>
      <Section>
        <GiDoubleDragon className="text-6xl" />
        <h3>Create DND Monster</h3>
        <form onSubmit={onSubmit} className="md:hidden">
          <div className="flex flex-col space-y-4">
            <input
              type="number"
              name="numberOfPlayers"
              placeholder="Enter Number of Players"
              value={numberOfPlayers}
              onChange={(e) => setNumberOfPlayers(e.target.value)}
            />
            <input
              type="number"
              name="playerLevel"
              placeholder="Enter Player Level"
              value={playerLevel}
              onChange={(e) => setPlayerLevel(e.target.value)}
            />

            <input type="submit" value="Generate Creature" />
          </div>
        </form>
        {loading ? (
          <div className="mt-12">Loading...</div>
        ) : (
          <div
            className={`my-24 ${
              requestCompleted && 'bg-gray-900 shadow-lg'
            } rounded-md p-6`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl gap-6 px-4 md:px-2 leading-none">
              <div className="text-gray-300 flex-col space-y-4">
                <h2 className="text-2xl">{creature.name}</h2>
                <p className="leading-5">{creature.description}</p>

                {image ? (
                  <div>
                    <div
                      className={`flex items-center justify-between ${
                        image ? 'bg-gray-600 rounded-t-md' : ''
                      }`}
                    >
                      <p className="w-full p-1 px-2">DALLE-2</p>
                      <button
                        onClick={copyToClipboard}
                        className="flex justify-end text-gray-300 w-full p-1 px-2"
                      >
                        {isCopied ? (
                          <BiCheck className="text-xl" />
                        ) : (
                          <BiCopy className="text-xl" />
                        )}
                      </button>
                    </div>
                    <img
                      src={image}
                      alt="pic"
                      className="h-72 w-full rounded-md rounded-t-none transform shadow-lg mb-3"
                    />
                  </div>
                ) : (
                  requestCompleted &&
                  !image && (
                    <div className="flex items-center justify-center h-72">
                      <button
                        className="bg-gray-600 px-3 py-2"
                        onClick={loadImage}
                        disabled={imageLoading}
                      >
                        {imageLoading ? 'Loading Image...' : 'Fetch Image'}
                      </button>
                    </div>
                  )
                )}

                {/* {creature.imagePrompt && (
                  <p className='text-gray-300 mt-4 italic'>
                    {creature.imagePrompt}
                  </p>
                )} */}
              </div>

              <div className="text-gray-300 md:pl-4 pt-4">
                <div>{result}</div>
              </div>
            </div>
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
