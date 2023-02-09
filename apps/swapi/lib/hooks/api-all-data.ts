import axios from 'axios';
import { useState } from 'react';
import { PostData } from '../../pages/types';

export function useGetAllData() {
  const [allData, setAllData] = useState<Array<PostData>>([]);
  const getAllData = async () => {
    try {
      // let urls = [];
      let nextUrl = 'https://swapi.dev/api/people/';

      let people = [] as Array<PostData>;

      while (nextUrl) {
        const res = await axios.get(nextUrl);
        const resData = res.data as Array<PostData>;
        const { next, results } = await resData;

        nextUrl = next;
        people = [...people, ...results];
      }
      setAllData(people);

      // let characterResponseJson = await characterResponse.data.results;
      // let films = await Promise.all(
      //   characterResponseJson.films.map(async (filmUrl) => {
      //     let filmResponse = await axios(filmUrl);
      //     return filmResponse.data;
      //   })
      // );
      // console.log(films);
    } catch (error) {
      console.log(error);
    }
  };
  return [allData, getAllData];
}
