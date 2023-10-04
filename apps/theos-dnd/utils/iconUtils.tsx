import {
  GiBarbarian,
  GiBattleAxe,
  GiBootKick,
  GiBullseye,
  GiBowman,
  GiChoppedSkull,
  GiFireSpellCast,
  GiFist,
  GiGargoyle,
  GiInfinity,
  GiPocketBow,
  GiShamblingZombie,
  GiSkeleton,
  GiWizardStaff,
} from 'react-icons/gi';
import { FiHeart, FiShield } from 'react-icons/fi';
import { ClassName, SpeciesName } from '../types';

export const classIconMap = {
  Barbarian: <GiBarbarian className="h-10 w-10 xl:w-24 xl:h-24" />,
  Mage: <GiWizardStaff className="h-10 w-10 xl:w-24 xl:h-24" />,
  Ranger: <GiBowman className="h-10 w-10 xl:w-24 xl:h-24" />,
};

export const classWeaponMap = {
  Barbarian: <GiBattleAxe className="h-8 w-8 xl:w-24 xl:h-24" />,
  Mage: <GiWizardStaff className="h-8 w-8 xl:w-24 xl:h-24" />,
  Ranger: <GiPocketBow className="h-8 w-8 xl:w-24 xl:h-24 -rotate-45" />,
};

export const classAbilityIconMap = {
  Barbarian: <GiChoppedSkull className="h-10 w-10 xl:w-24 xl:h-24" />,
  Mage: <GiFireSpellCast className="h-10 w-10 xl:w-24 xl:h-24" />,
  Ranger: <GiBullseye className="h-10 w-10 xl:w-24 xl:h-24" />,
};

export const speciesIconMap = {
  Gargoyle: <GiGargoyle className="h-10 w-10 xl:w-24 xl:h-24" />,
  Skeleton: <GiSkeleton className="h-10 w-10 xl:w-24 xl:h-24" />,
  Zombie: <GiShamblingZombie className="h-10 w-10 xl:w-24 xl:h-24" />,
};

// Function to get class-based icons
export const getClassIcons = (classType: ClassName) => ({
  icon: classIconMap[classType],
  weapon: classWeaponMap[classType],
  ability: classAbilityIconMap[classType],
});

// Function to get species-based icons
export const getSpeciesIcon = (species: SpeciesName) => speciesIconMap[species];
