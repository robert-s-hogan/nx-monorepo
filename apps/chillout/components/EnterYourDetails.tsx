import React, { useEffect, useState } from 'react';
import { Box } from 'simple-effing-primitive-layout';
import {
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Text,
  Textarea,
  Section,
} from '@with-nx/react-ui';

interface MyCartProps {
  onValidationStatusChange?: (isValid: boolean) => void;
  isFormComplete?: boolean;
}

const EnterYourDetails = ({
  onValidationStatusChange,
  isFormComplete,
}: MyCartProps) => {
  const [formValid, setFormValid] = useState(false);

  const [shippingDetailsAreCorrect, setShippingDetailsAreCorrect] =
    useState(false);

  const [shipping, _shipping] = useState<{
    country?: string;
    name?: string;
    surname?: string;
    company?: string;
    address?: string;
    zip?: string;
    state?: string;
    city?: string;
  }>({
    country: '',
  });

  const validateForm = () => {
    const requiredBillingFields = [
      'name',
      'surname',
      'address',
      'zip',
      'state',
      'city',
    ];
    const requiredShippingFields = [
      'name',
      'surname',
      'address',
      'zip',
      'state',
      // "city",
    ];

    const billingValid = requiredBillingFields.every(
      (field) => !!billing[field]
    );
    const shippingValid = requiredShippingFields.every(
      (field) => !!shipping[field]
    );

    const formIsValid = billingValid && shippingValid;
    setFormValid(formIsValid);
    onValidationStatusChange(formIsValid);
  };

  const [billing, _billing] = useState<{
    country: string;
    name: string;
    surname: string;
    company: string;
    address: string;
    zip: string;
    state: string;
    city: string;
  }>({
    country: 'United States',
    name: '',
    surname: '',
    company: '',
    address: '',
    zip: '',
    state: 'Alabama',
    city: 'ABBEVILLE',
  });

  //country data and functions
  // const countryOptions = AllCountries.map((country) => [
  //   country.code,
  //   country.name,
  // ]);
  // const [selectedCountry, setSelectedCountry] = useState(billing.country);
  // const handleCountryChange = (newCountry, event) => {
  //   if (!newCountry) return;
  //   const countryName = AllCountries.find((c) => c.code === newCountry)?.name;
  //   const newBilling = { ...billing, country: countryName };
  //   console.log('New Billing: ', newBilling);
  //   setSelectedCountry(newCountry);
  //   _billing(newBilling);
  // };

  //state data and functions
  // const [selectedState, setSelectedState] = useState('');
  // const [states, setStates] = useState([]);
  // const getStates = (countryCode) => {
  //   const countryName = AllCountries.find((c) => c.code === countryCode)?.name;
  //   if (countryName !== 'United States') return [];
  //   const countryStates = AllStatesAndCities;
  //   return Object.keys(countryStates).map((state) => ({
  //     value: state,
  //     label: state,
  //   }));
  // };
  // const handleStateChange = (newState, event) => {
  //   if (!newState) return;
  //   const newBilling = { ...billing, state: newState };
  //   console.log('New Billing: ', newBilling);
  //   setSelectedState(newState);
  //   _billing(newBilling);
  // };
  // useEffect(() => {
  //   if (selectedState) {
  //     const stateCities = getCities(selectedState);
  //     // console.log(`Cities for ${selectedState}: `, stateCities);
  //     setCities(stateCities);
  //   }
  // }, [selectedState]);

  // Helper function to get cities based on the selected state
  // const [cities, setCities] = useState([]);
  // const getCities = (state) => {
  //   if (!state) return [];
  //   const countryCities = AllStatesAndCities;
  //   const stateCities = countryCities[state] || [];
  //   _billing({ ...billing, city: stateCities[0] });
  //   return stateCities.map((city) => ({
  //     value: city,
  //     label: city,
  //   }));
  // };

  // Effect to set states and cities when the country changes
  // useEffect(() => {
  //   if (billing.country) {
  //     const countryCode = AllCountries.find(
  //       (c) => c.name === billing.country
  //     )?.code;
  //     const countryStates = getStates(countryCode);
  //     setStates(countryStates);
  //     const firstState = Object.keys(AllStatesAndCities)[0];
  //     _billing({ ...billing, state: firstState });
  //     const firstCity = AllStatesAndCities[firstState][0];
  //     _billing({ ...billing, city: firstCity });
  //     setSelectedState(firstState);
  //   }
  // }, [billing.country]);

  // Effect to set cities when the state changes
  // useEffect(() => {
  //   const stateCities = getCities(selectedState);
  //   setCities(stateCities);
  // }, [selectedState, billing.country]);

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
      <Flex className="flex-col gap-x-10 py-8 justify-center space-y-2">
        <Input
          type="text"
          id="name"
          label="Name"
          name="name"
          required
          placeholder="Name"
        />
        <Input
          type="email"
          id="email"
          label="Email"
          name="email"
          required
          placeholder="Email"
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
        ></Textarea>
      </Flex>
    </Section>
  );
};

export default EnterYourDetails;
