import { useState, useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Box, Flex, Heading, Slider, Text } from '@with-nx/react-ui';
import { getColorMap } from '../../utils/themeMap';
import { minHeightMap } from '../../utils/stylesMap';

import SwapiLayout from '../../components/SwapiLayout';
import SwapiSection from '../../components/SwapiSection';
import SwapiSunSVG from '../../icons/SwapiSunSVG';
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

  const colors = getColorMap(activePersona);

  const primaryTextColor = colors.text.primary;
  const secondaryTextColor = colors.text.secondary;
  const tertiaryTextColor = colors.text.tertiary;
  const accentTextColor = colors.text.accent;
  const backgroundTextColor = colors.text.primary;

  const primaryBackgroundColor = colors.background.primary;
  const secondaryBackgroundColor = colors.background.secondary;
  const tertiaryBackgroundColor = colors.background.tertiary;
  const accentBackgroundColor = colors.background.accent;
  const backgroundBackgroundColor = colors.background.primary;

  const primaryBorderColor = colors.border.primary;
  const secondaryBorderColor = colors.border.secondary;
  const tertiaryBorderColor = colors.border.tertiary;
  const accentBorderColor = colors.border.accent;
  const backgroundBorderColor = colors.border.primary;

  const primaryFromGradient = colors.gradient.primary.from;
  const accentViaGradient = colors.gradient.accent.via;
  const secondaryViaGradient = colors.gradient.secondary.via;
  const tertiaryToGradient = colors.gradient.tertiary.to;

  return (
    <SwapiLayout>
      <SwapiSection themeColors={colors} minHeight="600">
        <Box className="max-w-sm">
          <Flex className="flex-col md:flex-row justify-between items-center space-y-12">
            <div
              className={`relative w-28 h-12 ${primaryBackgroundColor} border-2 ${primaryBorderColor} rounded-full p-1`}
            >
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
                  className={`p-2 transition-opacity pl-3 duration-300 ${
                    activePersona === personas[0]
                      ? `${
                          accentTextColor ? accentTextColor : 'text-white'
                        } rounded-full border-[4px] ${accentBorderColor} opacity-100`
                      : 'opacity-50'
                  }`}
                >
                  {personas[0]}
                </span>
                <span
                  className={`p-2 transition-opacity pr-3 duration-300 ${
                    activePersona === personas[1]
                      ? `${
                          accentTextColor ? accentTextColor : 'text-white'
                        } rounded-full border-[4px] ${accentBorderColor} opacity-100`
                      : 'opacity-50'
                  }`}
                >
                  {personas[1]}
                </span>
              </button>
            </div>
            <Flex className="flex-col items-center">
              <Heading
                level={1}
                className={`${accentTextColor} text-center pb-2`}
              >
                {currentCharacter.name}
              </Heading>
              <Text
                className={`text-center text-4xl ${
                  primaryTextColor || 'text-white'
                } mb-8`}
              >
                Profile
              </Text>
            </Flex>
            <SwapiSunSVG
              className="w-32 h-32"
              primaryColor={backgroundBackgroundColor}
              secondaryColor={tertiaryBackgroundColor}
            />
          </Flex>
        </Box>
      </SwapiSection>
      <SwapiSection
        themeColors={colors}
        minHeight="400"
        headingAlignment="left"
        headingLevel={2}
        heading="Character Chronicles"
      >
        <Text className="text-white">{currentCharacter.main_story_arc}</Text>
      </SwapiSection>
      <SwapiSection
        themeColors={colors}
        minHeight="400"
        headingAlignment="left"
        headingLevel={2}
        heading="Achievements"
      >
        <ul>
          {currentCharacter.achievements.map((achievement, index) => (
            <li key={`achievement-${index}`}>
              <Text className="text-white text-xl">{achievement}</Text>
            </li>
          ))}
        </ul>
      </SwapiSection>
      <SwapiSection
        themeColors={colors}
        minHeight="500"
        headingAlignment="left"
        headingLevel={2}
        heading="The Ultimate Backstory"
      >
        <Text className="text-white">{currentCharacter.backstory}</Text>
      </SwapiSection>

      <SwapiSection
        minHeight="400"
        themeColors={colors}
        className={`bg-no-repeat bg-cover bg-center bg-gradient-to-br ${primaryFromGradient} ${accentViaGradient} ${tertiaryToGradient}`}
      >
        <Text className="text-white text-center">{currentCharacter.quote}</Text>
      </SwapiSection>

      <SwapiSection
        minHeight="400"
        headingAlignment="left"
        headingLevel={2}
        heading="Factions"
        themeColors={colors}
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
