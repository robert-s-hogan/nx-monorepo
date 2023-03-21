import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { Flex, Box, Text, VStack } from '@chakra-ui/react';

const loadingMessages = [
  "When the DM asks you, 'Really, you sure?', you should always say 'no'.",
  'Be sure to take notes on the lore and history of the world. Someone probably worked very hard on it.',
  'Using the attack action, you can make a melee attack to shove a creature, either to knock it prone or push it away.',
  "This game is tabletop, and your DM's responses aren't programmed.  Think outside the box!",
  'Generally speaking, if you end up with a tie between two numbers in D&D, whoever rolled wins the tie.',
  "According to monster opticians, a beholder's eyesight is 20:20:20:20:20:20:20:20:20:14",
  'If the campaign is getting too serious for you, recall that DMs often struggle to keep things serious at taverns.',
  'In D&D, the options are limitless and the consequences are mandatory.',
];
function Loading() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const initialMessageIndex = Math.floor(
      Math.random() * loadingMessages.length
    );
    setMessage(loadingMessages[initialMessageIndex]);

    const interval = setInterval(() => {
      setMessage((currentMessage) => {
        const nextIndex =
          (loadingMessages.indexOf(currentMessage) + 1) %
          loadingMessages.length;
        return loadingMessages[nextIndex];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Flex
      height="100vh"
      textAlign="center"
      justifyContent="center"
      flexDirection="column"
    >
      <VStack spacing={8}>
        <Box>
          <FontAwesomeIcon icon={faDiceD20} />
        </Box>
        <Text>Loading...</Text>
        <Text fontSize="lg">{message || 'Loading message...'}</Text>
      </VStack>
    </Flex>
  );
}
export default Loading;
