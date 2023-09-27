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
import { ClassName, SpeciesName } from '../types';

export const classIconMap = {
  Barbarian: <GameIconBarbarian className="h-10 w-10 xl:w-24 xl:h-24" />,
  Mage: <GameIconWizardStaff className="h-10 w-10 xl:w-24 xl:h-24" />,
  Ranger: <GameIconBowman className="h-10 w-10 xl:w-24 xl:h-24" />,
};

export const classWeaponMap = {
  Barbarian: <GameIconBattleAxe className="h-8 w-8 xl:w-24 xl:h-24" />,
  Mage: <GameIconWizardStaff className="h-8 w-8 xl:w-24 xl:h-24" />,
  Ranger: <GameIconPocketBow className="h-8 w-8 xl:w-24 xl:h-24 -rotate-45" />,
};

export const classAbilityIconMap = {
  Barbarian: <GameIconChoppedSkull className="h-10 w-10 xl:w-24 xl:h-24" />,
  Mage: <GameIconFireSpellCast className="h-10 w-10 xl:w-24 xl:h-24" />,
  Ranger: <GameIconBullseye className="h-10 w-10 xl:w-24 xl:h-24" />,
};

export const speciesIconMap = {
  Gargoyle: <GameIconGargoyle className="h-10 w-10 xl:w-24 xl:h-24" />,
  Skeleton: <GameIconSkeleton className="h-10 w-10 xl:w-24 xl:h-24" />,
  Zombie: <GameIconShamblingZombie className="h-10 w-10 xl:w-24 xl:h-24" />,
};

// Function to get class-based icons
export const getClassIcons = (classType: ClassName) => ({
  icon: classIconMap[classType],
  weapon: classWeaponMap[classType],
  ability: classAbilityIconMap[classType],
});

// Function to get species-based icons
export const getSpeciesIcon = (species: SpeciesName) => speciesIconMap[species];
