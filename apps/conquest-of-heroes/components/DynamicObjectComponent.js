import { GridItem, Heading, Box } from '@chakra-ui/react';

const DynamicObjectComponent = ({ data }) => {
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
        <Heading as="h4" height={24} display="flex" alignItems="center">
          {weapon.name}
        </Heading>
        <ul>
          <Box height={24}>{weapon.description}</Box>
          <li>Quadrant: {weapon.location}</li>
          <li>Interactable: {weapon.interactable}</li>
          <li>Loot: {weapon.loot}</li>
          <li>Rarity: {weapon.rarity}</li>
          <li>Condition: {weapon.condition}</li>
          <li>Size: {weapon.size}</li>
          <li>Value: {weapon.value}</li>
        </ul>
      </GridItem>
    );
  };

  // const renderStructure = () => {
  //   // ...Render structure component...
  // };

  if (data.type === 'weapon') {
    return renderWeapon(data);
  } else {
    return <div>Invalid object type</div>; // or return <></>; for an empty element
  }

  // ...Rest of the component implementation...
};

export default DynamicObjectComponent;
