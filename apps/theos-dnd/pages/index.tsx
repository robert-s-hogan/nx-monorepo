import React, { useState, useEffect } from 'react';
import { Button, Flex, Grid, Section } from '@with-nx/react-ui';
import { useRouter } from 'next/router';

import { useEntity } from '../context/EntityContext';
import { SPECIES_IMAGES, CLASS_INDICATORS } from '../data';
import { ClassName, SpeciesName } from '../types';

import TheosDndLayout from '../components/TheosDndLayout';
import TheosDndCharacterCard from '../components/TheosDndCharacterCard';

export function Index() {
  const { entity, createEntity } = useEntity();
  const router = useRouter();

  const [name, setName] = useState('');
  const [selectedClass, setSelectedClass] = useState<ClassName | ''>('');
  const [selectedSpecies, setSelectedSpecies] = useState<SpeciesName | ''>('');

  useEffect(() => {
    if (name && selectedClass && selectedSpecies) {
      const previewImage = getPreviewImage();
      createEntity(name, selectedClass, selectedSpecies, previewImage);
    }
  }, [name, selectedClass, selectedSpecies]);

  const handleFight = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !selectedClass || !selectedSpecies) {
      alert('Please fill out all the fields.');
      return;
    }
    const previewImage = getPreviewImage();
    localStorage.setItem(
      'entity',
      JSON.stringify({
        name,
        selectedClass,
        selectedSpecies,
        previewImage,
      })
    );
    router.push(
      `/battle?name=${name}&class=${selectedClass}&species=${selectedSpecies}`
    );
  };

  const getPreviewImage = () => {
    if (entity && entity.selectedSpecies && entity.selectedClass) {
      return CLASS_INDICATORS[entity.selectedClass][entity.selectedSpecies]
        .image;
    }
    if (entity && entity.selectedSpecies) {
      return SPECIES_IMAGES[entity.selectedSpecies].image;
    }
    if (selectedSpecies && selectedClass) {
      return CLASS_INDICATORS[selectedClass][selectedSpecies].image;
    }
    if (selectedSpecies) {
      return SPECIES_IMAGES[selectedSpecies].image;
    }
    return '';
  };

  const previewImage = getPreviewImage();
  const firstImage = Array.isArray(previewImage)
    ? previewImage[0]
    : previewImage;

  return (
    <TheosDndLayout className="mb-8">
      <Section className="text-center space-y-6">
        <div className="mb-16">
          <h1>Character Creation</h1>
          <p>
            Welcome to Theos DnD! Create your character and battle your way
            through the world of monsters!
          </p>
        </div>
        <Grid className="grid-cols-1 lg:grid-cols-2">
          <div className="h-full w-full container mx-auto max-w-7xl">
            <h2>Character Customization</h2>
            <Grid className="grid-cols-1 gap-12">
              <form
                onSubmit={handleFight}
                className="flex flex-col space-y-4 lg:space-y-6 justify-center max-w-md mx-auto"
              >
                <Flex className="justify-between w-full space-x-8">
                  <label>Name:</label>
                  <input
                    type="text"
                    value={name}
                    className="!w-48"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Flex>

                <Flex className="justify-between w-full space-x-8">
                  <label>Species:</label>
                  <select
                    className="!w-48"
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

                <Flex className="justify-between w-full space-x-8">
                  <label>Class:</label>
                  <select
                    className="!w-48"
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
          {entity && name && selectedSpecies && selectedClass && (
            <Flex className="w-full flex-col justify-center container mx-auto max-w-7xl">
              <TheosDndCharacterCard entity={entity} preview={true} />
            </Flex>
          )}
        </Grid>
      </Section>
    </TheosDndLayout>
  );
}

export default Index;
