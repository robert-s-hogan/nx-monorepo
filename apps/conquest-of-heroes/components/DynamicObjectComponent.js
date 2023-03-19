import { GridItem, Heading } from '@chakra-ui/react';
import { ImUnlocked } from 'react-icons/im';
import { GiLockedChest } from 'react-icons/gi';

const DynamicObjectComponent = ({ data, locked, onClick }) => {
  function objectToString(obj) {
    let str = '';
    for (let i = 0; i < Object.keys(obj).length; i++) {
      str += obj[i];
    }
    return str;
  }

  if (typeof data === 'object' && !isNaN(parseInt(Object.keys(data)[0]))) {
    data = objectToString(data);
  }

  const renderWeapon = (weapon) => {
    return (
      <GridItem colSpan={1} bg="gray.100" p={4} rounded="md">
        <Heading as="h4" fontSize="1rem" display="flex" alignItems="center">
          {weapon.name}
        </Heading>
        <ul>
          {/* <Box height={24}>{weapon.description}</Box> */}
          <li>Type: {weapon.type}</li>
          <li>Quadrant: {weapon.location}</li>
          <li>Interactable: {weapon.interactable ? 'true' : 'false'}</li>
          <li>Loot: {weapon.loot ? weapon.loot : 'none'}</li>
          <li>Rarity: {weapon.rarity}</li>
          <li>Condition: {weapon.condition}</li>
          <li>Size: {weapon.size}</li>
          <li>Value: {weapon.value}</li>
        </ul>
      </GridItem>
    );
  };

  const renderRandomItem = (item) => {
    return (
      <GridItem colSpan={1} bg="gray.100" p={4} rounded="md">
        <Heading as="h4" fontSize="1rem" display="flex" alignItems="center">
          {item.name}
        </Heading>
        <ul>
          {/* <Box height={24}>{item.description}</Box> */}
          <li>type: {item.type}</li>
          <li>Quadrant: {item.location}</li>
          <li>Interactable: {item.interactable ? 'true' : 'false'}</li>
          <li>Loot:{item.loot ? item.loot : 'none'}</li>
          <li>Rarity: {item.rarity}</li>
          <li>Condition: {item.condition}</li>
          <li>Size: {item.size}</li>
          <li>Value: {item.value}</li>
        </ul>
      </GridItem>
    );
  };

  const renderCustomItem = (customItem) => {
    return (
      <GridItem
        colSpan={1}
        bg="gray.100"
        p={4}
        rounded="md"
        onClick={onClick}
        cursor="pointer"
      >
        {locked ? <GiLockedChest /> : <ImUnlocked />}
        <Heading as="h4" fontSize="1rem" display="flex" alignItems="center">
          {customItem.name}
        </Heading>
        <ul>
          {customItem.effects.map((effect, index) => (
            <li key={index}>{effect}</li>
          ))}
        </ul>
      </GridItem>
    );
  };

  if (data.type === 'custom-item') {
    return renderCustomItem(data);
  } else if (data.type === 'weapon') {
    return renderWeapon(data);
  } else {
    return renderRandomItem(data);
  }
};

export default DynamicObjectComponent;
