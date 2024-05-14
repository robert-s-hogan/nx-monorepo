import { Text } from '@with-nx/generic-ui';
import { Flex } from '@with-nx/react-ui';

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
  actions?: Array<{ name: string; damage: string }>;
  specialAbilities?: Array<{ name: string; description: string }>;
  imagePrompt?: string;
  name?: string;
  description?: string;
}

export interface CreatureCardProps {
  creature: Creature;
}

export const CreatureCard = ({ creature }) => {
  if (!creature) {
    return <div>No creature data</div>;
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
    actions = [], // Default to empty array if undefined
    specialAbilities = [], // Default to empty array if undefined
  } = creature;

  return (
    <div className="creature-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="stats">
        <div>
          <strong>Armor Class:</strong> {armorClass}
        </div>
        <div>
          <strong>Hit Points:</strong> {hitPoints}
        </div>
        <div>
          <strong>Speed:</strong> {speed}
        </div>
        <div>
          <strong>STR:</strong> {strength}
        </div>
        <div>
          <strong>DEX:</strong> {dexterity}
        </div>
        <div>
          <strong>CON:</strong> {constitution}
        </div>
        <div>
          <strong>INT:</strong> {intelligence}
        </div>
        <div>
          <strong>WIS:</strong> {wisdom}
        </div>
        <div>
          <strong>CHA:</strong> {charisma}
        </div>
      </div>
      <div className="actions">
        <strong>Actions:</strong>
        <ul>
          {actions.length > 0 ? (
            actions.map((action, index) => (
              <li key={index}>
                {action.name}: {action.description}
              </li>
            ))
          ) : (
            <li>No actions available</li>
          )}
        </ul>
      </div>
      <div className="special-abilities">
        <strong>Special Abilities:</strong>
        <ul>
          {specialAbilities.length > 0 ? (
            specialAbilities.map((ability, index) => (
              <li key={index}>
                {ability.name}: {ability.description}
              </li>
            ))
          ) : (
            <li>No special abilities available</li>
          )}
        </ul>
      </div>
    </div>
  );
};
