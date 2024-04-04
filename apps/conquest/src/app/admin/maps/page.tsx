// pages/admin/maps/index.tsx
'use client';
import React from 'react';
import { useFirestoreCollection } from '../../../../../../libs/firebase/src/lib/useFirestoreCollections'; // Adjust the import path as necessary
import { Map } from '../../types'; // Adjust the import path as necessary

const AdminMapsPage: React.FC = () => {
  // Use your fetching hook to check if form fields configuration exists
  // const { documents: formFields, loading } = useFirestoreCollection(
  //   'formFields/mapsFormFields'
  // );
  const {
    documents: maps,
    loading,
    error,
  } = useFirestoreCollection<Map>('formFields'); // Adjust the collection name

  if (loading) return <div>Loading maps...</div>;
  if (error) return <div>Error loading maps: {error.message}</div>;

  if (loading) return <div>Loading...</div>;

  return (
    <div className="w-full space-y-8">
      <h1 className="text-center">Maps Admin Page</h1>
      <div className="flex flex-grow w-full">
        <div className="w-1/2 flex flex-col">Maps Form</div>

        <div className="w-1/2 flex flex-col">
          <h1>Maps Review</h1>
          {maps.length > 0 ? (
            <ul>
              {maps.map((map) => (
                <li key={map.id}>
                  <p>Shape: {map.shape}</p>
                  <p>Terrain Type: {map.terrain_type}</p>
                  <p>
                    Starting Quadrant of Opposition:{' '}
                    {map.starting_quadrant_of_opposition ? 'Yes' : 'No'}
                  </p>
                  <p>Generated: {map.generated ? 'Yes' : 'No'}</p>
                  {map.generation_algorithm && (
                    <p>Generation Algorithm: {map.generation_algorithm}</p>
                  )}
                  {/* Include other fields as necessary */}
                </li>
              ))}
            </ul>
          ) : (
            <p>No maps found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminMapsPage;
