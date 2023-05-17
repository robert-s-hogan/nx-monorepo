import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Text,
  Textarea,
  Section,
} from '@with-nx/react-ui';
import { useDispatch } from 'react-redux';
import { setFormValid } from '@with-nx/store/form';

interface MyCartProps {
  onValidationStatusChange?: (isValid: boolean) => void;
  isFormComplete?: boolean;
}

const EnterYourDetails = ({
  onValidationStatusChange,
  isFormComplete,
}: MyCartProps) => {
  const dispatch = useDispatch();

  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    address: '',
  });

  useEffect(() => {
    const allFieldsFilled = Object.values(formDetails).every(
      (field) => !!field
    );
    dispatch(setFormValid(allFieldsFilled));
    onValidationStatusChange?.(allFieldsFilled);
  }, [formDetails, dispatch, onValidationStatusChange]);

  const handleFormChange = (event) => {
    setFormDetails({
      ...formDetails,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Section>
      <Flex className="w-8 h-8 rounded-full justify-center items-center border-2 text-blue-500 border-blue-500 font-bold">
        2
      </Flex>
      <Heading
        level={3}
        className="uppercase tracking-wider text-xs font-semibold mt-2 text-gray-400"
      >
        Delivery Info
      </Heading>
      <form onChange={handleFormChange}>
        <Flex className="flex-col gap-x-10 py-8 justify-center space-y-2">
          <Input
            type="text"
            id="name"
            label="Name"
            name="name"
            required
            placeholder="Name"
            value={formDetails.name}
            onChange={handleFormChange}
          />
          <Input
            type="email"
            id="email"
            label="Email"
            name="email"
            required
            placeholder="Email"
            value={formDetails.email}
            onChange={handleFormChange}
          />
          <Textarea
            name="address"
            label="Address"
            placeholder="Enter your detailed address here..."
            id="address"
            cols={30}
            rows={5}
            minLength={10}
            maxLength={100}
            required
            value={formDetails.address}
            onChange={handleFormChange}
          />
        </Flex>
      </form>
    </Section>
  );
};

export default EnterYourDetails;
