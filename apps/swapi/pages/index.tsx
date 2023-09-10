import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button, Flex, Heading, Skeleton, Text } from '@with-nx/react-ui';
import { ArrowCurvedDownRight } from '@with-nx/icons';
import useSWR from 'swr';

import { people } from '../data/peopleData';
import Characters from '../components/Characters';
import SwapiLayout from '../components/SwapiLayout';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Loading from '../components/Loading';
import { Person } from '../types/api/types';
import Pagination from '../components/Pagination';
import CharacterList from '../components/CharacterList';
import SwapiSearch from '../components/SwapiSearch';
import SwapiSection from '../components/SwapiSection';
import { useTheme } from '../context/ThemeProvider';

import SwapiSmileySVG from '../icons/SwapiSmileySVG';
import SwapiCursiveSVG from '../icons/SwapiCursiveSVG';
import SwapiRightArrow from '../icons/SwapiRightArrow';

import { getColorSchemeForPersona, Persona } from '../utils/themeMap';

export default function Home() {
  const [character, setCharacter] = useState('');
  const [searchResults, setSearchResults] = useState(false);
  const [displayCount, setDisplayCount] = useState(4);
  const { colors, activePersona, setActivePersona } = useTheme();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchResults(true);
  };

  const { data, error } = useSWR('/api/people/');
  const defaultColorScheme = getColorSchemeForPersona('Default');

  return (
    <SwapiLayout>
      {/* <SwapiThemeColorPallete themeColors={defaultColorScheme} /> */}
      {/* Swapi+ */}
      <SwapiSection
        minHeight="600"
        className="p-25 text-center"
        headingLevel={1}
        heading="Swapi+ Bank Creator API"
        backgroundColor={defaultColorScheme?.background?.primary}
        headingTextColor={defaultColorScheme?.text?.accent}
        customBg={true}
      />
      {/* Welcome to the Star Wars Creation Club */}
      <SwapiSection
        minHeight="600"
        headingLevel={2}
        heading="Welcome to the Star Wars Creation Lab"
        headingAlignment="left"
        className="relative p-4"
        backgroundColor={defaultColorScheme?.background?.background}
        headingTextColor={defaultColorScheme?.text?.tertiary}
      >
        <div className="w-full md:max-w-3xl mr-auto">
          <div className="flex flex-col justify-start gap-4">
            <p>
              Step into a galaxy far, far away and craft your unique Star Wars
              characters. From a cunning bounty hunter to a revered Jedi master,
              the possibilities are endless.
            </p>
          </div>
          <div className="absolute top-[95px] md:top-10 right-[-150px] md:right-0 transform-[rotate(15deg)]">
            <SwapiSmileySVG
              className={`h-24 w-24 ${defaultColorScheme?.text?.accent}`}
            />
          </div>
          <div className="absolute right-[-150px] md:right-[120px] bottom-[180px] md:bottom-[110px] transform-[-translate-x-1/2 -translate-y-1/2] rotate-[-10deg]">
            <SwapiCursiveSVG />
          </div>
          <div className="w-full h-auto bg-transparent bg-[radial-gradient(rgb(2,48,71) 1px, transparent 1px), radial-gradient(rgb(2,48,71) 1px, rgb(255,255,255) 1px)] bg-position-[0 0,30px 30px] bg-[60px 60px] rounded-none"></div>
        </div>
      </SwapiSection>
      {/* Character Bank: Fuel Your Imagination */}
      <SwapiSection
        minHeight="600"
        headingLevel={2}
        heading="Character Bank: Fuel Your Imagination"
        headingAlignment="left"
        className="relative p-4"
        backgroundColor={defaultColorScheme?.background?.primary}
        headingTextColor={defaultColorScheme?.text?.accent}
      >
        <p className="text-default-background">
          Dive into our extensive Character Bank—a curated selection of iconic
          Star Wars figures—and let them guide your imagination.
        </p>
      </SwapiSection>
      {/* Powerful API For Seamless Character Creation */}
      <SwapiSection
        minHeight="600"
        headingLevel={2}
        heading="Powerful API For Seamless Character Creation"
        headingAlignment="left"
        className="relative p-4"
        backgroundColor={defaultColorScheme?.background?.background}
        headingTextColor={defaultColorScheme?.text?.tertiary}
      >
        <p>
          Harness our state-of-the-art API. Crafting characters is now as
          intuitive as it gets.
        </p>
      </SwapiSection>
      {/* Character Bank Spotlight */}
      <SwapiSection
        minHeight="600"
        headingLevel={2}
        heading="Character Bank Spotlight"
        headingAlignment="left"
        backgroundColor={defaultColorScheme?.background?.primary}
        headingTextColor={defaultColorScheme?.text?.accent}
      >
        <Flex className="flex-col space-y-1 md:w-full">
          {people.slice(0, displayCount).map((person) => (
            <Flex
              key={`character-bank-${person.name}`}
              className="justify-between items-center md:w-full"
            >
              <Flex className="space-x-4">
                <Text
                  className={`${defaultColorScheme?.text?.background}  font-medium text-xl whitespace-nowrap`}
                >
                  {person.birth_year}
                </Text>
                <Text
                  className={`${defaultColorScheme?.text?.background} whitespace-nowrap text-xl`}
                >
                  {person.name}
                </Text>
              </Flex>
              <div
                className={`hidden md:block ${defaultColorScheme?.background?.background} opacity-10 w-full h-[.5px] overflow-hidden relative mx-4`}
              />
              <Link href={`/people/${person.slug}`}>
                <ArrowCurvedDownRight
                  className={`h-16 w-16 ${defaultColorScheme?.text?.accent} ml-auto opacity-80`}
                />
              </Link>
            </Flex>
          ))}
          {displayCount < people.length && (
            <Button
              className={`btn-primary text-center w-auto mx-auto ${defaultColorScheme?.background?.accent}`}
              onClick={() => setDisplayCount(displayCount + 4)}
            >
              Load More
            </Button>
          )}
        </Flex>
      </SwapiSection>

      {/* <SwapiSection
        minHeight="600"
        headingLevel={2}
        heading="Character Inspirations"
        headingAlignment="left"
        backgroundColor={defaultColorScheme?.background?.background}
        headingTextColor={defaultColorScheme?.text?.tertiary}
      >
        <div className="grid grid-rows-3 grid-cols-2 gap-4 pb-16">
          <div className="relative group overflow-hidden col-span-1 row-span-1">
            <img
              src="https://framerusercontent.com/images/7nfGGDYNAkbf641Ird5mi1Z3VI.jpg?scale-down-to=512"
              alt="Description"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white">Text for Box 1</span>
            </div>
          </div>

          <div className="relative group overflow-hidden col-span-1 row-span-2">
            <img
              src="https://framerusercontent.com/images/sywZubVBko9GaI341OKwxEr7j0.jpg?scale-down-to=512"
              alt="Description"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white">Text for Box 2</span>
            </div>
          </div>

          <div className="relative group overflow-hidden col-span-1 row-span-2">
            <img
              src="https://framerusercontent.com/images/ZYjTHduElaC4A2vUqo74fwaRMYo.jpg?scale-down-to=512"
              alt="Description"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white">Text for Box 3</span>
            </div>
          </div>

          <div className="relative group overflow-hidden col-span-1 row-span-1">
            <img
              src="https://framerusercontent.com/images/c45gDEeo7tICW6yPT3Gtn5NISH4.jpg?scale-down-to=512"
              alt="Description"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white">Text for Box 4</span>
            </div>
          </div>
        </div>
      </SwapiSection> */}

      {/* Forge Your Galactic Legacy */}
      <SwapiSection
        minHeight="600"
        headingLevel={2}
        heading="Forge Your Galactic Legacy"
        className="px-4"
        backgroundColor={defaultColorScheme?.background?.background}
        headingTextColor={defaultColorScheme?.text?.tertiary}
      >
        <SwapiRightArrow className="w-48 h-48 text-primary mx-auto opacity-80" />
        <p className="text-black">
          Embark on your Star Wars character creation odyssey. Expand your
          universe, craft new stories, and embark on unforgettable adventures.
        </p>

        <Flex className="justify-center py-6">
          <Button
            className={`btn-primary text-center w-auto ${defaultColorScheme?.background?.accent}`}
          >
            Create Now
          </Button>
        </Flex>
      </SwapiSection>

      {/* <div className="flex justify-center max-w-7xl xl:max-w-7xl container mx-auto mt-8 px-2">
        <SwapiSearch />
      </div> */}

      {searchResults && (
        <p className="text-center text-white my-8 px-2">
          <span className="letter-box font-light text-center bg-red search-results mr-2 text-lg">
            {searchResults}
          </span>
        </p>
      )}
    </SwapiLayout>
  );
}
