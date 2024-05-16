import React, { useState } from 'react';
import { Button, Flex, IconButton } from '@with-nx/generic-ui';
import Image from 'next/image';
import { TbArrowBack } from 'react-icons/tb';
import { Grid } from '@with-nx/react-ui';

import { CreatureCard } from '../../components/projects/creature-generator/CreatureCard';
import DevblogLayout from '../../components/DevBlogLayout';
import DevBlogSection from '../../components/DevBlogSection';
import RandomLoadingMessage from '../../components/projects/creature-generator/CreatureGeneratorRandomLoadingMessage';
import {
  fetchCreatureData,
  loadImage,
} from '../../components/projects/creature-generator/creature-generator-utils';
import { fieldConfigs } from '../../components/projects/creature-generator/creature-generator-data';

export default function CreatureGenerator() {
  const [creature, setCreature] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState('');

  const [imageLoading, setImageLoading] = useState(false);
  const [formValues, setFormValues] = useState(
    fieldConfigs.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
  );
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    console.log('Form values before submitting:', formValues);
    try {
      const creatureData = await fetchCreatureData(formValues);
      console.log(
        'Final JSON to send or process:',
        JSON.stringify(creatureData)
      );

      setCreature(creatureData.result);
    } catch (error) {
      console.error('Error fetching creature data:', error);
      alert('Failed to fetch creature data');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    console.log('Resetting state and clearing cache...');

    // Resetting all relevant states
    setCreature(null);
    setImage('');
    setFormValues(
      fieldConfigs.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
    );
    setErrors({});

    // Clear browser or session storage if used (you'll need to adjust this part based on your implementation)
    if (typeof window !== 'undefined') {
      localStorage.removeItem('creatureForm'); // Example, replace 'creatureForm' with your actual storage key
      sessionStorage.removeItem('creatureForm');
    }
  };

  const handleLoadImage = async (imagePrompt) => {
    setImageLoading(true);
    try {
      const imageUrl = await loadImage(imagePrompt);
      setImage(imageUrl);
    } catch (error) {
      console.error('Error loading image:', error);
    } finally {
      setImageLoading(false);
    }
  };

  return (
    <DevblogLayout>
      <DevBlogSection className="space-y-4">
        <h1>Create DND Monster</h1>
        {!creature && !isLoading && (
          <form
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit(event);
            }}
          >
            {fieldConfigs.map(({ name, label, type, options }) => (
              <div key={name} className="flex flex-col">
                <label htmlFor={name}>{label}</label>
                {type === 'select' ? (
                  <select
                    name={name}
                    value={formValues[name]}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Select {label}</option>
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    name={name}
                    value={formValues[name]}
                    onChange={handleChange}
                    className="input-field"
                  />
                )}
                {errors[name] && (
                  <div className="error-message">{errors[name]}</div>
                )}
              </div>
            ))}
            <Button
              theme="primary"
              type="submit"
              className="col-span-3"
              text="Generate Creature"
            />
          </form>
        )}

        {isLoading && <RandomLoadingMessage />}
        {!isLoading && creature && (
          <>
            <IconButton
              theme="transparent"
              icon={<TbArrowBack />}
              label="Back"
              onClick={handleBack}
            />
            <Grid className="grid-cols-1 gap-6 max-w-lg justify-center items-center bg-white border p-1">
              <div>
                <Flex className="flex-col justify-center items-center">
                  {image ? (
                    <Image
                      src={image}
                      alt="Creature"
                      className="transform shadow-lg"
                      width={1024}
                      height={1024}
                    />
                  ) : (
                    <div className="w-full h-64 bg-gray-200 shadow-lg flex flex-col justify-center">
                      <Button
                        theme="primary"
                        text="Generate Image"
                        onClick={() => handleLoadImage(creature.imagePrompt)}
                        disabled={imageLoading}
                      />
                    </div>
                  )}
                </Flex>
                <CreatureCard creature={creature} />
              </div>
            </Grid>
          </>
        )}
      </DevBlogSection>
    </DevblogLayout>
  );
}
