import Image from 'next/image';

import { FeatherHeart, FeatherShield } from '@with-nx/icons';

import { CreatureType } from '../types/entity';

type CardProps = {
  data: CreatureType;
};

export default function InfoCard({ data }: CardProps) {
  const isDead = data.health === 0; // Determine if the creature is dead based on health

  return (
    <div className="relative border rounded-lg overflow-hidden shadow-md w-80 border-white">
      <div className="absolute top-1 left-1 z-20 pl-3 pr-2">
        <FeatherShield className="absolute left-0 top-[-1] w-8 h-8" />
        <span className="text-xs">{data.defense}</span>
      </div>
      <div className="absolute top-1 right-1 z-20 px-2">
        <FeatherHeart className="absolute left-0 top-[-1] w-8 h-8" />
        <span className="text-xs">{data.health}</span>
      </div>
      <div className="relative h-72 w-full">
        <Image
          src={isDead && data.deadImage ? data.deadImage : data.image}
          alt={data.name}
          layout="fill"
          objectFit="cover"
        />
        {isDead && (
          <div className="absolute inset-0 bg-red-500 opacity-50 flex items-center justify-center">
            <span className="text-2xl font-bold text-white uppercase">
              Dead
            </span>
          </div>
        )}
        <h2 className="absolute bottom-0 pb-0 text-center w-full bg-image-overlay text-lg font-bold">
          {data.name}
        </h2>
      </div>
      {/* <div className="relative p-4">
        <div className="text-xs mb-1">Hit Damage: {data.hitDamage}</div>
        <div className="text-xs mb-1">
          Critical Damage: {data.criticalDamage}
        </div>
      </div> */}
    </div>
  );
}
