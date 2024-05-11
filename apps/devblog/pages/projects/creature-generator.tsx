import React, { useState } from 'react';
import { Button, IconButton } from '@with-nx/generic-ui';
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

import {
  species,
  dndSizes,
  alignments,
  environments,
  specialTraits,
  languages,
} from '@with-nx/constants';

const toSelectOptions = (items) =>
  items.map((item) => ({ label: item, value: item }));

const fieldConfigs = [
  { name: 'numberOfPlayers', label: 'Number of Players', type: 'text' },
  { name: 'playerLevel', label: 'Player Level', type: 'text' },
  {
    name: 'challengeRating',
    label: 'Challenge Rating',
    type: 'select',
    options: toSelectOptions(Array.from({ length: 30 }, (_, i) => i + 1)),
  },
  {
    name: 'creatureType',
    label: 'Creature Type',
    type: 'select',
    options: toSelectOptions(species),
  },
  {
    name: 'alignment',
    label: 'Alignment',
    type: 'select',
    options: toSelectOptions(alignments),
  },
  {
    name: 'environment',
    label: 'Environment',
    type: 'select',
    options: toSelectOptions(environments),
  },
  {
    name: 'size',
    label: 'Size',
    type: 'select',
    options: toSelectOptions(dndSizes),
  },
  {
    name: 'specialTrait',
    label: 'Special Trait',
    type: 'select',
    options: toSelectOptions(specialTraits),
  },
  {
    name: 'language',
    label: 'Language',
    type: 'select',
    options: toSelectOptions(languages),
  },
];

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
      console.log('Received data:', creatureData);
      setCreature(creatureData.result);
    } catch (error) {
      console.error('Error fetching creature data:', error);
      alert('Failed to fetch creature data');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    setCreature(null);
    setImage('');
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
            <Grid className="grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <CreatureCard creature={creature} />
              </div>
              <div className="flex flex-col justify-center items-center">
                {image ? (
                  <Image
                    src={image}
                    alt="Creature"
                    className="rounded-md transform shadow-lg"
                    width={1024}
                    height={1024}
                  />
                ) : (
                  <Button
                    theme="primary"
                    text="Generate Image"
                    onClick={() => handleLoadImage(creature.imagePrompt)}
                    disabled={imageLoading}
                  />
                )}
              </div>
            </Grid>
          </>
        )}
      </DevBlogSection>
    </DevblogLayout>
  );
}
