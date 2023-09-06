import React, { useState, useEffect } from 'react';
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

export default function Home() {
  const [character, setCharacter] = useState('');
  const [searchResults, setSearchResults] = useState(false);
  const [displayCount, setDisplayCount] = useState(4);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchResults(true);
  };

  const { data, error } = useSWR('/api/people/');

  return (
    <SwapiLayout>
      {/* Hero */}
      <SwapiSection
        backgroundColor="yellow"
        minHeight="600"
        className="p-25"
        headingLevel={1}
        heading="Swapi+"
        headingColor="primary"
      >
        <Flex className="flex-col md:flex-row text-center space-y-4 md:space-y-0 md:space-x-8 justify-center mt-8">
          <Text className="font-semibold text-primary">Bank</Text>
          <Text className="font-semibold text-primary">Creator</Text>
          <Text className="font-semibold text-primary">API</Text>
        </Flex>
      </SwapiSection>
      {/* Welcome to the Jedi Creation Club */}
      <SwapiSection
        backgroundColor="white"
        minHeight="600"
        headingLevel={2}
        headingColor="primary"
        heading="Welcome to the Jedi Creation Lab"
        headingAlignment="left"
        className="relative p-4 "
      >
        <div className="w-full md:max-w-3xl mr-auto">
          <div className="flex flex-col justify-start gap-4">
            <Text className="text-lg font-medium leading-relaxed text-left">
              Unleash your creativity and forge your very own Star Wars
              characters in the Jedi Creation Lab! Dive into the vast universe
              of character possibilities from a cunning bounty hunter to a
              legendary Jedi master.
            </Text>
            <Text className="text-lg font-medium leading-relaxed text-left">
              Utilize our Character Bank—a meticulously curated selection of
              iconic Star Wars figures—to fuel your inspiration.
            </Text>
            <Text className="text-lg font-medium leading-relaxed text-left">
              Sky’s the limit when you bring your creations to life using our
              cutting-edge API that makes character creation a breeze.
            </Text>
          </div>
          <div className="absolute top-[95px] md:top-10 right-[-150px] md:right-0 transform-[rotate(15deg)]">
            <svg viewBox="0 0 200 200" className="w-[50%] h-[50%]">
              <path
                d="M 85.358 98.416 C 85.358 99.097 85.159 100.262 86.176 100.262 C 86.864 100.262 87.888 99.354 87.928 98.647 C 87.97 97.904 87.818 97.032 86.876 97.032 C 86.368 97.032 85.115 96.819 84.891 97.263 M 108.956 96.34 C 108.956 97.833 108.759 98.871 110.695 98.365 C 112.088 98.001 113.862 96.891 113.862 95.302 C 113.862 93.445 112.278 93.572 110.825 93.572 C 109.422 93.572 109.89 95.28 109.89 96.34 M 73.909 111.797 C 78.077 115.538 81.873 119.475 87.253 121.563 C 90.788 122.935 94.778 122.64 98.494 122.64 C 102.819 122.64 106.434 121.405 110.15 119.23 C 116.961 115.243 124.241 109.542 128.166 102.595 C 129.843 99.627 130.268 96.784 130.918 93.572 M 89.204 78.491 C 81.393 78.491 76.555 79.951 70.73 85.668 C 64.032 92.244 60.511 100.298 59.455 109.4 C 58.448 118.088 58.655 125.956 64.907 132.607 C 74.799 143.128 91.711 145.457 105.507 144.184 C 117.567 143.072 129.89 135.719 135.626 124.88 C 142.159 112.536 142.598 95.625 137.691 82.735 C 134.982 75.62 130.235 69.525 124.457 64.556 C 118.131 59.115 110.368 57.185 102.199 56.174 C 91.064 54.797 79.165 55.193 69.195 60.575"
                stroke-width="5"
                stroke="rgb(242, 242, 242)"
                stroke-linecap="round"
                fill="none"
                stroke-miterlimit="10"
              ></path>
            </svg>
          </div>
          <div className="absolute right-[-150px] md:right-[120px] bottom-[180px] md:bottom-[110px] transform-[-translate-x-1/2 -translate-y-1/2] rotate-[-10deg]">
            <svg viewBox="0 0 200 200" className="w-[50%] h-[50%]">
              <path
                d="M 94.922 75.769 C 89.519 71.031 91.511 93.705 91.511 97.265 C 91.511 106.855 88.556 121.195 102.598 121.195 C 113.389 121.195 114.352 118.474 116.246 108.389 C 118.067 98.696 119.426 82.636 111.982 74.836 C 104.242 66.724 94.055 71.804 86.962 78.573 C 80.3 84.933 74.559 92.343 67.631 98.389 C 63.08 102.357 56.353 107.621 54.174 113.531 C 52.043 119.308 75.335 114.374 77.297 113.342 C 90.374 106.476 102.355 98.168 106.012 83.34 C 106.237 82.421 109.665 59.895 107.433 61.095 C 100.47 64.841 95.912 76.505 92.271 82.685 C 85.522 94.136 77.643 104.909 70.854 116.332 C 69.564 118.507 60.199 137.845 64.597 138.019 C 78.157 138.554 82.581 131.822 85.352 118.764 C 88.761 102.694 84.554 87.414 72.844 75.864 C 64.685 67.815 62.077 73.095 70.096 79.509 C 93.511 98.231 126.767 117.831 158.036 117.831"
                stroke-width="5"
                stroke="rgb(242, 242, 242)"
                stroke-linecap="round"
                fill="none"
                stroke-miterlimit="10"
              ></path>
            </svg>
          </div>
          <div className="w-full h-auto bg-transparent bg-[radial-gradient(rgb(2,48,71) 1px, transparent 1px), radial-gradient(rgb(2,48,71) 1px, rgb(255,255,255) 1px)] bg-position-[0 0,30px 30px] bg-[60px 60px] rounded-none"></div>
        </div>
      </SwapiSection>
      {/* Character Bank Highlights */}
      <SwapiSection
        backgroundColor="primary"
        minHeight="400"
        headingLevel={2}
        heading="Character Bank Highlights"
        headingAlignment="left"
        headingColor="light-blue"
        className="px-4"
      >
        <Flex className="flex-col space-y-1 md:w-full">
          {people.slice(0, displayCount).map((person) => (
            <Flex className="justify-between items-center md:w-full">
              <Flex className="space-x-4">
                <Text className="text-white font-medium text-xl whitespace-nowrap">
                  {person.birth_year}
                </Text>
                <Text className="text-[#8ECAE6] whitespace-nowrap text-xl">
                  {person.name}
                </Text>
              </Flex>
              <div className="hidden md:block bg-[#8ECAE6] opacity-10 w-full h-[.5px] overflow-hidden relative mx-4" />
              <ArrowCurvedDownRight className="h-16 w-16 text-light-blue ml-auto opacity-80" />
            </Flex>
          ))}
          {displayCount < people.length && (
            <Button onClick={() => setDisplayCount(displayCount + 4)}>
              Load More
            </Button>
          )}
        </Flex>
      </SwapiSection>

      <SwapiSection
        backgroundColor="primary"
        minHeight="200"
        headingLevel={2}
        heading="Character Inspirations"
        headingAlignment="left"
        headingColor="yellow"
        className="px-4"
      >
        <div className="grid grid-rows-3 grid-cols-2 gap-4 mt-8 min-h-[500px]">
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
        backgroundColor="primary"
        minHeight="400"
        headingLevel={2}
        heading="Ready to Forge Your Galaxy?"
        headingColor="light-blue"
        className="px-4"
      >
        <p className="font-medium text-center text-white leading-relaxed mb-4">
          Begin your epic Star Wars character creation journey now! Expand your
          universe. Don’t miss the chance to explore new stories and create
          unforgettable adventures.
        </p>

        <div className="btn-primary text-center transition-colors">
          Create Now
        </div>
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
