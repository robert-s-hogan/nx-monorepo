import { useState, useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Box, Flex, Heading, Slider, Text } from '@with-nx/react-ui';
import { ColorMap, jediColorMap, sithColorMap } from '../../utils/styleMaps';

import SwapiLayout from '../../components/SwapiLayout';
import SwapiSection from '../../components/SwapiSection';
import { people } from '../../data/peopleData';

const PersonPage = ({ person }) => {
  const [currentCharacter, setCurrentCharacter] = useState(person);
  const [isToggled, setIsToggled] = useState(false);

  const toggleToSpecificPersona = (targetPersona) => {
    const characterSet = people.filter(
      (char) => char.id === currentCharacter.id
    );
    if (characterSet.length <= 1) return;

    let targetCharacter = characterSet.find(
      (char) =>
        char.name !== currentCharacter.name &&
        char.persona.includes(targetPersona)
    );
    // If we don't find a different character, we'll default to the first one.
    if (!targetCharacter) targetCharacter = characterSet[0];

    setCurrentCharacter(targetCharacter);
  };

  const characterSet = people.filter((char) => char.id === currentCharacter.id);

  const personas = currentCharacter.persona;
  const [activePersona, setActivePersona] = useState(personas[0]); // We assume Sith is the first, adjust as needed

  function getColorMapForPersona(persona: string): ColorMap {
    switch (persona) {
      case 'Jedi':
        return jediColorMap;
      case 'Sith':
        return sithColorMap;
      default:
        // Ensure a default object matches the ColorMap structure.
        return {
          primary: 'text-default-primary',
          secondary: 'text-default-secondary',
          tertiary: 'text-default-tertiary',
        };
    }
  }

  const colorMap = getColorMapForPersona(activePersona);
  const primaryColorClass = colorMap.primary;

  return (
    <SwapiLayout>
      <SwapiSection backgroundColor="secondary" minHeight="600">
        <Box className="max-w-sm mx-auto">
          <div className="relative w-24 h-[43px] bg-gray-300 border-2 border-light-blue rounded-full p-1">
            <div
              className={`absolute w-18 h-6 bg-white rounded-full transition-transform duration-300 ease-in-out ${
                isToggled ? 'transform translate-x-full' : ''
              }`}
            ></div>

            <button
              className="absolute inset-0 w-full h-full flex justify-between items-center focus:outline-none"
              onClick={() => {
                const newPersona = isToggled ? personas[0] : personas[1];
                setIsToggled(!isToggled);
                setActivePersona(newPersona);
                toggleToSpecificPersona(newPersona);
              }}
            >
              <span
                className={`p-2 transition-opacity duration-300 ${
                  activePersona === personas[0]
                    ? `${
                        primaryColorClass ? primaryColorClass : 'text-white'
                      } rounded-full border-2 border-white opacity-100`
                    : 'opacity-50'
                }`}
              >
                {personas[0]}
              </span>
              <span
                className={`p-2 transition-opacity duration-300 ${
                  activePersona === personas[1]
                    ? `${
                        primaryColorClass ? primaryColorClass : 'text-white'
                      } rounded-full border-2 border-white opacity-100`
                    : 'opacity-50'
                }`}
              >
                {personas[1]}
              </span>
            </button>
          </div>

          <Flex className="flex-col md:flex-row justify-between items-center">
            <Flex className="flex-col items-center">
              <Heading level={1} className="text-center pb-2">
                {currentCharacter.name}
              </Heading>
              <Text className="text-center text-4xl text-white mb-8">
                Profile
              </Text>
            </Flex>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 176 176"
              className="h-[176px] w-[176px] order-first md:order-last mb-10 md:mb-0"
            >
              <g>
                <defs>
                  <linearGradient
                    id="idss4220646760_1g-1728017759"
                    x1="0.49751243781094523"
                    x2="0.5024875621890548"
                    y1="0"
                    y2="1"
                  >
                    <stop
                      offset="0"
                      stop-color="#f72485"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      offset="1"
                      stop-color="hsl(333, 100%, 50%)"
                      stop-opacity="1"
                    ></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M 88.064 0.975 C 136.161 0.975 175.152 39.966 175.152 88.064 C 175.152 88.126 175.152 88.187 175.152 88.249 L 0.975 88.249 C 0.975 88.187 0.975 88.126 0.975 88.064 C 0.975 39.966 39.966 0.975 88.064 0.975 Z M 88.064 175.152 C 73.399 175.152 59.58 171.527 47.455 165.125 L 128.672 165.125 C 116.547 171.527 102.729 175.152 88.064 175.152 Z M 175.096 91.22 C 175.029 93.093 174.903 94.95 174.72 96.791 L 1.407 96.791 C 1.224 94.95 1.098 93.093 1.031 91.22 Z M 174.373 99.762 C 174.087 101.892 173.724 103.997 173.287 106.076 L 2.84 106.076 C 2.403 103.997 2.04 101.892 1.754 99.762 Z M 171.816 112.018 C 171.206 114.157 170.515 116.262 169.748 118.331 L 6.379 118.331 C 5.612 116.262 4.922 114.157 4.311 112.018 Z M 167.291 124.273 C 166.246 126.556 165.105 128.786 163.873 130.958 L 12.254 130.958 C 11.022 128.786 9.881 126.556 8.836 124.273 Z M 155.162 143.585 C 152.538 146.753 149.694 149.731 146.653 152.498 L 29.474 152.498 C 26.433 149.731 23.589 146.753 20.965 143.585 Z"
                  fill="url(#idss4220646760_1g-1728017759)"
                ></path>
              </g>
            </svg>
          </Flex>
        </Box>
      </SwapiSection>
      <SwapiSection
        backgroundColor="primary"
        minHeight="400"
        headingAlignment="left"
        headingColor="white"
        headingLevel={2}
        heading="Character Chronicles"
      >
        <Text className="text-white">{currentCharacter.main_story_arc}</Text>
      </SwapiSection>
      <SwapiSection
        backgroundColor="primary"
        minHeight="400"
        headingAlignment="left"
        headingColor="white"
        headingLevel={2}
        heading="Achievements"
      >
        <ul>
          {currentCharacter.achievements.map((achievement, index) => (
            <li key={index}>
              <Text className="text-white text-xl">{achievement}</Text>
            </li>
          ))}
        </ul>
      </SwapiSection>
      <SwapiSection
        backgroundColor="primary"
        minHeight="400"
        headingAlignment="left"
        headingColor="white"
        headingLevel={2}
        heading="The Ultimate Backstory"
      >
        <Text className="text-white">{currentCharacter.backstory}</Text>
      </SwapiSection>

      <SwapiSection
        backgroundColor="primary"
        minHeight="400"
        className="bg-no-repeat bg-cover bg-center bg-gradient-to-br from-primary to-secondary"
      >
        <Text className="text-white text-center">{currentCharacter.quote}</Text>
      </SwapiSection>

      <SwapiSection
        backgroundColor="primary"
        minHeight="400"
        headingAlignment="left"
        headingColor="white"
        headingLevel={2}
        heading="Factions"
      >
        <ul>
          {currentCharacter.factions.map((faction) => (
            <li key="faction">
              <Text className="text-white text-xl">{faction}</Text>
            </li>
          ))}
        </ul>
      </SwapiSection>
    </SwapiLayout>
  );
};

export default PersonPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = people.map((person) => ({
    params: { slug: person.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const person = people.find((person) => person.slug === params.slug);

  if (!person) {
    return {
      notFound: true,
    };
  }

  return {
    props: { person },
  };
};
