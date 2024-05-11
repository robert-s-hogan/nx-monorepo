import { useState } from 'react';
import * as Yup from 'yup';

// Validation schema using Yup
const formSchema = Yup.object().shape({
  numberOfPlayers: Yup.string().required('Number of players is required'),
  playerLevel: Yup.string().required('Player level is required'),
  challengeRating: Yup.string().required('Challenge rating is required'),
  creatureType: Yup.string().required('Creature type is required'),
  alignment: Yup.string().required('Alignment is required'),
  environment: Yup.string().required('Environment is required'),
  size: Yup.string().required('Size is required'),
  specialTrait: Yup.string().required('Special trait is required'),
  language: Yup.string().required('Language is required'),
});

function useForm(initialValues) {
  const [formState, setFormState] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const validate = async (values) => {
    try {
      await formSchema.validate(values, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err) {
      const newErrors = err.inner.reduce(
        (acc, error) => ({
          ...acc,
          [error.path]: error.message,
        }),
        {}
      );
      setErrors(newErrors);
      return false;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (callback) => {
    if (await validate(formState)) {
      callback(formState);
    }
  };

  return {
    formState,
    errors,
    handleChange,
    handleSubmit,
  };
}

export default useForm;
