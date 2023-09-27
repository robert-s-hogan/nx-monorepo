import { useState } from 'react';
import { BASE_STATS } from '../data';

export function useCharacterResource() {
  const [characterResource, setCharacterResource] = useState(
    BASE_STATS.RESOURCE
  );

  function useAbility(abilityCost: number) {
    if (characterResource >= abilityCost) {
      setCharacterResource((prevResource) => prevResource - abilityCost); // Use callback
      return true; // Ability was used
    }
    console.log('Not enough character resource');
    return false; // Not enough character resource
  }

  function regenerateCharacterResource(amount: number) {
    console.log('Regenerating character resource by:', amount);

    setCharacterResource((prevCharacterResource) =>
      Math.min(BASE_STATS.RESOURCE, prevCharacterResource + amount)
    );
  }

  return {
    characterResource,
    useAbility,
    regenerateCharacterResource,
  };
}
