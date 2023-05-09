import { useRouter } from 'next/router';
import useSWR from 'swr';

import ConquestLayout from '../components/ConquestLayout';
import Loading from '../components/Loading';

export default function Results({ fetcher }) {
  const router = useRouter();
  const { data, error } = useSWR('/api/caravan', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <Loading />;

  const {
    timeSpentResting,
    timeBetweenEncounters,
    doesAppear,
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
      <div className="text-2xl font-bold">
        Success! canIhasCaravan? {isCaravan ? 'No' : 'Yes'}
      </div>
      <button onClick={() => loadPage()}>Reload</button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-bold mt-4">
        {/* <TableContainer border="1px" maxWidth="100%">
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
                    <Td>{timeBetweenEncounters[timeBetweenEncountersLevel]}</Td>
                  </Tr>
                </>
              )}
            </Tbody>
          </Table>
        </TableContainer> */}

        {/* <div className="md:col-span-2">
          {doesAppear[isCaravan] === 'success' &&
            restType[restTypeNeeded] === 'short' &&
            rest[restNeeded] === 'true' && (
              <TableContainer border="1px" width="100%">
                <p className="text-xl ml-2">Caravan Success</p>
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
        </div>
         */}
      </div>
    </ConquestLayout>
  );
}
