import { useState } from 'react';

import { Button } from '@with-nx/react-ui';
import { GameIconDiceEightFacesEight } from '@with-nx/icons';
import { rollDice, OutcomeType } from '../utils/dice';

type DiceRollerProps = {
  onRoll: (outcome: OutcomeType) => void;
  defense: number;
};

const DiceRoller: React.FC<DiceRollerProps> = ({ defense, onRoll }) => {
  const [outcome, setOutcome] = useState<OutcomeType | null>(null);
  const [rolling, setRolling] = useState(false);
  const [fading, setFading] = useState(false);

  const handleRoll = () => {
    setRolling(true);
    setTimeout(() => {
      const result = rollDice(defense);
      setOutcome(result);
      onRoll(result);
      setRolling(false);

      // Begin fading effect after 20 seconds
      setTimeout(() => {
        setFading(true);
        // Reset after the fade completes (1 second duration in this case)
        setTimeout(() => {
          setOutcome(null);
          setFading(false);
        }, 1000);
      }, 5000);
    }, 1000);
  };

  return (
    <div className="space-y-4">
      {outcome ? (
        <div
          className={`flex flex-col items-center space-x-2 transition-opacity duration-1000 ${
            fading ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <outcome.image className="w-24 h-24" />
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
    </div>
  );
};

export default DiceRoller;
