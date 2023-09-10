import { useState, useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Box, Flex, Grid, Heading, Slider } from '@with-nx/react-ui';
import { useRouter } from 'next/router';

import {
  getColorSchemeForPersona,
  Persona,
  GradientColorScheme,
} from '../../utils/themeMap';
import { minHeightMap } from '../../utils/stylesMap';
import SwapiLayout from '../../components/SwapiLayout';
import SwapiSection from '../../components/SwapiSection';
import SwapiSunSVG from '../../icons/SwapiSunSVG';
import SwapiThemeColorPallete from '../../components/SwapiThemeColorPallete';
import { people } from '../../data/peopleData';
import { useTheme } from '../../context/ThemeProvider';

const PersonPage = ({ person }) => {
  const router = useRouter();
  const { slug } = router.query;
  const { colors, activePersona, setActivePersona } = useTheme();

  useEffect(() => {
    if (person) {
      setActivePersona(person.persona[0]); // assuming the first persona is the main one
    }
  }, [slug, person]);

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

  const cyclePersona = () => {
    if (personas && personas.length) {
      let currentIndex = personas.indexOf(activePersona);
      let nextIndex = (currentIndex + 1) % personas.length;
      return personas[nextIndex];
    }
    return null;
  };

  useEffect(() => {
    if (person && person.persona && person.persona.length) {
      setActivePersona(person.persona[0]);
    }
  }, [slug, person]);

  const currentColorScheme = getColorSchemeForPersona(activePersona as any);

  const colorScheme: any = currentColorScheme;
  console.log(`colorScheme`, colorScheme);

  return (
    <SwapiLayout>
      {/* <SwapiThemeColorPallete themeColors={currentColorScheme} /> */}
      {/* <div className="p-5 text-sm bg-gradient-to-r from-tertiary via-light-blue to-secondary">
        <Grid className="grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
          <div className="text-white">HEX:</div>
          {Object.values(currentColorScheme.hex).map((color, index) => (
            <div
              style={{
                backgroundColor: color,
                textAlign: 'center',
                color: 'white',
              }}
              className={index === 3 ? '!text-black' : ''}
              key={index}
            >
              {color}
            </div>
          ))}
        </Grid>
        <Grid className="grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
          <div className="text-white">TEXT:</div>
          {Object.values(currentColorScheme.text).map((color, index) => (
            <div
              style={{
                backgroundColor: 'lightgrey',
                textAlign: 'center',
              }}
              className={`${color} ${index === 3 ? '!text-black' : ''}`}
              key={index}
            >
              {color}
            </div>
          ))}
        </Grid>
        <Grid className="grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
          <div className="text-white">BACKGROUND:</div>
          {Object.values(currentColorScheme.background).map((color, index) => (
            <div
              style={{
                textAlign: 'center',
              }}
              className={`${color} ${
                index === 3 ? '!text-black' : 'text-white'
              }`}
              key={index}
            >
              {color}
            </div>
          ))}
        </Grid>
        <Grid className="grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
          <div className="text-white">BORDER:</div>
          {Object.values(currentColorScheme.border).map((color, index) => (
            <div
              style={{
                textAlign: 'center',
                backgroundColor: 'white',
              }}
              className={`border-4 ${color}`}
              key={index}
            >
              {color}
            </div>
          ))}
        </Grid>
      </div> */}
      <SwapiSection
        minHeight="600"
        backgroundColor={currentColorScheme?.background?.background}
        headingTextColor={currentColorScheme?.text?.primary}
      >
        <Flex className="flex-col items-center space-y-12">
          {personas && personas.length > 1 && (
            <div
              className={`relative w-24 h-10 ${currentColorScheme?.background?.primary} border-3 ${currentColorScheme?.border?.accent} rounded-full p-1`}
            >
              <div
                className={`absolute w-18 h-6 rounded-full transition-transform duration-300 ease-in-out ${
                  isToggled ? 'transform translate-x-full' : ''
                }`}
              ></div>

              <button
                className="absolute inset-0 w-full h-full flex justify-between items-center focus:outline-none"
                onClick={() => {
                  const newPersona = cyclePersona();
                  if (newPersona) {
                    setActivePersona(newPersona);
                    toggleToSpecificPersona(newPersona);
                  }
                }}
              >
                <span
                  className={`p-2 transition-opacity duration-300 ${
                    activePersona === personas[0]
                      ? `${
                          currentColorScheme?.text?.accent
                            ? currentColorScheme?.text?.accent
                            : 'text-white'
                        } rounded-full border-[2px] ${
                          currentColorScheme?.border?.accent
                        } opacity-100`
                      : 'opacity-30 text-white'
                  }`}
                >
                  {personas[0]}
                </span>
                <span
                  className={`p-2 transition-opacity duration-300 ${
                    activePersona === personas[1]
                      ? `${
                          currentColorScheme?.text?.accent
                            ? currentColorScheme?.text?.accent
                            : 'text-white'
                        } rounded-full border-[4px] ${
                          currentColorScheme?.border?.accent
                        } opacity-100`
                      : 'opacity-30 text-white'
                  }`}
                >
                  {personas[1]}
                </span>
              </button>
            </div>
          )}
          <Flex className="flex-col items-center">
            <Heading
              level={1}
              className={`${currentColorScheme?.text?.primary} text-center pb-2`}
            >
              {currentCharacter.name}
            </Heading>
            <p
              className={`text-center text-4xl ${
                currentColorScheme?.text?.accent || 'text-white'
              } mb-8`}
            >
              Profile
            </p>
          </Flex>
          <SwapiSunSVG
            className="w-32 h-32"
            primaryColor={currentColorScheme?.background?.primary}
            secondaryColor={currentColorScheme?.background?.secondary}
          />
        </Flex>
      </SwapiSection>
      <SwapiSection
        minHeight="400"
        headingAlignment="left"
        headingLevel={2}
        heading="Character Chronicles"
        backgroundColor={currentColorScheme?.background?.secondary}
        headingTextColor={currentColorScheme?.text?.accent}
      >
        <p className={currentColorScheme?.text?.background}>
          {currentCharacter.main_story_arc}
        </p>
      </SwapiSection>
      <SwapiSection
        minHeight="400"
        headingAlignment="left"
        headingLevel={2}
        heading="Achievements"
        backgroundColor={currentColorScheme?.background?.background}
        headingTextColor={currentColorScheme?.text?.primary}
      >
        <ol>
          {currentCharacter.achievements.map((achievement, index) => (
            <li key={`achievement-${index}`}>
              <p className={currentColorScheme?.text?.accent}>{achievement}</p>
            </li>
          ))}
        </ol>
      </SwapiSection>
      <SwapiSection
        minHeight="500"
        headingAlignment="left"
        headingLevel={2}
        heading="The Ultimate Backstory"
        backgroundColor={currentColorScheme?.background?.secondary}
        headingTextColor={currentColorScheme?.text?.accent}
      >
        <p className={currentColorScheme?.text?.background}>
          {currentCharacter.backstory}
        </p>
      </SwapiSection>

      <SwapiSection
        minHeight="400"
        className={`bg-no-repeat bg-cover bg-center bg-gradient-to-br ${colorScheme?.gradient?.background?.from} from-10% ${colorScheme?.gradient?.tertiary?.via} via-30 ${colorScheme?.gradient?.tertiary?.to} to-90%`}
      >
        <p className="text-white text-center">{currentCharacter.quote}</p>
      </SwapiSection>

      <SwapiSection
        minHeight="400"
        headingAlignment="left"
        headingLevel={2}
        heading="Factions"
        backgroundColor={currentColorScheme?.background?.background}
        headingTextColor={currentColorScheme?.text?.primary}
      >
        <ul>
          {currentCharacter.factions.map((faction) => (
            <li key="faction">
              <p className={`text-shadow ${currentColorScheme?.text?.accent}`}>
                {faction}
              </p>
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
