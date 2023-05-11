// components/SwapiSearch.tsx
import React, { useEffect, useState } from 'react';
import { useSWRApi } from '../api/useSWRApi';
import { Grid, Section } from '@with-nx/react-ui';

import SwapiCard from './SwapiCard';
import SearchFilter from './SearchFilter';
import { findMatchingUrl } from '../utils/findMatchingUrl';

const SwapiSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const { data, isLoading, isError } = useSWRApi<any>(
    activeCategory || null,
    searchText
  );
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedCategories.length > 0) {
      setActiveCategory(selectedCategories[0]);
    }
  };

  const categories = [
    'planets',
    'species',
    'vehicles',
    'starships',
    'films',
    'people',
  ];

  // useEffect(() => {
  //   if (data?.results) {
  //     findMatchingUrl(data.results);
  //     console.log(`matching urls: ${JSON.stringify(data.results)}`);
  //   }
  // }, [data]);

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
        onCategoryChange={setSelectedCategories}
      />

      <Section className="space-y-8">
        <Grid className="grid-cols-1 lg:grid-cols-3">
          {data &&
            data?.results?.map((result: any, index: number) => (
              <SwapiCard
                key={index}
                data={result}
                endpoint={activeCategory || ''}
              />
            ))}
        </Grid>
      </Section>
    </div>
  );
};

export default SwapiSearch;
