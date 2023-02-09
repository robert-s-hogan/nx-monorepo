import { useState, useEffect } from 'react';
// import { useInitialData } from './lib/hooks/api-initial-data';
// import { useGetAllData } from './lib/hooks/api-all-data';
import { FetchState } from './types';
import axios from 'axios';

import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import Loading from '../components/loading/Loading';
// import SearchBar from '../components/searchBar/SearchBar';
// import Pagination from '../components/pagination/Pagination';

import Card from '../components/card/Card';

export default function Home() {
  // const [data, totalEntries, fetchState, getData] = useGetPosts();

  const [data, setData] = useState([]);
  const [character, setCharacter] = useState('');
  const [searchResults, setSearchResults] = useState(false);
  const [searchData, setSearchData] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);

  const [nextPage, setNextPage] = useState(
    'https://swapi.dev/api/people/?page=2'
  );
  const [previousPage, setPreviousPage] = useState(null);
  // const [initialData, fetchState, getInitialData] = useInitialData();

  useEffect(() => {
    // getInitialData();
    getData();
    // getAllData();
  }, []);

  async function getData() {
    try {
      setFetchState(FetchState.LOADING);

      const nextUrl = 'https://swapi.dev/api/people/?page=1';

      const res = await axios.get(nextUrl);
      setData(res.data.results);

      setFetchState(FetchState.SUCCESS);
    } catch (err) {
      setFetchState(FetchState.ERROR);
      console.log(err);
    }
  }

  async function getSearchData() {
    const res = await axios.get(
      `https://swapi.dev/api/people/?search=${character}`
    );
    const resData = (await res.data) as Array<PostData>;

    setData(resData.results);
    setSearchData(resData.results);
    setSearchResults(true);
  }

  async function getPage(url: string) {
    const res = await axios.get(url);
    const data = res.data;

    setData(data.results);
    setPreviousPage(data.previous);
    setNextPage(data.next);
    setSearchResults(false);
    setCharacter('');
  }

  return (
    <div className="px-2">
      <Hero />
      <div className="flex justify-center max-w-4xl xl:max-w-7xl container mx-auto mt-8">
        <form
          className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full md:mx-2"
          onSubmit={(e) => {
            e.preventDefault();
            getSearchData();
          }}
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
        <p className="text-center text-white my-8">
          <span className="letter-box font-light text-center bg-red search-results mr-2 text-lg">
            {searchData.length} {searchData.length > 1 ? `results` : 'result'}{' '}
            found
          </span>
        </p>
      )}

      {fetchState === FetchState.ERROR && (
        <div className="container max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto my-4">
          <p>Oops! Something went wrong. Please click the button below</p>
          <button onClick={() => getData()}>Get Star Wars Characters</button>
        </div>
      )}
      {fetchState === FetchState.LOADING && (
        <div className="container max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto my-4">
          <Loading />
        </div>
      )}
      {fetchState === FetchState.SUCCESS && (
        <div className="max-w-4xl lg:max-w-6xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto my-4">
          {searchResults && searchData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 w-full">
              {data.map((char) => (
                <Card
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
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 w-full">
              {data.map((char) => (
                <Card
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
          )}
          {/* <Pagination
            page={page}
            nextPage={nextPage}
            previousPage={previousPage}
            count={count}
            getInitialData={getInitialData}
          /> */}
          <div className="mt-4 flex justify-between">
            <button
              className={`letter-box bg-orange uppercase ${
                previousPage === null ? 'disabled' : ''
              }`}
              onClick={() => getPage(previousPage)}
            >
              Previous
            </button>
            {/* <button className="letter-box bg-orange">{currentPage}</button> */}
            <button
              type="submit"
              className={`letter-box bg-orange uppercase ${
                nextPage === null ? 'disabled' : ''
              }`}
              onClick={() => getPage(nextPage)}
            >
              Next
            </button>
          </div>
        </div>
      )}

      <Header />
    </div>
  );
}
