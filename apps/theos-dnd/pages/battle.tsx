import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Flex, Grid, Section } from '@with-nx/react-ui';
import TheosDndLayout from '../components/TheosDndLayout';
import TheosDndCharacterCard from '../components/TheosDndCharacterCard';
import { CLASS_MODIFIERS, SPECIES_MODIFIERS } from '../data/entity';
import { ClassName, SpeciesName, Stats } from '../types';

function combineStats(stats1: Stats, stats2: Stats): Stats {
  return {
    STR: stats1.STR + stats2.STR,
    CON: stats1.CON + stats2.CON,
    DEX: stats1.DEX + stats2.DEX,
    INT: stats1.INT + stats2.INT,
    WIS: stats1.WIS + stats2.WIS,
    CHA: stats1.CHA + stats2.CHA,
    DEF: stats1.DEF + stats2.DEF, // Added this
    HP: stats1.HP + stats2.HP, // Added this
    PHYSICAL_ATTACK: stats1.PHYSICAL_ATTACK + stats2.PHYSICAL_ATTACK,
    MAGICAL_ATTACK: stats1.MAGICAL_ATTACK + stats2.MAGICAL_ATTACK,
    RESOURCE: stats1.RESOURCE + stats2.RESOURCE,
  };
}

const Battle = () => {
  const router = useRouter();

  const { name, class: className, species: speciesName } = router.query;

  const selectedClassModifiers = CLASS_MODIFIERS[className as string];
  const defaultClassModifiers = Object.values(CLASS_MODIFIERS)[0];

  const selectedSpeciesModifiers = SPECIES_MODIFIERS[speciesName as string];
  const defaultSpeciesModifiers = Object.values(SPECIES_MODIFIERS)[0];

  const combinedStats = combineStats(
    selectedClassModifiers || defaultClassModifiers,
    selectedSpeciesModifiers || defaultSpeciesModifiers
  );
  console.log(`Combined Stats:`, combinedStats);

  const [player, setPlayer] = useState({
    name: Array.isArray(name) ? name[0] : name || 'Default Name', // added Array.isArray check
    stats: combinedStats,
  });

  if (!className || !speciesName) {
    return <div>Loading...</div>;
  }

  const isValidClassName = (name: string): name is ClassName => {
    return ['Barbarian', 'Mage', 'Ranger'].includes(name);
  };
  const classNameString = Array.isArray(className) ? className[0] : className;
  const validatedClassName: ClassName = isValidClassName(classNameString)
    ? classNameString
    : 'Barbarian';

  const isValidSpeciesName = (name: string): name is SpeciesName => {
    return ['Gargoyle', 'Human', 'Skeleton', 'Zombie'].includes(name);
  };
  const speciesNameString = Array.isArray(speciesName)
    ? speciesName[0]
    : speciesName;
  const validatedSpeciesName: SpeciesName = isValidSpeciesName(
    speciesNameString
  )
    ? speciesNameString
    : 'Human';

  return (
    <TheosDndLayout>
      <Section className="container mx-auto max-w-7xl">
        <Grid className="grid-cols-1 md:grid-cols-5 gap-4">
          <TheosDndCharacterCard
            player={player}
            class={validatedClassName}
            species={validatedSpeciesName}
          />
        </Grid>
      </Section>
    </TheosDndLayout>
  );
};

export default Battle;
