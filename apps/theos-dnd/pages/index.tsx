import { useState } from 'react';

import { Grid, Section } from '@with-nx/react-ui';
import { randomNumber } from '@with-nx/utils';

import { creatures } from '../data/creatures';
import { CreatureType } from '../types/entity';

import TheosDndLayout from '../components/TheosDndLayout';
import TheosDndInfoCard from '../components/TheosDndInfoCard';

export function Index() {
  return (
    <TheosDndLayout>
      <Section className="text-center">
        <h1>Theo's DnD</h1>
      </Section>
      <Section className="text-center">
        <Grid className="grid-cols-1 md:grid-cols-3 gap-12">
          {creatures.map((creature) => (
            <a href={`/creatures/${creature.slug}`} key={creature.name}>
              <TheosDndInfoCard data={creature} />
            </a>
          ))}
        </Grid>
      </Section>
    </TheosDndLayout>
  );
}

export default Index;
