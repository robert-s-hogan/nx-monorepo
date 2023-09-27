import React, { useState } from 'react';
import Image from 'next/image';
import { Flex, Grid, Heading } from '@with-nx/react-ui';

import {
  FaHandBackFist,
  FeatherHeart,
  FeatherShield,
  GameIconBarbarian,
  GameIconBattleAxe,
  GameIconBootKick,
  GameIconBullseye,
  GameIconBowman,
  GameIconChoppedSkull,
  GameIconFireSpellCast,
  GameIconGargoyle,
  GameIconInfinity,
  GameIconPocketBow,
  GameIconShamblingZombie,
  GameIconSkeleton,
  GameIconWizardStaff,
} from '@with-nx/icons';
import { CLASS_INDICATORS } from '../data/images';
import { useCharacterResource } from '../hooks/useCharacterResource';
import { ClassName, SpeciesName, Stats } from '../types';

interface CharacterCardProps {
  player: {
    name: string;
    stats: Stats;
  };
  class: ClassName;
  species: SpeciesName;
}

const classIconMap = {
  Barbarian: <GameIconBarbarian className="h-10 w-10 xl:w-24 xl:h-24" />,
  Mage: <GameIconWizardStaff className="h-10 w-10 xl:w-24 xl:h-24" />,
  Ranger: <GameIconBowman className="h-10 w-10 xl:w-24 xl:h-24" />,
};

const classWeaponMap = {
  Barbarian: <GameIconBattleAxe className="h-8 w-8 xl:w-24 w:h-24" />,
  Mage: <GameIconWizardStaff className="h-8 w-8 xl:w-24 w:h-24" />,
  Ranger: <GameIconPocketBow className="h-8 w-8 xl:w-24 w:h-24 -rotate-45" />,
};

const classAbilityIconMap = {
  Barbarian: <GameIconChoppedSkull className="h-10 w-10 xl:w-24 w:h-24" />,
  Mage: <GameIconFireSpellCast className="h-10 w-10 xl:w-24 w:h-24" />,
  Ranger: <GameIconBullseye className="h-10 w-10 xl:w-24 w:h-24" />,
};

const speciesIconMap = {
  Gargoyle: <GameIconGargoyle className="h-10 w-10 xl:w-24 xl:h-24" />,
  Skeleton: <GameIconSkeleton className="h-10 w-10 xl:w-24 xl:h-24" />,
  Zombie: <GameIconShamblingZombie className="h-10 w-10 xl:w-24 xl:h-24" />,
};

const CharacterCard: React.FC<CharacterCardProps> = ({
  player,
  class: className,
  species,
}) => {
  const { characterResource, useAbility, regenerateCharacterResource } =
    useCharacterResource();

  const [showInsufficientResourceWarning, setShowInsufficientResourceWarning] =
    useState(false);

  const [dummyState, setDummyState] = useState(0);

  const speciesData = CLASS_INDICATORS[className as ClassName];
  const indicator = speciesData && speciesData[species as SpeciesName];
  const image = indicator && indicator.image;

  const classIcon = classIconMap[className];
  const speciesIcon = speciesIconMap[species];

  if (!className || !species || !image) {
    return null;
  }
  const { DEF, HP, RESOURCE } = player.stats;

  const classSection = (
    <Flex className="justify-center items-center space-x-2 lg:space-x-1 mt-12 md:mt-0">
      <strong className="pr-2">{classIcon}</strong>

      <span className="font-bold">{player.name}</span>
    </Flex>
  );

  const resourceCostIcons = <GameIconInfinity className="w-4 h-4" />;
  const classAbilityManaCost = {
    Barbarian: 20,
    Mage: 20,
    Ranger: 20,
  };

  const attackIcons = (
    <div className="col-span-1 p-1 xl:p-2 order-2 space-y-6">
      <Flex className="relative items-center justify-between space-x-0">
        {classWeaponMap[className]}
        <span className="">{resourceCostIcons}</span>
      </Flex>
      <Flex className="relative items-center justify-between space-x-0">
        <FaHandBackFist className="h-8 w-8 xl:w-24 w:h-24 rotate-90" />
        <span className="">{resourceCostIcons}</span>
      </Flex>
      <Flex className="relative items-center justify-between space-x-0">
        <GameIconBootKick className="h-10 w-10 xl:w-24 w:h-24 rotate-45" />
        <span className="">{resourceCostIcons}</span>
      </Flex>
      <Flex className="relative items-center space-x-0">
        <button
          onClick={() => {
            if (useAbility(classAbilityManaCost[className])) {
              // Execute the ability
              setShowInsufficientResourceWarning(false); // Hide any previously shown warning
            } else {
              // Notify player there's not enough resource
              setShowInsufficientResourceWarning(true);
              setDummyState((prev) => prev + 1); // Force an update
            }
          }}
          className="w-full p-0"
        >
          <Flex
            className={`xl:relative w-full items-center justify-center ${
              characterResource / classAbilityManaCost[className] < 1
                ? 'text-red-500'
                : ''
            }`}
          >
            {classAbilityIconMap[className]}
            <span className="flex items-baseline xl:absolute xl:bottom-0 xl:right-[-5px]">
              <span className="text-xs">x </span>
              {characterResource / classAbilityManaCost[className]}
            </span>
          </Flex>
        </button>
      </Flex>
    </div>
  );

  return (
    <Flex className="relative col-span-2">
      <Grid className="grid-cols-4 !gap-1">
        {attackIcons}

        <div className="col-span-3 relative border rounded-lg overflow-hidden shadow-md w-full border-white">
          <div className="absolute top-1 left-1 z-20 pl-3 pr-2">
            <FeatherShield className="absolute left-0 top-[-1] w-10 h-10" />
            <span className="text-xs absolute left-[.75rem] top-[.65rem] md:left-[.85rem] md:top-[.65rem]">
              {DEF}
            </span>
          </div>
          <div className="absolute top-1 right-1 z-20 px-2">
            <FeatherHeart className="absolute right-0 top-[-1] w-10 h-10" />
            <span className="text-xs absolute right-3 md:right-[.8rem] top-[.7rem] md:top-[.5rem]">
              {HP}
            </span>
          </div>

          <Image
            src={image}
            alt={`${className} ${species}`}
            height={400}
            width={400}
            className="hidden md:block h-[400px] lg:h-full w-full object-cover lg:object-contain"
          />

          <div className="bg-image-overlay w-full p-1 pl-0 lg:pl-4">
            {classSection}
          </div>
          <Flex className="bg-image-overlay flex-row w-full p-1 md:p-0 lg:p-1 lg:space-x-1 overflow-hidden">
            {Object.entries(player.stats).map(([stat, value]) => {
              if (
                stat === 'DEF' ||
                stat === 'HP' ||
                stat === 'PHYSICAL_ATTACK' ||
                stat === 'MAGICAL_ATTACK' ||
                stat === 'RESOURCE'
              ) {
                return null;
              }
              return (
                <Flex
                  className="flex-col justify-center items-center w-full border border-primary rounded-md p-1 md:p-0 xl:p-1"
                  key={stat}
                >
                  <span className="text-xs lg:text-sm">{stat}</span>
                  <span className="text-xs lg:text-sm font-bold">
                    {value > 0 ? `+${value}` : value}
                  </span>
                </Flex>
              );
            })}
          </Flex>
        </div>
      </Grid>
    </Flex>
  );
};

export default CharacterCard;
