import axios from 'axios';
import { useState } from 'react';
import { FetchState, PostData } from '../../types';

export function useInitialData() {
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);

  const [initialData, setInitialData] = useState<Array<PostData>>([]);

  const getInitialData = async () => {
    try {
      setFetchState(FetchState.LOADING);

      let nextUrl = 'https://swapi.dev/api/people/?page=1';

      const res = await axios.get(nextUrl);
      // console.log(`${results.length} results`);
      // console.log(`${next} next`);
      // console.log(`${previous} previous`);
      // console.log(`${currentPage} currentPage`);

      // const data = res.data as Array<PostData>;

      // firstThree = data.slice(0, 3);
      setInitialData(res.data.results);

      // const promise = Promise.allSettled([
      //   await axios.get('https://swapi.dev/api/people/'),
      // ]);

      // const [starWarsPeople] = await promise;

      // const peopleData = starWarsPeople.value.data.results;

      setFetchState(FetchState.SUCCESS);
    } catch (err) {
      setFetchState(FetchState.ERROR);
      console.log(err);
    }
  };

  return [initialData, fetchState, getInitialData];
}
