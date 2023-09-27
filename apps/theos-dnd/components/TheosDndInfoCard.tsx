import Image from 'next/image';

import {
  FeatherHeart,
  FeatherShield,
  // GameIconArtificialIntelligence,
  GameIconBarbarian,
  // GameIconBearHead,
  // GameIconBloodyStash,
  GameIconBowman,
  // GameIconFireSpellCast,
  // GameIconGargoyle,
  // GameIconHolySymbol,
  // GameIconMonkFace,
  // GameIconScabbard,
  // GameIconShamblingZombie,
  // GameIconSkeleton,
  // GameIconTemplarShield,
  // GameIconWarlockEye,
  // GameIconWizardFace,
  GameIconWizardStaff,
} from '@with-nx/icons';

import { CreatureType } from '../types';

type CardProps = {
  data: CreatureType;
};

const iconMap = {
  // artificier: <GameIconArtificialIntelligence className="w-36 h-36" />,
  // bard: <GameIconScabbard className="w-36 h-36" />,
  // bloodHunter: <GameIconBloodyStash className="w-36 h-36" />,
  barbarian: <GameIconBarbarian className="w-36 h-36" />,
  // cleric: <GameIconHolySymbol className="w-36 h-36" />,
  // druid: <GameIconBearHead className="w-36 h-36" />,
  // gargoyle: <GameIconGargoyle className="w-36 h-36" />,
  mage: <GameIconWizardStaff className="w-36 h-36" />,
  // monk: <GameIconMonkFace className="w-36 h-36" />,
  // paladin: <GameIconTemplarShield className="w-36 h-36" />,
  ranger: <GameIconBowman className="w-36 h-36" />,
  // skeleton: <GameIconSkeleton className="w-36 h-36" />,
  // sorcerer: <GameIconFireSpellCast className="w-36 h-36" />,
  // warlock: <GameIconWarlockEye className="w-36 h-36" />,
  // wizard: <GameIconWizardFace className="w-36 h-36" />,
  // zombie: <GameIconShamblingZombie className="w-36 h-36" />,
};

export default function InfoCard({ data }: CardProps) {
  const isDead = data.health === 0;

  const classIcon = iconMap[data.className];

  return (
    <div className="relative border rounded-lg overflow-hidden shadow-md w-80 border-white md:w-full xl:w-auto">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className="absolute top-1 left-1 z-20 pl-3 pr-2">
        <FeatherShield className="absolute left-0 top-[-1] w-8 h-8" />
        <span className="text-xs">{data.defense}</span>
      </div>
      <div className="absolute top-1 right-1 z-20 px-2">
        <FeatherHeart className="absolute left-0 top-[-1] w-8 h-8" />
        <span className="text-xs">{data.health}</span>
      </div>
      <div className="md:hidden flex items-center justify-center">
        {classIcon}
      </div>
      <Image
        src={isDead && data.deadImage ? data.deadImage : data.image}
        alt={data.name}
        height={400}
        width={400}
        className="hidden md:block h-[400px] w-full object-cover"
      />
      {isDead && (
        <div className="absolute inset-0 bg-red-500 opacity-50 flex items-center justify-center">
          <span className="text-2xl font-bold text-white uppercase">Dead</span>
        </div>
      )}
      <h2 className="absolute bottom-0 pb-0 text-center w-full bg-image-overlay text-lg font-bold">
        {data.name}
      </h2>
    </div>
  );
}
