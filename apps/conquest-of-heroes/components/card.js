import NextLink from 'next/link';
import {
  GridItem,
  Box,
  Badge,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Link,
} from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';

const Card = ({ data }) => {
  const { name, action, index, classes, range, description, descriptionContinued, duration } =
    data;
  return (
    <GridItem p="4" border="2px" borderRadius="md" borderColor="brand.100" _hover="shadow">
      <a href={`/spells/${name}`}>
        <Box display="flex" alignItems="center">
          <Box
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xl"
            textTransform="uppercase"
          >
            {name}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="p"
          fontSize={{ base: 'xs', md: 'md' }}
          lineHeight="tight"
        >
          {classes.map((classType) => (
            <Badge key={classType} borderRadius="full" px="2" colorScheme="teal">
              {classType}
            </Badge>
          ))}
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="p"
          fontSize={{ base: 'xs', md: 'md' }}
          lineHeight="tight"
          display="flex"
          alignItems="center"
        >
          <TimeIcon />
          &nbsp; {duration}
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="p"
          fontSize={{ base: 'xs', md: 'md' }}
          lineHeight="tight"
          display="flex"
          alignItems="center"
        >
          Range: &nbsp; {range}
        </Box>

        {/* <Box
          mt="1"
          fontWeight="semibold"
          as="p"
          fontSize={{ base: 'xs', md: 'md' }}
          lineHeight="tight"
        >
          {description}
          {descriptionContinued ? descriptionContinued : ''}
        </Box> */}
      </a>
    </GridItem>
  );
};

export default Card;
