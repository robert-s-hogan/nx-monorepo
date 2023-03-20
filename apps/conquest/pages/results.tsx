import { useRouter } from 'next/router';
import {
  Button,
  Text,
  Grid,
  GridItem,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import useSWR from 'swr';

import ItemsInCaravan from '../components/itemsInCaravan';
import ConquestLayout from '../components/layout/ConquestLayout';
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

  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;

  const isCaravan = randomNumber(0, doesAppear.length);
  const restNeeded = randomNumber(0, rest.length);
  const restTypeNeeded = randomNumber(0, restType.length);
  const rewardMultiplierNeeded = randomNumber(1, rewardMultiplier.length);
  const timeSpentRestingLevel = randomNumber(0, timeSpentResting.length);
  const timeBetweenEncountersLevel = randomNumber(
    0,
    timeBetweenEncounters.length
  );

  const d6 = randomNumber(1, 7);

  const diceRolls = [];

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
    return `${multiplier}d6 x 50`;
  }

  function loadPage() {
    router.push('/');
  }

  return (
    <ConquestLayout>
      <Text fontSize="2xl" fontWeight="bold">
        Success! canIhasCaravan? {isCaravan ? 'No' : 'Yes'}
      </Text>
      <Button colorScheme="blue" onClick={() => loadPage()} mt={3}>
        Reload
      </Button>
      <Grid
        gridTemplateColumns={{
          base: 'repeat(1, minmax(200px, 1fr))',
          md: 'repeat(3, minmax(200px, 1fr))',
        }}
        gap={3}
        color="blackAlpha.700"
        fontWeight="bold"
        mt={4}
      >
        <GridItem>
          <TableContainer border="1px" maxWidth="100%">
            <Text fontSize="xl" ml={2}>
              Rewards
            </Text>
            <Table variant="simple" size="sm">
              <Thead>
                <Tr>
                  <Th>Category</Th>
                  <Th>Value</Th>
                  <Th>Equation</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Gold Earned</Td>
                  <Td>
                    {diceRolls} - {diceRollTotal(d6, rewardMultiplierNeeded)}g
                  </Td>
                  <Td>{printGoldEquation(rewardMultiplierNeeded)}</Td>
                </Tr>
                <Tr>
                  <Td>Rest Needed?</Td>
                  <Td>{rest[restNeeded]}</Td>
                  <Td />
                </Tr>
                {rest[restNeeded] === 'true' && (
                  <>
                    <Tr>
                      <Td>Rest Type</Td>
                      <Td>{restType[restTypeNeeded]}</Td>
                      <Td />
                    </Tr>
                    <Tr>
                      <Td>Time Spent Resting</Td>
                      <Td>{timeSpentResting[timeSpentRestingLevel]}</Td>
                    </Tr>
                    <Tr>
                      <Td>Time Between Encounters</Td>
                      <Td>
                        {timeBetweenEncounters[timeBetweenEncountersLevel]}
                      </Td>
                    </Tr>
                  </>
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </GridItem>

        <GridItem colSpan={{ md: 2 }}>
          {doesAppear[isCaravan] === 'success' &&
            restType[restTypeNeeded] === 'short' &&
            rest[restNeeded] === 'true' && (
              <TableContainer border="1px" width="100%">
                <Text fontSize="xl" ml={2}>
                  Caravan Success
                </Text>
                <Table variant="simple" size="sm">
                  <Thead>
                    <Tr>
                      <Th>Caravan Slot</Th>
                      <Th>Name (Price)</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <ItemsInCaravan caravanItems={caravanItems} />
                  </Tbody>
                </Table>
              </TableContainer>
            )}
        </GridItem>
      </Grid>
    </ConquestLayout>
  );
}
