import { useState } from 'react';

import { Flex, Grid, Section } from '@with-nx/react-ui';
import { randomNumber } from '@with-nx/utils';

import TheosDndLayout from '../components/TheosDndLayout';
import TheosDndCharacterCreationCard from '../components/TheosDndCharacterCreationCard';
import TheosDndInfoCard from '../components/TheosDndInfoCard';

export function Index() {
  return (
    <TheosDndLayout>
      <Section className="text-center">
        <TheosDndCharacterCreationCard />
      </Section>
    </TheosDndLayout>
  );
}

export default Index;
