import { Flex } from '@with-nx/generic-ui';

export interface Creature {
  armorClass?: number;
  hitPoints?: number;
  speed?: string;
  strength?: number;
  dexterity?: number;
  constitution?: number;
  intelligence?: number;
  wisdom?: number;
  charisma?: number;
  actions?: Array<{ name: string; damage: string; reach?: string }>;
  specialAbilities?: Array<{ name: string; description: string }>;
  imagePrompt?: string;
  name?: string;
  description?: string;
}

export interface CreatureCardProps {
  creature: Creature;
}

export const CreatureCard = ({ creature }: CreatureCardProps) => {
  if (!creature) {
    return <div className="py-5 text-center">No creature data</div>;
  }

  const {
    name,
    description,
    armorClass,
    hitPoints,
    speed,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
    actions = [],
    specialAbilities = [],
  } = creature;

  return (
    <div className="w-full bg-white p-5 shadow-xl">
      <h2 className="text-2xl font-bold text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <div className="mt-4 grid grid-cols-3 gap-4 text-gray-800">
        <div>
          <strong>Armor Class:</strong> {armorClass}
        </div>
        <div>
          <strong>Hit Points:</strong> {hitPoints}
        </div>
        <div>
          <strong>Speed:</strong> {speed}
        </div>
        <Flex className="w-full justify-between">
          <div>
            <strong>STR</strong> {strength}
          </div>
          <div>
            <strong>DEX</strong> {dexterity}
          </div>
          <div>
            <strong>CON</strong> {constitution}
          </div>
          <div>
            <strong>INT</strong> {intelligence}
          </div>
          <div>
            <strong>WIS</strong> {wisdom}
          </div>
          <div>
            <strong>CHA</strong> {charisma}
          </div>
        </Flex>
      </div>
      <div className="mt-4 text-gray-600">
        <strong className="block">Actions:</strong>
        {actions.length > 0 ? (
          <ul className="list-disc pl-5">
            {actions.map((action, index) => (
              <li key={index} className="mt-1">
                {action.name}({action.reach} ft): {action.damage}
              </li>
            ))}
          </ul>
        ) : (
          <div>No actions available</div>
        )}
      </div>
      <div className="mt-4 text-gray-600">
        <strong className="block">Special Abilities:</strong>
        {specialAbilities.length > 0 ? (
          <ul className="list-disc pl-5">
            {specialAbilities.map((ability, index) => (
              <li key={index} className="mt-1">
                {ability.name}: {ability.description}
              </li>
            ))}
          </ul>
        ) : (
          <div>No special abilities available</div>
        )}
      </div>
    </div>
  );
};
