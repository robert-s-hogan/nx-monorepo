import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Button, Text, Grid, Stack, GridItem, Spacer } from '@chakra-ui/react';
import useSWR from 'swr';

import ItemsInCaravan from '../components/itemsInCaravan';
import Layout from '../components/layout';
import Loading from '../components/loading';

export default function Results({ fetcher }) {
  const router = useRouter();
  const { data, error } = useSWR('/api/caravan', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <Loading />;

  const {
    timeSpentResting,
    timeBetweenEncounters,
    doesAppear,
    caravanItems,
    rest,
    restType,
    rewardMultiplier,
  } = data;

  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  const isCaravan = randomNumber(0, doesAppear.length);
  const restNeeded = randomNumber(0, rest.length);
  const restTypeNeeded = randomNumber(0, restType.length);
  const rewardMultiplierNeeded = randomNumber(1, rewardMultiplier.length);
  const timeSpentRestingLevel = randomNumber(0, timeSpentResting.length);
  const timeBetweenEncountersLevel = randomNumber(0, timeBetweenEncounters.length);

  const d6 = randomNumber(1, 7);

  let diceRolls = [];

  function diceRollTotal(dValue, amount) {
    let total = 0;
    let tempValue = 0;
    for (let i = 0; i < amount; i++) {
      tempValue = randomNumber(1, dValue);
      diceRolls.push(tempValue);
      total += tempValue;
    }
    return total * 50;
  }

  function printGoldEquation(multiplier) {
    const value = d6 * multiplier;
    return `${multiplier}d6 x 50`;
  }

  function loadPage() {
    router.push('/');
  }

  return (
    <>
      <Text fontSize="xl" fontWeight="bold" mt={2}>
        Caravan Details
      </Text>
      <Grid
        ml={0}
        gridTemplateColumns={{
          base: '1fr',
          md: 'repeat(2, minmax(0, 1fr))',
        }}
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
        mt={4}
      >
        <GridItem>
          <Stack spacing={2}>
            <Text fontSize="xl">Rewards</Text>
            <Grid
              gridTemplateColumns={{
                base: 'repeat(2, minmax(0, 1fr))',
                md: 'repeat(3, minmax(0,1f))',
              }}
              gap={2}
            >
              <GridItem>
                <Text fontSize="xs">Category</Text>
              </GridItem>
              <GridItem>
                <Text fontSize="xs" fontWeight="bold">
                  Value
                </Text>
              </GridItem>
              <GridItem>
                <Text fontSize="xs" mt={3}>
                  Gold Earned
                </Text>
              </GridItem>
              <GridItem>
                <Text fontSize="xl">
                  {diceRolls} - {diceRollTotal(d6, rewardMultiplierNeeded)}g
                </Text>
                <Text fontSize="xs" fontWeight="bold">
                  {printGoldEquation(rewardMultiplierNeeded)}
                </Text>
              </GridItem>
            </Grid>
          </Stack>
        </GridItem>

        <GridItem>
          <Grid gridTemplateColumns={{ base: '1fr', md: 'repeat(2, minmax(0, 1fr))' }} gap={2}>
            <GridItem>
              <Text fontSize="xl" fontWeight="bold">
                Item Name AND (Price)
              </Text>
              <Spacer />
              <ItemsInCaravan caravanItems={caravanItems} />
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </>
  );
}
