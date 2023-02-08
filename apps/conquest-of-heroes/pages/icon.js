import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDungeon, faSlash, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Grid, GridItem, Flex, Text, VStack, Highlight } from '@chakra-ui/react';

import Layout from '../components/layout';

const iconData = [
  {
    id: 1,
    icon: faDungeon,
    name: 'Dungeon',
    description:
      'This dungeon looks to be collapsed and abandoned. It is a place of mystery and mystery.',
    iconColor: '#000000',
    iconSize: '2x',
    condition: 'worn',
    exactDimensions: '20ft',
    animate: true,
    rotation: 0,
    iconType: 'solid',
  },
  {
    id: 2,
    icon: faDungeon,
    name: 'Dungeon',
    description:
      'A dungeon is a dark and mysterious place where you can find monsters and treasure.',
    iconColor: 'red',
    iconSize: '4x',
    exactDimensions: '100ft',
    condition: '',
    animate: true,
    rotation: 0,
    iconType: 'solid',
  },
  {
    id: 3,
    icon: faDungeon,
    name: 'Dungeon',
    description:
      'A dungeon is a dark and mysterious place where you can find monsters and treasure.',
    iconColor: 'green',
    iconSize: '6x',
    exactDimensions: '100ft',
    condition: 'danger',
    animate: true,
    rotation: 0,
    iconType: 'solid',
  },
];

export default function Icon() {
  return (
    <Layout>
      <Grid
        alignItems="center"
        templateColumns={{ base: 'repeat(3, minmax(0, 1fr))', md: 'repeat(2, minmax(0, 1fr))' }}
      >
        {iconData.map(({ id, icon, iconSize, iconColor, description, condition }) => (
          <>
            <GridItem colSpan={1} mt={4}>
              <Flex justifyContent="center">
                <span className={condition === 'worn' ? 'fa-stack' : ''}>
                  <FontAwesomeIcon
                    icon={icon}
                    size={iconSize}
                    color={iconColor}
                    style={{
                      position: `${condition === 'worn' ? 'absolute' : 'relative'}`,
                    }}
                  />
                  {condition === 'worn' && (
                    <FontAwesomeIcon icon={faSlash} size={iconSize} color={iconColor} />
                  )}
                </span>
              </Flex>
            </GridItem>
            <GridItem colSpan={{ base: 2, md: 1 }} mt={4} border="1px" p={2}>
              <Flex>
                <VStack fontSize="xs" ml={4} alignItems="left">
                  <Text fontSize="xs">Icon ID: #{id}</Text>
                  <Text fontSize="xs" color="gray.900" textAlign="left">
                    description: <br />
                    {description}
                  </Text>
                  <Text color="gray.900" textAlign="left">
                    color: {iconColor}
                  </Text>
                  <Text color="gray.900" textAlign="left">
                    size: {iconSize}
                  </Text>
                  <Text color="gray.900" textAlign="left">
                    condition:{' '}
                    <Highlight
                      query="worn"
                      styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                    >
                      {condition}
                    </Highlight>
                  </Text>
                </VStack>
              </Flex>
            </GridItem>
          </>
        ))}
      </Grid>
    </Layout>
  );
}
