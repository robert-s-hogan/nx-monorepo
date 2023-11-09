import { Button, Flex, Grid, Heading, Text } from '@with-nx/react-ui';

const ConquestCreatureGeneratorCard = ({ creature }) => {
  console.log(`creature: ${creature}`);
  return (
    <div className="creature-card">
      <Flex className="flex-col">
        <p>Armor Class: {creature.armorClass}</p>
        <p>Hit Points: {creature.hitPoints}</p>
        <p>Speed: {creature.speed}</p>
      </Flex>
      <hr className="my-2 h-0.5 border-t-0" />
      <Flex className="space-x-2">
        <div className="flex-col text-center">
          <p>STR</p>
          <p>{creature.strength}</p>
        </div>
        <div className="flex-col text-center">
          <p>DEX</p>
          <p>{creature.dexterity}</p>
        </div>
        <div className="flex-col text-center">
          <p>CON</p>
          <p>{creature.constitution}</p>
        </div>
        <div className="flex-col text-center">
          <p>INT</p>
          <p>{creature.intelligence}</p>
        </div>
        <div className="flex-col text-center">
          <p>WIS</p>
          <p>{creature.wisdom}</p>
        </div>
        <div className="flex-col text-center">
          <p>CHA</p>
          <p>{creature.charisma}</p>
        </div>
      </Flex>
      <hr />
      <p>Actions:</p>
      <div className="space-y-2">
        {Array.isArray(creature.actions) && // Check if actions is an array
          creature.actions.map((action, index) => (
            <p key={index} className="mt-1">
              <b>
                <i>{action.name}</i>
              </b>
              : {action.description} {/* Changed from action.damage */}
            </p>
          ))}
      </div>
      <hr />
      <p className="mb-3">Special Abilities:</p>
      <div className="space-y-2">
        {Array.isArray(creature.specialAbilities) && // Check if specialAbilities is an array
          creature.specialAbilities.map((ability, index) => (
            <p key={index} className="mt-1">
              <b>
                <i>{ability.name}</i>
              </b>
              : {ability.description} {/* This was correct */}
            </p>
          ))}
      </div>
    </div>
  );
};

export default ConquestCreatureGeneratorCard;
