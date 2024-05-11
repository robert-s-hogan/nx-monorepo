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

export const CreatureCard: React.FC<CreatureCardProps> = ({ creature }) => {
  console.log('CreatureCard receiving creature:', creature);

  if (!creature) {
    return <div>No creature data available.</div>;
  }

  return (
    <div className="creature-card" key={creature.name}>
      <Flex className="flex-col">
        <p>Armor Class: {creature.armorClass}</p>
        <p>Hit Points: {creature.hitPoints}</p>
        <p>Speed: {creature.speed}</p>
      </Flex>
      <hr className="my-2 h-0.5 border-t-0 bg-neutral-100" />
      <Flex className="flex space-x-2">
        {/* Safe property access with optional chaining and default values */}
        <Flex className="flex-col text-center">
          <Text text="STR" />
          <Text text={creature.strength?.toString() ?? 'N/A'} />
        </Flex>
        <Flex className="flex-col text-center">
          <Text text="DEX" />
          <Text text={creature.dexterity?.toString() ?? 'N/A'} />
        </Flex>
        <Flex className="flex-col text-center">
          <Text text="CON" />
          <Text text={creature.constitution?.toString() ?? 'N/A'} />
        </Flex>
        <Flex className="flex-col text-center">
          <Text text="INT" />
          <Text text={creature.intelligence?.toString() ?? 'N/A'} />
        </Flex>
        <Flex className="flex-col text-center">
          <Text text="WIS" />
          <Text text={creature.wisdom?.toString() ?? 'N/A'} />
        </Flex>
        <Flex className="flex-col text-center">
          <Text text="CHA" />
          <Text text={creature.charisma?.toString() ?? 'N/A'} />
        </Flex>
      </Flex>
      <hr className="my-2 h-0.5 border-t-0 bg-neutral-100" />
      <Text className="mb-3" text="Actions:" />
      <div className="space-y-2">
        {creature.actions?.map((action, index) => (
          <Text key={index} text={`${action.name}: ${action.damage}`} />
        ))}
      </div>
      <hr className="my-2 h-0.5 border-t-0 bg-neutral-100" />
      <Text className="mb-3" text="Special Abilities:" />
      <div className="space-y-2">
        {creature.specialAbilities?.map((ability, index) => (
          <Text key={index} text={`${ability.name}: ${ability.description}`} />
        ))}
      </div>
    </div>
  );
};
