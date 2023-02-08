import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { Flex, Box, Text, VStack } from '@chakra-ui/react';
import styles from '../styles/loading.module.css';

const loadingMessages = [
  {
    id: 1,
    message: "When the DM asks you, 'Really, you sure?', you should always say 'no'.",
  },
  {
    id: 2,
    message:
      'Be sure to take notes on the lore and history of the world. Someon probably worked very hard on it.',
  },
  {
    id: 3,
    message:
      'Using the attack action, you can make a melee attack to shove a creature, either to knock it prone or push it away.',
  },
  {
    id: 4,
    message:
      "This game is tabletop, and your DM's responses aren't programmed.  Think outside the box!",
  },
  {
    id: 5,
    message:
      'Generally speaking, if you end up with a tie between two numbers in D&D, whoever rolled wins the tie.',
  },
  {
    id: 6,
    message:
      "According to monster opticians, a beholder's eyesight is 20:20:20:20:20:20:20:20:20:14",
  },
  {
    id: 7,
    message:
      'If the campaign is getting too serious for you, recall that DMs often struggle to keep things serious at taverns.',
  },
  {
    id: 8,
    message: 'In D&D, the options are limitless and the consequences are mandatory.',
  },
];

function Loading() {
  const [message, setMessage] = useState(
    [Math.floor(Math.random() * loadingMessages.length)].message,
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage(loadingMessages[Math.floor(Math.random() * loadingMessages.length)].message);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Flex height="100vh" textAlign="center" justifyContent="center" flexDirection="column">
      <VStack spacing={8}>
        <Box className={styles.wrapper} align="center">
          <FontAwesomeIcon className={styles.icon} icon={faDiceD20} />
        </Box>
        <Text>Loading...</Text>
        <Text fontSize="lg">{message}</Text>
      </VStack>
    </Flex>
  );
}
export default Loading;
