import axios from 'axios';
import { useState } from 'react';
import { FetchState, PostData } from '../../types';

export function useGetAllPeople() {
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [allPeopleData, setAllPeopleData] = useState<Array<PostData>>([]);

  const getAllPeople = async (data) => {
    try {
      setFetchState(FetchState.LOADING);
      let nextPage = 'https://swapi.dev/api/people/';
      let people = [];

      while (nextPage) {
        const res = await axios.get(nextPage);
        const resData = res.data as Array<PostData>;
        const { next, results } = await resData;

        nextPage = next;
        people = [...people, ...results];
      }

      setAllPeopleData(people);

      setFetchState(FetchState.SUCCESS);
    } catch (err) {
      setFetchState(FetchState.ERROR);
    }
  };

  return [allPeopleData, fetchState, getAllPeople];
}
