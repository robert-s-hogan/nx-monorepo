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
import { getColorMap } from '../utils/themeMap';

import SwapiSmileySVG from '../icons/SwapiSmileySVG';
import SwapiCursiveSVG from '../icons/SwapiCursiveSVG';
import SwapiRightArrow from '../icons/SwapiRightArrow';

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
  console.log(`colors`, colors);
  return (
    <SwapiLayout>
      {/* Hero */}
      <SwapiSection
        minHeight="600"
        className="p-25"
        headingLevel={1}
        heading="Swapi+"
        backgroundColor={colors?.background?.primary}
        headingTextColor={colors?.text?.accent}
      >
        <Flex className="flex-col md:flex-row text-center space-y-4 md:space-y-0 md:space-x-2 md:w-96 md:mx-auto justify-center mt-8">
          <Text className={`font-semibold ${colors?.text?.accent}`}>Bank</Text>
          <Text className={`font-semibold ${colors?.text?.accent}`}>
            Creator
          </Text>
          <Text className={`font-semibold ${colors?.text?.accent}`}>API</Text>
        </Flex>
      </SwapiSection>
      {/* Welcome to the Jedi Creation Club */}
      <SwapiSection
        minHeight="600"
        headingLevel={2}
        heading="Welcome to the Jedi Creation Lab"
        headingAlignment="left"
        className="relative p-4"
        backgroundColor={colors?.background?.background}
        headingTextColor={colors?.text?.tertiary}
      >
        <div className="w-full md:max-w-3xl mr-auto">
          <div className="flex flex-col justify-start gap-4">
            <p>
              Unleash your creativity and forge your very own Star Wars
              characters in the Jedi Creation Lab! Dive into the vast universe
              of character possibilities from a cunning bounty hunter to a
              legendary Jedi master.
            </p>
            <p>
              Utilize our Character Bank—a meticulously curated selection of
              iconic Star Wars figures—to fuel your inspiration.
            </p>
            <p>
              Sky’s the limit when you bring your creations to life using our
              cutting-edge API that makes character creation a breeze.
            </p>
          </div>
          <div className="absolute top-[95px] md:top-10 right-[-150px] md:right-0 transform-[rotate(15deg)]">
            <SwapiSmileySVG />
          </div>
          <div className="absolute right-[-150px] md:right-[120px] bottom-[180px] md:bottom-[110px] transform-[-translate-x-1/2 -translate-y-1/2] rotate-[-10deg]">
            <SwapiCursiveSVG />
          </div>
          <div className="w-full h-auto bg-transparent bg-[radial-gradient(rgb(2,48,71) 1px, transparent 1px), radial-gradient(rgb(2,48,71) 1px, rgb(255,255,255) 1px)] bg-position-[0 0,30px 30px] bg-[60px 60px] rounded-none"></div>
        </div>
      </SwapiSection>
      {/* Character Bank Highlights */}
      <SwapiSection
        minHeight="600"
        headingLevel={2}
        heading="Character Bank Highlights"
        headingAlignment="left"
        backgroundColor={colors?.background?.primary}
        headingTextColor={colors?.text?.accent}
      >
        <Flex className="flex-col space-y-1 md:w-full">
          {people.slice(0, displayCount).map((person) => (
            <Flex
              key={`character-bank-${person.name}`}
              className="justify-between items-center md:w-full"
            >
              <Flex className="space-x-4">
                <Text className="text-white font-medium text-xl whitespace-nowrap">
                  {person.birth_year}
                </Text>
                <Text className="text-[#8ECAE6] whitespace-nowrap text-xl">
                  {person.name}
                </Text>
              </Flex>
              <div className="hidden md:block bg-[#8ECAE6] opacity-10 w-full h-[.5px] overflow-hidden relative mx-4" />
              <Link href={`/people/${person.slug}`}>
                <ArrowCurvedDownRight className="h-16 w-16 text-light-blue ml-auto opacity-80" />
              </Link>
            </Flex>
          ))}
          {displayCount < people.length && (
            <Button
              className="btn-primary"
              onClick={() => setDisplayCount(displayCount + 4)}
            >
              Load More
            </Button>
          )}
        </Flex>
      </SwapiSection>

      <SwapiSection
        minHeight="600"
        headingLevel={2}
        heading="Character Inspirations"
        headingAlignment="left"
        backgroundColor={colors?.background?.background}
        headingTextColor={colors?.text?.tertiary}
      >
        <div className="grid grid-rows-3 grid-cols-2 gap-4 pb-16">
          {/* First box: 1row-1column */}
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

          {/* Second box: 2rows-1column */}
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

          {/* Third box: 1row-1column */}
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

          {/* Fourth box: 2rows-1column */}
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
      </SwapiSection>

      <SwapiSection
        minHeight="600"
        headingLevel={2}
        heading="Ready to Forge Your Galaxy?"
        className="px-4"
        backgroundColor={colors?.background?.primary}
        headingTextColor={colors?.text?.accent}
      >
        <SwapiRightArrow className="w-36 h-36 text-light-blue mx-auto opacity-80" />
        <p className="font-medium text-center text-white leading-relaxed mb-4">
          Begin your epic Star Wars character creation journey now! Expand your
          universe. Don’t miss the chance to explore new stories and create
          unforgettable adventures.
        </p>

        <Flex className="justify-center">
          <Button className="btn-primary text-center w-auto">Create Now</Button>
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
