import axios from 'axios';
import { useState } from 'react';
import { FetchState, PostData } from '../../types';

export function useGetPosts() {
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [data, setData] = useState<Array<PostData>>([]);
  const [totalEntries, setTotalEntries] = useState(0);
  const getPosts = async () => {
    try {
      setFetchState(FetchState.LOADING);
      const res = await axios.get('https://swapi.dev/api/people/');
      const resData = res.data as Array<PostData>;

      setTotalEntries(resData.count);
      setData(resData.results);

      setFetchState(FetchState.SUCCESS);
    } catch (err) {
      setFetchState(FetchState.ERROR);
    }
  };

  return [data, totalEntries, fetchState, getPosts];
}
