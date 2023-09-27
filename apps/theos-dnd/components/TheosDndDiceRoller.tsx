import { useState } from 'react';

import { Button, Heading } from '@with-nx/react-ui';
import {
  GameIconDiceEightFacesEight,
  GameIconFist,
  GameIconBootKick,
  GameIconHelmetHeadShot,
} from '@with-nx/icons'; // Import the new icons

import { useDiceRoll } from '../hooks/useDiceRoll';
import { rollDice } from '../utils';
import { DiceRollerProps, OutcomeType } from '../types';

const DiceRoller: React.FC<DiceRollerProps> = ({ defense, onRoll }) => {
  const { outcome, roll } = useDiceRoll();
  const [rolling, setRolling] = useState(false);
  const [fading, setFading] = useState(false);

  const handleRoll = () => {
    setRolling(true);
    setTimeout(() => {
      const result = rollDice(defense);
      onRoll(result);
      setRolling(false);

      setTimeout(() => {
        setFading(true);
        setTimeout(() => {
          setFading(false);
        }, 1000);
      }, 5000);
    }, 1000);
  };

  // Map attack type to its icon
  const attackIcons: Record<string, React.ReactNode> = {
    Hit: <GameIconFist className="w-24 h-24" />,
    Kick: <GameIconBootKick className="w-24 h-24" />,
    Headbutt: <GameIconHelmetHeadShot className="w-24 h-24" />,
  };
  return (
    <div className="space-y-0 md:space-y-4">
      {outcome ? (
        <div
          className={`flex flex-col items-center space-x-2 transition-opacity duration-1000 ${
            fading ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {/* Display the appropriate icon based on the outcome result */}
          <div className={`w-24 h-24 animate-${outcome.result.toLowerCase()}`}>
            {attackIcons[outcome.result]}
          </div>
          <div className="text-center">
            <p className="text-lg font-bold">{outcome.result}</p>
          </div>
        </div>
      ) : (
        <Button onClick={handleRoll}>
          <GameIconDiceEightFacesEight
            className={`w-24 h-24 ${rolling ? 'animate-spin' : ''}`}
          />
        </Button>
      )}

      <Heading level={2} className="text-center mt-12 md:mt-16">
        VS
      </Heading>
    </div>
  );
};

export default DiceRoller;
