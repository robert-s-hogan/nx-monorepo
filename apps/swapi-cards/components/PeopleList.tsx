import React from 'react';
import useSWAPIFetch from '../hooks/useSWAPIFetch';
import { StarWarsCharacter, StarWarsPeopleResponse } from '../types';

const PeopleList: React.FC = () => {
  const { data, loading, error, nextPage, previousPage, fetchPage } =
    useSWAPIFetch<StarWarsCharacter[]>('https://swapi.dev/api/people/');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {data &&
        data.map((person) => (
          <div key={person.name}>
            <p>{person.name}</p>
          </div>
        ))}
      <div>
        {previousPage && (
          <button onClick={() => fetchPage(previousPage)}>Previous</button>
        )}
        {nextPage && <button onClick={() => fetchPage(nextPage)}>Next</button>}
      </div>
    </div>
  );
};

export default PeopleList;
