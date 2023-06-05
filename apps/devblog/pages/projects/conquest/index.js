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
import { alignments, languages, races } from '@with-nx/constants';

const generateCharacter = () => {
  console.log(`races: ${races}`);
  const alignment = alignments[Math.floor(Math.random() * alignments.length)];
  const language = languages[Math.floor(Math.random() * languages.length)];

  let raceIndex = Math.floor(Math.random() * races.length);
  let race = races[raceIndex];
  let subrace = ''; // Set default subrace to ''
  // If the chosen race has subraces, select a random one.
  if (race.subraces && race.subraces.length > 0) {
    let subraceIndex = Math.floor(Math.random() * race.subraces.length);
    subrace = race.subraces[subraceIndex].name;
  }

  return { alignment, language, race, subrace };
};

const CardBody = ({ character }) => (
  <div className="p-4">
    <Text>Alignment: {character.alignment}</Text>
    <Text>Language: {character.language}</Text>
    <Text>Race: {character.race}</Text>
    {character.subrace && <Text>Subrace: {character.subrace}</Text>}
  </div>
);

const ProjectConquest = () => {
  const [characters, setCharacters] = useState([]);

  const addCharacter = () => {
    const newCharacter = generateCharacter();
    setCharacters([...characters, newCharacter]);
  };

  return (
    <DevblogLayout>
      <Section>
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
                <pre className="border">
                  {JSON.stringify(characters[index], null, 2)}
                </pre>
              </Box>
            ))}
          </Grid>
        )}
      </Section>
    </DevblogLayout>
  );
};

export default ProjectConquest;
