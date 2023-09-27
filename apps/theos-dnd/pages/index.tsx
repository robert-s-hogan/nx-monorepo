import React, { useState, useEffect } from 'react';
import { Button, Flex, Grid, Section } from '@with-nx/react-ui';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { useEntity } from '../context/EntityContext';
import { SPECIES_IMAGES, CLASS_INDICATORS } from '../data';
import { ClassName, SpeciesName } from '../types';

import TheosDndLayout from '../components/TheosDndLayout';
import TheosDndCharacterCard from '../components/TheosDndCharacterCard';
import TheosDndInfoCard from '../components/TheosDndInfoCard';

export function Index() {
  const { entity, createEntity } = useEntity();
  const router = useRouter();

  const [name, setName] = useState('');
  const [selectedClass, setSelectedClass] = useState<ClassName>('Barbarian');
  const [selectedSpecies, setSelectedSpecies] = useState<SpeciesName | ''>('');

  // Initialize or update entity whenever form fields change
  useEffect(() => {
    if (name && selectedClass && selectedSpecies) {
      createEntity(name, selectedClass, selectedSpecies);
    }
  }, [name, selectedClass, selectedSpecies]);

  const handleFight = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !selectedClass || !selectedSpecies) {
      alert('Please fill out all the fields.');
      return;
    }

    // Save entity data to localStorage
    localStorage.setItem(
      'entity',
      JSON.stringify({ name, selectedClass, selectedSpecies })
    );

    router.push(
      `/battle?name=${name}&class=${selectedClass}&species=${selectedSpecies}`
    );
  };

  let previewImage = '';
  if (selectedSpecies && selectedClass) {
    previewImage = CLASS_INDICATORS[selectedClass][selectedSpecies].image;
  } else if (selectedSpecies) {
    previewImage = SPECIES_IMAGES[selectedSpecies].image;
  }

  return (
    <TheosDndLayout>
      <Section className="text-center space-y-6">
        <h1>Character Creation</h1>
        <p>
          Welcome to Theos DnD! Create your character and battle your way
          through the world of monsters!
        </p>
        <Grid className="grid-cols-1 lg:grid-cols-2">
          <div className="w-full container mx-auto max-w-7xl">
            <h2>Character Customization</h2>
            <Grid className="grid-cols-1 gap-4">
              <form
                onSubmit={handleFight}
                className="flex flex-col space-y-4 justify-center items-center max-w-md mx-auto"
              >
                <Flex className="justify-between w-full">
                  <label>Name:</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Flex>

                <Flex className="justify-between w-full">
                  <label>Species:</label>
                  <select
                    value={selectedSpecies}
                    onChange={(e) =>
                      setSelectedSpecies(e.target.value as SpeciesName)
                    }
                  >
                    <option value="">Select a species</option>
                    {Object.keys(SPECIES_IMAGES).map((species) => (
                      <option key={species} value={species}>
                        {species}
                      </option>
                    ))}
                  </select>
                </Flex>

                <Flex className="justify-between w-full">
                  <label>Class:</label>
                  <select
                    value={selectedClass}
                    onChange={(e) =>
                      setSelectedClass(e.target.value as ClassName)
                    }
                  >
                    <option value="">Select a class</option>
                    {Object.keys(CLASS_INDICATORS).map((cls) => (
                      <option key={cls} value={cls}>
                        {cls}
                      </option>
                    ))}
                  </select>
                </Flex>

                <Button className="btn-primary" type="submit">
                  Create Character
                </Button>
              </form>
            </Grid>
          </div>
          {entity && (
            <Flex className="w-full flex-col justify-center items-center container mx-auto max-w-7xl">
              <h2 className="text-center">Stat Preview</h2>
              <TheosDndCharacterCard entity={entity} preview={true} />
            </Flex>
          )}
        </Grid>
      </Section>
    </TheosDndLayout>
  );
}

export default Index;
