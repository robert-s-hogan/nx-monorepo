'use client';

import React, { useEffect, useState, useRef, Suspense } from 'react';
import { SWRConfig, mutate } from 'swr';
import axios from 'axios';
import useSWAPIFetch from '../../hooks/useSWAPIFetch';
import { StarWarsCharacter } from '../../types';
import Header from '../../components/SwapiCardsHeader';
import Hero from '../../components/SwapiCardsHero';
import Loading from '../../components/SwapiCardsLoading';
import SwapiCardsLoadingCard from '../../components/SwapiCardsLoadingCard';
const SwapiCardsCard = React.lazy(
  () => import('../../components/SwapiCardsCard')
);

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

function App() {
  const [character, setCharacter] = useState('');
  const [searchResults, setSearchResults] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const prefetchedUrls = useRef(new Set());

  const {
    data: characters,
    loading,
    error,
    nextPage,
    previousPage,
    fetchPage,
  } = useSWAPIFetch<StarWarsCharacter>('https://swapi.dev/api/people/');

  function getSearchData(event: React.FormEvent) {
    event.preventDefault();
    if (character) {
      const searchUrl = `https://swapi.dev/api/people/?search=${character}`;
      fetchPage(searchUrl);
      setSearchResults(true);
    }
  }

  const handlePageChange = (url: string | null) => {
    if (url) {
      fetchPage(url);
      setSearchResults(false);
      // Prefetch the next page data
      prefetchNextPage(url);
    }
  };

  const prefetchNextPage = async (url: string) => {
    const data = await fetcher(url);
    if (!data) {
      console.log(`Prefetching data for ${url}`);
      mutate(url, fetcher(url), { populateCache: true }).then(() => {
        console.log(`Data for ${url} prefetched successfully.`);
      });
    } else {
      console.log(`Data for ${url} already in cache.`);
    }
  };

  const prefetchData = (url: string) => {
    if (!prefetchedUrls.current.has(url)) {
      console.log(`Prefetching data for ${url}`);
      mutate(url, fetcher(url), { populateCache: true }).then(() => {
        console.log(`Data for ${url} prefetched successfully.`);
        prefetchedUrls.current.add(url);
      });
    } else {
      console.log(`Already prefetched ${url}, skipping.`);
    }
  };

  // Clear prefetch cache on certain conditions, e.g., when user performs a new search
  useEffect(() => {
    prefetchedUrls.current.clear();
  }, [character]);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setShowLoading(true), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowLoading(false);
    }
  }, [loading]);

  if (error) return <p>Oops! Something went wrong.</p>;

  return (
    <SWRConfig
      value={{
        fetcher,
        errorRetryInterval: 5000,
        errorRetryCount: 3,
        dedupingInterval: 600000, // Cache deduping interval in milliseconds
        focusThrottleInterval: 5000,
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
        shouldRetryOnError: true,
      }}
    >
      <div className="px-2">
        <Hero />
        <Header />
        <div className="flex justify-center max-w-4xl xl:max-w-7xl container mx-auto mt-8">
          <form
            className="w-full flex space-between space-x-8"
            onSubmit={getSearchData}
          >
            <label htmlFor="character" className="w-full">
              <input
                id="character"
                className="w-full"
                value={character}
                placeholder="Search Star Wars Characters"
                onChange={(e) => setCharacter(e.target.value)}
              />
            </label>
            <button
              className="letter-box uppercase"
              type="submit"
              disabled={!character}
            >
              Search
            </button>
          </form>
        </div>
        {searchResults && (
          <p className="text-center text-white my-8">
            {characters?.length} results found
          </p>
        )}
        <div className="max-w-4xl lg:max-w-6xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto my-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 w-full">
            {loading
              ? Array.from({ length: 10 }).map((_, index) => (
                  <SwapiCardsLoadingCard key={index} />
                ))
              : characters?.map((char: StarWarsCharacter) => (
                  <SwapiCardsCard
                    key={char.name}
                    name={char.name}
                    mass={char.mass}
                    height={char.height}
                    hair_color={char.hair_color}
                    skin_color={char.skin_color}
                    eye_color={char.eye_color}
                    birth_year={char.birth_year}
                    gender={char.gender}
                    homeworld={char.homeworld}
                  />
                ))}
          </div>
          <div className="mt-4 flex justify-between">
            <button
              className={`letter-box bg-orange uppercase ${
                !previousPage ? 'disabled' : ''
              }`}
              onClick={() => handlePageChange(previousPage)}
            >
              Previous
            </button>
            <button
              className={`letter-box bg-orange uppercase ${
                !nextPage ? 'disabled' : ''
              }`}
              onClick={() => handlePageChange(nextPage)}
              onMouseEnter={() => nextPage && prefetchData(nextPage)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </SWRConfig>
  );
}

export default App;
