import axios from 'axios';
import { useState } from 'react';
import { PostData } from '../../types';

export function useGetAllPlanets() {
  const [allPlanetData, setAllPlanetData] = useState<Array<PostData>>([]);

  const getPlanets = async () => {
    try {
      let nextPage = 'https://swapi.dev/api/planets/';
      let planets = [] as Array<PostData>;

      while (nextPage) {
        const res = await axios.get(nextPage);
        const resData = res.data as Array<PostData>;
        const { next, results } = await resData;

        nextPage = next;
        planets = [...planets, ...results];
      }
      setAllPlanetData(planets);
    } catch (err) {
      consolelog(err);
    }
  };

  return [allPlanetData, getPlanets];
}
