import React, { useState, useEffect } from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Loading from '../components/Loading';
import SwapiCard from '../components/SwapiCard';
import { useSWRApi } from '../api/useSWRApi';
import { Person } from '../types/api/types';
import Pagination from '../components/Pagination';
import { Skeleton } from '@with-nx/react-ui';
import SearchForm from '../components/SearchForm';
import CharacterList from '../components/CharacterList';

export default function Home() {
  const [character, setCharacter] = useState('');
  const [searchResults, setSearchResults] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchResults(true);
  };

  return (
    <Layout className="px-2">
      <Hero />
      <div className="flex justify-center max-w-7xl xl:max-w-7xl container mx-auto mt-8 px-2">
        <SearchForm
          character={character}
          setCharacter={setCharacter}
          handleFormSubmit={handleFormSubmit}
        />
      </div>
      {searchResults && (
        <p className="text-center text-white my-8 px-2">
          <span className="letter-box font-light text-center bg-red search-results mr-2 text-lg">
            {searchResults}
          </span>
        </p>
      )}
      <div className="max-w-7xl lg:max-w-6xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto my-4 px-2">
        <CharacterList />
      </div>
    </Layout>
  );
}
