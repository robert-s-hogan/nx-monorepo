import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Text,
  Section,
  Card,
} from '@with-nx/react-ui';

import DevblogLayout from '../../../components/layout/DevBlogLayout';
import {
  alignments,
  languages,
  races,
  nameStructures,
} from '@with-nx/constants';

const generateCharacter = () => {
  const alignment = alignments[Math.floor(Math.random() * alignments.length)];
  const language = languages[Math.floor(Math.random() * languages.length)];

  let raceIndex = Math.floor(Math.random() * races.length);
  console.log(`race index: ${raceIndex}`); // Debug: log the race index

  let race = races[raceIndex];

  let subrace = ''; // Set default subrace to '

  // If the chosen race has subraces, select a random one.
  if (race.subraces && race.subraces.length > 0) {
    let subraceIndex = Math.floor(Math.random() * race.subraces.length);
    let selectedSubrace = race.subraces[subraceIndex];
    if (selectedSubrace) {
      subrace = selectedSubrace.name;
    }
  }

  return { alignment, language, race, subrace };
};

const CardBody = ({ character }) => {
  const { alignment, language, race, subrace } = character;
  return (
    <div className="p-4">
      <Text>Alignment: {alignment.name}</Text>
      <Text>Language: {language.name}</Text>

      {subrace ? <Text>Race: {subrace}</Text> : <Text>Race: {race.name}</Text>}
    </div>
  );
};

const ProjectConquest = () => {
  const [characters, setCharacters] = useState([]);

  const addCharacter = () => {
    const newCharacter = generateCharacter();
    setCharacters([...characters, newCharacter]);
  };

  return (
    <DevblogLayout>
      <Section>
        {/* <pre className="border">{JSON.stringify(races[0], null, 2)}</pre> */}
        <Button className="btn-primary" onClick={addCharacter}>
          Generate entity
        </Button>
        {characters.length > 0 && (
          <Grid className="grid-cols-1 md:grid-cols-2">
            {characters.map((character, index) => (
              <Box className="my-4">
                <Card
                  key={index}
                  title={`Entity ${index + 1}`}
                  description={<CardBody character={character} />}
                  //   onClick={() => console.log(`Card ${index + 1} clicked`)}
                  //   button={<Button>Interact</Button>}
                />
                {/* <pre className="border">
                  {JSON.stringify(characters[index], null, 2)}
                </pre> */}
              </Box>
            ))}
          </Grid>
        )}
      </Section>
    </DevblogLayout>
  );
};

export default ProjectConquest;
