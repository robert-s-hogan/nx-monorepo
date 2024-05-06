import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';

import { FiCheckCircle } from 'react-icons/fi';

const defaultPeople = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
];

export interface HeadlessUiRadioGroupProps {
  peopleProp?: { id: number; name: string; unavailable: boolean }[];
}

const HeadlessUiRadioGroup: React.FC<HeadlessUiRadioGroupProps> = ({
  peopleProp,
}) => {
  const people = peopleProp || defaultPeople;
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  // ...

  return (
    <RadioGroup value={selectedPerson} onChange={setSelectedPerson}>
      <RadioGroup.Label>Assigned to</RadioGroup.Label>
      <div className="space-y-2">
        {people.map((person) => (
          <RadioGroup.Option
            key={person.id}
            value={person}
            disabled={person.unavailable}
            className={({ active, checked }) =>
              `${
                active
                  ? 'ring-2 ring-offset-2 ring-offset-light-blue-300 ring-light-blue-500 ring-opacity-60'
                  : ''
              }
                ${
                  checked
                    ? 'bg-light-blue-500 bg-opacity-75 text-light-blue-600'
                    : 'bg-white'
                }
                relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
            }
          >
            {({ active, checked }) => (
              <>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center">
                    <div className="text-sm">
                      <RadioGroup.Label as="p" className="font-medium">
                        {person.name}
                      </RadioGroup.Label>
                      <RadioGroup.Description as="p" className="text-gray-500">
                        ID: {person.id}
                      </RadioGroup.Description>
                    </div>
                  </div>
                  {checked && (
                    <div className="flex-shrink-0 text-light-blue-600">
                      <FiCheckCircle size="2rem" />
                    </div>
                  )}
                </div>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default HeadlessUiRadioGroup;
