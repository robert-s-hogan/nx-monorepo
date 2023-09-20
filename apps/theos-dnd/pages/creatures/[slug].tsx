import { Flex, Grid, Heading, Section } from '@with-nx/react-ui';
import { useState } from 'react';
import Image from 'next/image';

import TheosDndLayout from '../../components/TheosDndLayout';
import TheosDndInfoCard from '../../components/TheosDndInfoCard';
import DiceRoller from '../../components/TheosDndDiceRoller';
import { creatures } from '../../data/creatures';
import { CreatureType } from '../../types/entity';
import { classes } from '../../data/classes';
import { OutcomeType } from '../../utils/dice';

type Props = {
  creature: CreatureType;
};

export default function CreaturePage({ creature }: Props) {
  const defaultClass = classes[0];
  const [player, setPlayer] = useState({
    name: 'Theodore Whitetro',
    slug: 'player', // Add a default slug for the player
    deadImage: '',
    className: defaultClass.className,
    health: defaultClass.health,
    hitDamage: defaultClass.hitDamage,
    criticalDamage: defaultClass.criticalDamage,
    defense: defaultClass.defense,
    image: defaultClass.image,
    description: 'Theodore Hogan',
  });

  const [currentCreature, setCurrentCreature] = useState(creature);

  const handleDiceRoll = (outcome: OutcomeType) => {
    let damage = 0;

    switch (outcome.result) {
      case 'Hit':
        damage = player.hitDamage;
        break;
      case 'Critical':
        damage = player.criticalDamage;
        break;
      case 'Dodge':
        // No action needed if the monster dodges
        return;
    }

    // Deduct damage from creature's health
    setCurrentCreature((prev) => ({ ...prev, health: prev.health - damage }));

    // Check if the creature is dead after applying damage
    if (currentCreature.health - damage <= 0) {
      setCurrentCreature((prev) => ({ ...prev, health: 0 }));
      // Handle death mechanics
    }
  };

  const handleClassChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedClass = classes.find(
      (c) => c.className === event.target.value
    );

    if (selectedClass) {
      setPlayer((prev) => ({
        ...prev,
        className: selectedClass.className,
        health: selectedClass.health,
        hitDamage: selectedClass.hitDamage,
        criticalDamage: selectedClass.criticalDamage,
        defense: selectedClass.defense,
        image: selectedClass.image,
        description: selectedClass.description,
      }));
    }
  };

  return (
    <TheosDndLayout>
      <Grid className="grid-cols-1 md:grid-cols-5 gap-6 mb-12">
        <Flex className="flex-col md:col-span-2 md:justify-center md:items-center">
          <TheosDndInfoCard data={player} />
          <span className="text-xs">
            <select value={player.className} onChange={handleClassChange}>
              {classes.map((c) => (
                <option key={c.className} value={c.className}>
                  {c.name}
                </option>
              ))}
            </select>
          </span>
        </Flex>
        <Flex className="flex-row md:flex-col justify-center items-center">
          <DiceRoller
            onRoll={handleDiceRoll}
            defense={currentCreature.defense}
          />
          <Heading level={2} className="text-center mt-12 md:mt-16">
            VS
          </Heading>
        </Flex>
        <Flex className="flex-col md:col-span-2 file:space-y-4 md:justify-center md:items-center">
          <TheosDndInfoCard data={currentCreature} />
        </Flex>
      </Grid>
    </TheosDndLayout>
  );
}

export async function getStaticProps({ params }) {
  const creature = creatures.find((creature) => creature.slug === params.slug);
  return {
    props: {
      creature,
    },
  };
}

export async function getStaticPaths() {
  const paths = creatures.map((creature) => ({
    params: { slug: creature.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
