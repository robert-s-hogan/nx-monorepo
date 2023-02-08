import { useState, useEffect } from 'react';
import { Select, Td, Tr, Text } from '@chakra-ui/react';
import { TriangleDownIcon } from '@chakra-ui/icons';

const Dropdown = (props) => {
  const { options, dimensions, difficulty, challengeRating } = props;

  const { easy, medium, hard, deadly } = challengeRating;

  // const [selectedOption, setSelectedOption] = useState(options[0].value);

  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  let newDimensions = dimensions;
  let newDifficulty = difficulty;
  let newChallengeRating = challengeRating;

  function changePlayerLevel(selectedOption) {
    if (selectedOption < 4) {
      return (newDimensions = randomNumber(1, 3)) * 100;
    } else if (selectedOption < 7) {
      return (newDimensions = randomNumber(3, 7)) * 100;
    } else if (selectedOption < 11) {
      return (newDimensions = randomNumber(5, 10)) * 100;
    }
  }

  function changeMonstersBasedOnDifficulty(selectedOption) {
    if (selectedOption < 4) {
      return (newDifficulty = randomNumber(1, 3));
    } else if (selectedOption < 7) {
      return (newDifficulty = randomNumber(3, 7));
    } else if (selectedOption < 11) {
      return (newDifficulty = randomNumber(5, 10));
    }
  }

  function selectMonstersBasedOnChallengeRating(difficulty) {
    switch (difficulty) {
      case 'easy':
        return easy[(newChallengeRating = randomNumber(0, easy.length))];
      case 'medium':
        return medium[(newChallengeRating = randomNumber(0, medium.length))];
      case 'hard':
        return hard[(newChallengeRating = randomNumber(0, hard.length))];
      case 'deadly':
        return deadly[(newChallengeRating = randomNumber(0, deadly.length))];
      default:
        return easy;
    }
  }

  // useEffect(() => {
  //   changePlayerLevel(selectedOption);
  // }, [selectedOption]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

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
            onChange={handleChange}
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
