// components/SwapiSearch.tsx
import React, { useEffect, useState } from 'react';
import { useSWRApi } from '../api/useSWRApi';

import SwapiCard from './SwapiCard';
import SearchFilter from './SearchFilter';
import ReusableSection from './ReusableSection';

const SwapiSearch: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const { data, isLoading, isError } = useSWRApi<any>(
    activeCategory || '',
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

  return (
    <ReusableSection className="space-y-8">
      <form onSubmit={handleSearch}>
        <div className="w-full flex space-x-4">
          <input
            type="text"
            value={searchText}
            className="w-full"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search..."
          />
          <button className="rotate-1 uppercase text-sm" type="submit">
            Search
          </button>
        </div>
      </form>

      <SearchFilter
        categories={categories}
        onCategoryChange={setSelectedCategories}
      />

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading data</p>}

      {data &&
        data?.results?.map((result: any, index: number) => (
          <SwapiCard key={index} data={result} />
        ))}
    </ReusableSection>
  );
};

export default SwapiSearch;
