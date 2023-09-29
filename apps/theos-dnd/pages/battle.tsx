import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Grid, Section } from '@with-nx/react-ui';

import TheosDndLayout from '../components/TheosDndLayout';
import TheosDndCharacterCard from '../components/TheosDndCharacterCard';
import { useEntity } from '../context/EntityContext';
import { Stats } from '../types';

function combineStats(stats1: Stats, stats2: Stats): Stats {
  return {
    STR: stats1.STR + stats2.STR,
    CON: stats1.CON + stats2.CON,
    DEX: stats1.DEX + stats2.DEX,
    INT: stats1.INT + stats2.INT,
    WIS: stats1.WIS + stats2.WIS,
    CHA: stats1.CHA + stats2.CHA,
    DEF: stats1.DEF + stats2.DEF,
    HP: stats1.HP + stats2.HP,
    PHYSICAL_ATTACK: stats1.PHYSICAL_ATTACK + stats2.PHYSICAL_ATTACK,
    MAGICAL_ATTACK: stats1.MAGICAL_ATTACK + stats2.MAGICAL_ATTACK,
    RESOURCE: stats1.RESOURCE + stats2.RESOURCE,
  };
}

const Battle = () => {
  const { entity, setEntity, setIsBattleMode } = useEntity();

  useEffect(() => {
    setIsBattleMode(true);

    const storedEntity = localStorage.getItem('entity');
    if (storedEntity) {
      const parsedEntity = JSON.parse(storedEntity);
      if (parsedEntity && !entity) {
        // Check if the entity is not already set
        setEntity(parsedEntity); // Directly set the entity state
      }
    }
  }, []);

  return (
    <TheosDndLayout>
      <Section className="container mx-auto max-w-7xl">
        <Grid className="grid-cols-1 md:grid-cols-5 gap-4">
          {entity && <TheosDndCharacterCard entity={entity} preview={false} />}
        </Grid>
      </Section>
    </TheosDndLayout>
  );
};

export default Battle;
