'use client';
import React, { useState } from 'react';
import { Button, Flex, Heading, Input, List } from '@with-nx/generic-ui';

import ConquestLayout from '../../components/ConquestLayout';
import ConquestSection from '../../components/ConquestSection';

const AdminMapsPage: React.FC = () => {
  // const {
  //   documents: maps,
  //   loading,
  //   error,
  // } = useFirestoreCollection('formFields');
  const [formData, setFormData] = useState({
    shape: '',
    terrain_type: '',
    starting_quadrant_of_opposition: '',
    generated: false,
    generation_algorithm: '',
  });

  const handleChange = (name: string, value: string | boolean) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission logic
    console.log('Form data submitted:', formData);
    // Implement your Firestore update logic here
  };

  // if (loading) return <div>Loading maps...</div>;
  // if (error) return <div>Error loading maps: {error.message}</div>;

  // const mapItems = maps.map((map: any) => ({
  //   id: map.id,
  //   text: `Shape: ${map.shape}, Terrain: ${map.terrain_type}`,
  //   href: `#${map.id}`, // Optional: create a link to the map
  // }));

  return (
    <ConquestLayout title="Maps | Admin Dashboard">
      <ConquestSection className="space-y-6">
        <Heading level={1} text="Maps Admin Page" />
        <Flex className="flex-grow w-full">
          <div className="w-1/2 flex flex-col space-y-4">
            <Heading level={2} text="Maps Form" />
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                id="shape"
                label="Shape"
                value={formData.shape}
                onChange={(value: string) => handleChange('shape', value)}
                placeholder="Enter the map's shape"
              />
              <Input
                id="terrain_type"
                label="Terrain"
                value={formData.terrain_type}
                onChange={(value: string) =>
                  handleChange('terrain_type', value)
                }
                placeholder="Specify the terrain type"
              />
              <Input
                id="generation_algorithm"
                label="Generation Algorithm"
                value={formData.generation_algorithm}
                onChange={(value: string) =>
                  handleChange('generation_algorithm', value)
                }
                placeholder="Algorithm used for generation"
              />
              <Input
                id="starting_quadrant_of_opposition"
                label="Starting Quadrant of Opposition"
                value={formData.starting_quadrant_of_opposition}
                onChange={(value: string) =>
                  handleChange('starting_quadrant_of_opposition', value)
                }
                placeholder="Position of opposition"
              />
              <Button type="submit" text="Submit" theme="primary" />
            </form>
          </div>
          <div className="w-1/2 flex flex-col">
            <Heading level={2} text="Maps Review" />
            {/* {maps.length > 0 ? (
              <List items={mapItems} />
            ) : (
              <p>No maps found.</p>
            )} */}
          </div>
        </Flex>
      </ConquestSection>
    </ConquestLayout>
  );
};

export default AdminMapsPage;
