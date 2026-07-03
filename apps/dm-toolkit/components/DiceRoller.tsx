import { useState } from 'react';
import { roll } from '../lib/dice';

const DICE = [4, 6, 8, 10, 12, 20, 100];

interface RollResult {
  sides: number;
  value: number;
  id: number;
}

export default function DiceRoller() {
  const [results, setResults] = useState<RollResult[]>([]);
  const [rolling, setRolling] = useState(false);

  const rollDie = (sides: number) => {
    setRolling(true);
    setTimeout(() => {
      const value = roll(sides);
      setResults((prev) => [{ sides, value, id: Date.now() }, ...prev.slice(0, 9)]);
      setRolling(false);
    }, 80);
  };

  const latest = results[0];

  return (
    <div className="bg-stone-800 border border-stone-700 rounded-xl p-4">
      <h3 className="text-xs font-bold uppercase text-stone-500 mb-3">Dice Roller</h3>

      <div className="flex gap-2 flex-wrap mb-4">
        {DICE.map((sides) => (
          <button
            key={sides}
            onClick={() => rollDie(sides)}
            disabled={rolling}
            className="px-3 py-1.5 bg-stone-900 hover:bg-stone-700 border border-stone-600 hover:border-green-700 text-stone-300 text-sm rounded-lg transition-all disabled:opacity-50 font-mono"
          >
            d{sides}
          </button>
        ))}
      </div>

      {latest && (
        <div className="flex items-center gap-4 mb-3">
          <div className="text-5xl font-bold text-stone-100 min-w-[3rem] text-center tabular-nums">
            {latest.value}
          </div>
          <div>
            <p className="text-stone-500 text-xs">
              d{latest.sides} roll
              {latest.value === latest.sides && (
                <span className="ml-2 text-green-400 font-bold">NAT {latest.sides}!</span>
              )}
              {latest.value === 1 && latest.sides === 20 && (
                <span className="ml-2 text-red-400 font-bold">NAT 1!</span>
              )}
            </p>
          </div>
        </div>
      )}

      {results.length > 1 && (
        <div className="flex gap-1.5 flex-wrap">
          {results.slice(1).map((r) => (
            <span
              key={r.id}
              className="text-xs bg-stone-900 border border-stone-700 text-stone-400 rounded px-1.5 py-0.5 font-mono"
            >
              d{r.sides}:{r.value}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
