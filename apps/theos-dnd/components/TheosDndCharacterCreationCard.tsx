import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Flex, Grid } from '@with-nx/react-ui';
import Image from 'next/image';

import { useCharacterCreator } from '../hooks/useCharacterCreator';
import { SPECIES_IMAGES, CLASS_INDICATORS } from '../data/images';

type SpeciesName = 'Gargoyle' | 'Human' | 'Skeleton' | 'Zombie';
type ClassName = 'Barbarian' | 'Mage' | 'Ranger';

function TheosDndCharacterCreationCard() {
  const { character, createCharacter } = useCharacterCreator();
  const router = useRouter();

  const [name, setName] = useState('');
  const [selectedClass, setSelectedClass] = useState<ClassName>('Barbarian');
  const [selectedSpecies, setSelectedSpecies] = useState<SpeciesName | ''>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !selectedClass || !selectedSpecies) {
      alert('Please fill out all the fields.');
      return;
    }

    createCharacter(name, selectedClass as ClassName, selectedSpecies);
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
    <div className="w-full container mx-auto max-w-7xl">
      <Grid className="grid-cols-1 md:grid-cols-2 gap-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 justify-center items-center max-w-sm mx-auto"
        >
          <h1>Character Creation</h1>

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
              onChange={(e) => setSelectedClass(e.target.value as ClassName)}
            >
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
        <div className="characterPreview px-2">
          {previewImage && (
            <Image
              src={previewImage}
              alt={selectedSpecies}
              height={800}
              width={600}
              className="block w-full h-[600px] lg:h-[800px] object-contain"
            />
          )}
        </div>
      </Grid>
    </div>
  );
}

export default TheosDndCharacterCreationCard;
