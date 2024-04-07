import { useState } from 'react';
import { Combobox } from '@headlessui/react';

export interface HeadlessUiComboboxProps {
  peopleProp?: string[];
}

// Default people array
const defaultPeople = [
  'Durward Reynolds',
  'Kenton Towne',
  'Therese Wunsch',
  'Benedict Kessler',
  'Katelyn Rohan',
];

const HeadlessUiCombobox: React.FC<HeadlessUiComboboxProps> = ({
  peopleProp,
}) => {
  const people = peopleProp || defaultPeople;

  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [query, setQuery] = useState('');

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox value={selectedPerson} onChange={setSelectedPerson}>
      <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
      <Combobox.Options>
        {filteredPeople.map((person) => (
          <Combobox.Option key={person} value={person}>
            {person}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
};

export default HeadlessUiCombobox;
