import { Select, Td, Tr, Text } from '@chakra-ui/react';
import { TriangleDownIcon } from '@chakra-ui/icons';

const Dropdown = (props) => {
  // const [selectedOption, setSelectedOption] = useState(options[0].value);

  // useEffect(() => {
  //   changePlayerLevel(selectedOption);
  // }, [selectedOption]);

  return (
    <>
      {/* <Text fontSize="xs" fontWeight="light">
        <pre>
          <code>{JSON.stringify(easy, null, 2)}</code>
        </pre>
      </Text> */}
      <Tr>
        <Td>Player Count</Td>
        <Td>
          <Select
            size="xs"
            icon={<TriangleDownIcon fontSize="xs" />}
            // value={selectedOption}
          >
            {/* {options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))} */}
          </Select>
          <Text fontSize="xs">(1-3): (100-300) ft, 1-3 monsters</Text>
          <Text fontSize="xs">(4-6): (300-700) ft, 4-6 monsters</Text>
          <Text fontSize="xs">(7+ &nbsp;): (500-900) ft, 5-10 monsters</Text>
        </Td>
      </Tr>
      <Tr>
        <Td>Map Dimensions</Td>

        <Td>
          {/* {changePlayerLevel(selectedOption)}  */}
          ft
        </Td>
      </Tr>
    </>
  );
};
export default Dropdown;
