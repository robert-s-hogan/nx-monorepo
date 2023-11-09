import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';

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
    <div className="flex h-100vh text-center justify-center flex-col">
      <div className="space-y-8">
        <div>
          <FontAwesomeIcon icon={faDiceD20} />
        </div>
        <p>Loading...</p>
        <p className="text-lg">{message || 'Loading message...'}</p>
      </div>
    </div>
  );
}
export default Loading;
