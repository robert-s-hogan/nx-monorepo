import React from 'react';
import { Button } from '@with-nx/generic-ui';
import Image from 'next/image';
import DevBlogLayout from '../../components/DevBlogLayout';

type PageProps = {
  // Add any props specific to your page here
};

const GenericPage: React.FC<PageProps> = () => {
  // Add your page logic and JSX here

  return (
    <DevBlogLayout>
      <div className="relative max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden ">
        <div className="relative z-10 flex flex-col items-center fantasy-border">
          <Image
            src="https://static.wikia.nocookie.net/forgottenrealms/images/0/00/Power_of_Persuasion_AFR.jpg/revision/latest/scale-to-width-down/1000?cb=20210710175238"
            alt="Ettin"
            className="transform shadow-lg rounded-lg"
            width={1024}
            height={1024}
          />
        </div>
        <div className="relative mt-[-50px] pt-10 text-center z-0">
          <h2 className="text-3xl font-bold text-gray-700 py-1">Ettin</h2>
          <p className="text-sm text-gray-600 mt-2">
            Ettins are hulking, two-headed giants with a brutish and savage
            nature. They often dwell in remote, mountainous regions and are
            known for their violent temperament and territorial behavior.
          </p>
          <div className="grid grid-cols-3 gap-2 text-gray-800 mt-4">
            <div>
              <strong>Armor Class:</strong> 12 (Natural Armor)
            </div>
            <div>
              <strong>Hit Points:</strong> 85 (10d10 + 30)
            </div>
            <div>
              <strong>Speed:</strong> 40 feet
            </div>
            <div>
              <strong>STR:</strong> 21 (+5)
            </div>
            <div>
              <strong>DEX:</strong> 8 (-1)
            </div>
            <div>
              <strong>CON:</strong> 17 (+3)
            </div>
            <div>
              <strong>INT:</strong> 6 (-2)
            </div>
            <div>
              <strong>WIS:</strong> 10 (+0)
            </div>
            <div>
              <strong>CHA:</strong> 8 (-1)
            </div>
          </div>
          <div className="mt-4 text-gray-700">
            <strong className="block">Actions:</strong>
            <ul className="list-disc pl-5">
              <li className="mt-1">
                <strong>Multiattack</strong>: The ettin makes two attacks: one
                with its battleaxe and one with its morningstar.
              </li>
              <li className="mt-1">
                <strong>Battleaxe</strong>: Melee Weapon Attack: +7 to hit,
                reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage.
              </li>
              <li className="mt-1">
                <strong>Morningstar</strong>: Melee Weapon Attack: +7 to hit,
                reach 5 ft., one target. Hit: 16 (2d10 + 5) piercing damage.
              </li>
            </ul>
          </div>
          <div className="mt-4 text-gray-700">
            <strong className="block">Special Abilities:</strong>
            <ul className="list-disc pl-5">
              <li className="mt-1">
                <strong>Wakeful</strong>: When one of the ettin’s heads is
                asleep, its other head is awake.
              </li>
              <li className="mt-1">
                <strong>Two Heads</strong>: The ettin has advantage on Wisdom
                (Perception) checks and on saving throws against being blinded,
                charmed, deafened, frightened, stunned, or knocked unconscious.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DevBlogLayout>
  );
};

export default GenericPage;
