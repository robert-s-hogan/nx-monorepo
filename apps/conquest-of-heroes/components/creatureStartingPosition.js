import { Tr, Td } from '@chakra-ui/react';

function CreatureStartingPosition({ playerStartingPotions, oppositionStartingPotions }) {
  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  let newPlayerStartingPotion = randomNumber(1, playerStartingPotions.length);
  const newOppositionStartingPotion = randomNumber(1, oppositionStartingPotions.length);

  if (newPlayerStartingPotion === newOppositionStartingPotion) {
    newPlayerStartingPotion = randomNumber(1, playerStartingPotions.length);
  }

  return (
    <>
      <Tr>
        <Td>Player Starting Position</Td>
        <Td>{newPlayerStartingPotion}</Td>
      </Tr>
      <Tr>
        <Td>Opposition Starting Position</Td>
        <Td>{newOppositionStartingPotion}</Td>
      </Tr>
    </>
  );
}
export default CreatureStartingPosition;
