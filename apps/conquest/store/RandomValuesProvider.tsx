import { createContext, useContext, useState, useEffect } from 'react';

const RandomValuesContext = createContext(null);

export const RandomValuesProvider = ({ children }) => {
  const [randomValues, setRandomValues] = useState({});

  const generateRandomValue = (arr) => {
    if (!Array.isArray(arr)) return null;
    return arr.length > 0 ? arr[Math.floor(Math.random() * arr.length)] : null;
  };

  const getRandomValues = () => {
    return randomValues;
  };

  const setRandomValue = (key, value) => {
    setRandomValues((prevValues) => ({ ...prevValues, [key]: value }));
  };

  const generateAndSetRandomValue = (key, arr) => {
    const randomValue = generateRandomValue(arr);
    setRandomValue(key, randomValue);
    return randomValue;
  };

  const resetRandomValues = () => {
    setRandomValues({});
  };

  useEffect(() => {
    setRandomValue('myRandomValue', Math.random());
  }, []);

  const value = {
    generateRandomValue,
    getRandomValues,
    setRandomValue,
    generateAndSetRandomValue,
    resetRandomValues,
  };

  return (
    <RandomValuesContext.Provider value={value}>
      {children}
    </RandomValuesContext.Provider>
  );
};

export const useRandomValues = () => {
  const context = useContext(RandomValuesContext);

  if (!context) {
    throw new Error(
      'useRandomValues must be used within a RandomValuesProvider'
    );
  }

  return context;
};
