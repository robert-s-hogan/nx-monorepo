import { Text, Grid, Stack, GridItem, Spacer } from '@chakra-ui/react';
import useSWR from 'swr';

import ItemsInCaravan from '../components/itemsInCaravan';
import Loading from '../components/loading';

export default function Results({ fetcher }) {
  const { data, error } = useSWR('/api/caravan', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <Loading />;

  const { caravanItems } = data;

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
                  {/* {diceRolls} - {diceRollTotal(d6, rewardMultiplierNeeded)}g */}
                </Text>
                <Text fontSize="xs" fontWeight="bold">
                  {/* {printGoldEquation(rewardMultiplierNeeded)} */}
                </Text>
              </GridItem>
            </Grid>
          </Stack>
        </GridItem>

        <GridItem>
          <Grid
            gridTemplateColumns={{
              base: '1fr',
              md: 'repeat(2, minmax(0, 1fr))',
            }}
            gap={2}
          >
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
