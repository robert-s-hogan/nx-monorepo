import { Box } from 'simple-effing-primitive-layout';

// import { MobileViewSwitcher } from '@with-nx/simple-ui/organisms';
// import {
//   DesignedCheck,
//   DesignedInput,
//   DesignedSelect,
//   Text,
// } from '@with-nx/simple-ui/atoms';
// import { AllCountries, AllStatesAndCities } from '@with-nx/region';
import React, { useEffect, useState } from 'react';
import { Text } from '@with-nx/react-ui';

interface MyCartProps {
  onValidationStatusChange: (isValid: boolean) => void;
}

const EnterYourDetails = ({ onValidationStatusChange }: MyCartProps) => {
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

  useEffect(() => {
    onValidationStatusChange(formValid);
  }, [formValid, onValidationStatusChange]);

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
    <>
      <Text className="text-?font1 mb-24 block">Enter Your Details</Text>
      <Text className="text-?font1 mb-24 block">Billing Details</Text>
      <div className="lg:flex gap-x-10 pb-20 lg:pb-4 justify-center">
        <div>
          <div className="mb-8">
            <div className="flex w-8 h-8 rounded-full justify-center items-center border-2 text-blue-500 border-blue-500">
              <span className="text-2xl font-semibold">1</span>
            </div>

            <h3 className="uppercase tracking-wider text-xs font-semibold mt-2 text-gray-400">
              Delivery Info
            </h3>
          </div>
          <div className="">
            <input
              className="text-gray-600 bg-gray-50"
              type="text"
              id="name"
              name="name"
              required
              pattern="\S+.*"
              placeholder="the placeholder"
            />
            <label htmlFor="name" className="label-name">
              <span className="content-name">Name</span>
            </label>
          </div>
          <div className="">
            <input
              className="text-gray-600 bg-gray-50"
              type="email"
              id="email"
              name="email"
              required
              placeholder="the placeholder"
            />
            <label htmlFor="email" className="label-email">
              <span className="content-email">Email</span>
            </label>
          </div>
          <div>
            <textarea
              className="border-0 w-full bg-gray-100"
              name="address"
              placeholder="Enter your detailed address here..."
              id="address"
              cols={30}
              rows={5}
              minLength={10}
              maxLength={100}
              required
            ></textarea>
          </div>
        </div>
      </div>
      <>
        <Text className="!ht c:?font1 mb:24 d:block mt:24">
          Projector Shipping Details
        </Text>
        {/* <MobileViewSwitcher
          render={(mobile) => (
            <>
              <Box className="d:flex">
                <Box className="f:1">
                  {/* <DesignedSelect
                    options={cities.map((city) => [city.value, city.label])}
                    // options={countryOptions}
                    value={shipping.country}
                    change={(country) => _shipping({ ...shipping, country })}
                  /> 
                </Box>
              </Box>
              <Box
                className={`d:flex fd:${mobile ? 'column' : 'row'}`}
                left={-10}
                right={-10}
              >
                <Box className="f:1" right={10} left={10}>
                  <DesignedInput
                    value={shipping.name}
                    change={(name) => {
                      _shipping({ ...shipping, name });
                      validateForm();
                    }}
                  />
                </Box>
                <Box className="f:1" right={10} left={10}>
                  <DesignedInput
                    value={shipping.surname}
                    change={(surname) => {
                      _shipping({ ...shipping, surname });
                      validateForm();
                    }}
                  />
                </Box>
                <Box className="f:1" right={10} left={10}>
                  <DesignedInput
                    value={shipping.company}
                    change={(company) => {
                      _shipping({ ...shipping, company });
                      validateForm();
                    }}
                  />
                </Box>
              </Box>
              <Box
                className={`d:flex fd:${mobile ? 'column' : 'row'}`}
                left={-10}
                right={-10}
              >
                <Box className="f:7" right={10} left={10}>
                  <DesignedInput
                    value={shipping.address}
                    change={(address) => {
                      _shipping({ ...shipping, address });
                      validateForm();
                    }}
                  />
                </Box>
                <Box className="f:1" right={10} left={10}>
                  <DesignedInput
                    value={shipping.zip}
                    change={(zip) => {
                      _shipping({ ...shipping, zip });
                      validateForm();
                    }}
                  />
                </Box>
              </Box>
              <Box
                className={`d:flex fd:${mobile ? 'column' : 'row'}`}
                right={-10}
                left={-10}
              >
                <Box className="f:1" right={10} left={10}>
                  {shipping.country === 'United States' ? (
                    <DesignedSelect
                      options={states}
                      value={shipping.state}
                      change={(state) => {
                        _shipping({ ...shipping, state });
                        validateForm();
                      }}
                    />
                  ) : (
                    <DesignedInput
                      value={shipping.state}
                      change={(state) => {
                        _shipping({ ...shipping, state });
                        validateForm();
                      }}
                    />
                  )}
                </Box>
                <Box className="f:1" right={10} left={10}>
                  {shipping.country === 'United States' ? (
                    cities.length ? (
                      <DesignedSelect
                        options={cities}
                        value={shipping.city}
                        change={(city) => {
                          _shipping({ ...shipping, city });
                          validateForm();
                        }}
                      />
                    ) : (
                      <DesignedSelect
                        options={[['Select State First', 'Select State First']]}
                        value="Select State First"
                        change={(city) => {
                          _shipping({ ...shipping, city });
                          validateForm();
                        }}
                      />
                    )
                  ) : (
                    <DesignedInput
                      value={shipping.state}
                      change={(state) => {
                        _shipping({ ...shipping, state });
                        validateForm();
                      }}
                    />
                  )}
                </Box>
              </Box>
            </>
          )}
        /> */}
        {/* <DesignedCheck
          properties={{ top: 24 }}
          active={shippingDetailsAreCorrect}
          onClick={() =>
            setShippingDetailsAreCorrect(!shippingDetailsAreCorrect)
          }
        /> */}
      </>
    </>
  );
};

export default EnterYourDetails;
