import axios from 'axios';
import { useState } from 'react';
import { FetchState, PostData } from '../../types';

export function useSearchPosts(character) {
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [data, setData] = useState<Array<PostData>>([]);
  const [searchResults, setSearchResults] = useState(false);
  const searchPosts = async () => {
    try {
      setFetchState(FetchState.LOADING);
      const res = await axios.get(
        `https://swapi.dev/api/people/?search=${character}`
      );
      const resData = res.data as Array<PostData>;

      setSearchResults(true);
      setData(resData.results);
      setFetchState(FetchState.SUCCESS);
    } catch (err) {
      setFetchState(FetchState.ERROR);
    }
  };

  return [data, searchResults, fetchState, searchPosts];
}
