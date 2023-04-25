import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Loading from '../components/Loading';
import SwapiCard from '../components/SwapiCard';
import { useSWRApi } from '../api/useSWRApi';
import { Person } from '../types/api/types';
import Pagination from '../components/Pagination';
import { Skeleton } from '@with-nx/react-ui';

export default function Home() {
  const [character, setCharacter] = useState('');
  const [searchResults, setSearchResults] = useState(false);
  const [nextPage, setNextPage] = useState(1);
  const [previousPage, setPreviousPage] = useState(null);
  const [initialLoad, setInitialLoad] = useState(true);

  const { data, isLoading, isError } = useSWRApi<Person>(
    `people/?page=${nextPage}`,
    character
  );

  useEffect(() => {
    if (data) {
      setInitialLoad(false);
    }
  }, [data]);

  const page = data
    ? data.next
      ? parseInt(data.next.split('=')[1]) - 1
      : parseInt(data.previous.split('=')[1]) + 1
    : 1;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchResults(true);
  };

  const changePage = (newPage) => {
    setNextPage(newPage);
    if (newPage > 1) {
      setPreviousPage(newPage - 1);
    }
    setSearchResults(false);
    setCharacter('');
  };

  if (isLoading && initialLoad) return <Loading />;
  if (isError) return <div>Error occurred while fetching data</div>;

  console.log(`data`, data);

  return (
    <Layout className="px-2">
      <Hero />
      <div className="flex justify-center max-w-7xl xl:max-w-7xl container mx-auto mt-8 px-2">
        <form
          className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full md:mx-2"
          onSubmit={handleFormSubmit}
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
          <button className="rotate-1" type="submit" disabled={!character}>
            Search
          </button>
        </form>
      </div>
      {searchResults && (
        <p className="text-center text-white my-8 px-2">
          <span className="letter-box font-light text-center bg-red search-results mr-2 text-lg">
            {searchResults}
          </span>
        </p>
      )}
      <div className="max-w-7xl lg:max-w-6xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto my-4 px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 w-full">
          {data && !isLoading ? (
            <>
              {data.results.map((char) => (
                <SwapiCard
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
                  loading={isLoading}
                />
              ))}
            </>
          ) : (
            <>
              {Array.from(Array(10).keys()).map((i) => (
                <Skeleton key={i} />
              ))}
            </>
          )}
        </div>

        <Pagination
          page={page}
          nextPage={data?.next || null}
          previousPage={data?.previous || null}
          count={data?.count || 0}
          changePage={changePage}
          isLoading={isLoading}
        />
      </div>

      <Header />
    </Layout>
  );
}
