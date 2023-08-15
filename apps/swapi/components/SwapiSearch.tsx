// components/SwapiSearch.tsx
import React, { useEffect, useState } from 'react';
import { useSWRApi } from '../api/useSWRApi';
import { Grid, Section } from '@with-nx/react-ui';

import Loading from './Loading';
import SwapiCard from './SwapiCard';
import SearchFilter from './SearchFilter';

const SwapiSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('people');

  const { data, isLoading, isError } = useSWRApi<any>(
    selectedCategory || null,
    searchText
  );

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSelectedCategory(selectedCategory);
  };

  const categories = [
    'planets',
    'species',
    'vehicles',
    'starships',
    'films',
    'people',
  ];

  return (
    <div className="space-y-8 w-full">
      <form onSubmit={handleSearch}>
        <div className="w-full flex space-x-4">
          <input
            type="text"
            value={searchText}
            className="w-full"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search..."
          />
          <button
            className="rotate-1 uppercase text-sm text-black"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>

      <SearchFilter
        categories={categories}
        onCategoryChange={setSelectedCategory}
      />

      <Section className="space-y-8 px-0 md:px-2">
        <Grid className="grid-cols-1 lg:grid-cols-3">
          {isLoading ? (
            <Loading className="lg:col-span-3" />
          ) : data ? (
            data?.results?.map((result: any, index: number) => (
              <SwapiCard
                key={index}
                data={result}
                endpoint={selectedCategory || ''}
              />
            ))
          ) : (
            <p>No results found</p>
          )}
        </Grid>
      </Section>
    </div>
  );
};

export default SwapiSearch;
