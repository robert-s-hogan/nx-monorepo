import React, { useState } from 'react';
import useSWAPIFetch from '../hooks/useSWAPIFetch';
import { StarWarsCharacter } from '../types';

const SwapiCardsSearchBar: React.FC = () => {
  // const { data, fetchPage } = useSWAPIFetch<StarWarsCharacter[]>(
  //   'https://swapi.dev/api/people/'
  // );
  const [character, setCharacter] = useState('');

  // const handleSearch = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   const searchUrl = `https://swapi.dev/api/people/?search=${character}`;
  //   fetchPage(searchUrl);
  // };

  return (
    <div className="flex justify-center max-w-4xl container mx-auto my-8">
      {/* <form
        className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full mx-2"
        onSubmit={handleSearch}
      >
        <label htmlFor="character" className="w-full md:col-span-3">
          <input
            id="character"
            className="w-full"
            value={character}
            placeholder="Search Star Wars Characters"
            onChange={(e) => setCharacter(e.target.value)}
          />
        </label>
        <button
          className="uppercase"
          type="submit"
          disabled={!character.trim()}
        >
          Search
        </button>
      </form> */}
      {/* {data && data.length > 0 && (
        <Text className="text-white block text-center search-results" text="{`{data.length} results found`}" />
      )} */}
      {/* {data && data.length === 0 && (
        <Text className="text-white block text-center search-results" text="No results found" />
      )} */}
    </div>
  );
};

export default SwapiCardsSearchBar;
