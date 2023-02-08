import { spells } from '../../data/spells';

import Layout from '../../components/layout';
import CustomCardGrid from '../../components/customCardGrid';
import Card from '../../components/card';
import { Heading } from '@chakra-ui/react';

export default function Spells() {
  return (
    <Layout>
      <Heading as="h1" size="2xl" mb={4}>
        All Spells
      </Heading>
      <CustomCardGrid>
        {spells.map((spell, index) => (
          <Card key={index} data={spell} />
        ))}
      </CustomCardGrid>
    </Layout>
  );
}
