import axios from 'axios';
import { useState } from 'react';
import { PostData } from '../../types';

export function useSinglePlanet() {
  const [planetData, setPlanetData] = useState<Array<PostData>>([]);

  const getPlanet = async (data) => {
    try {
      data.forEach((planet) => {
        const res = await axios.get(planet.homeworld);
        console.log(res);
        // const resData = res.data as Array<PostData>;

        console.log(planet.homeworld);
      });

      // const resData = res.data as Array<PostData>;

      // console.log(resData.results);
      // setData(resData.results);

      // setPlanetData(planets);
    } catch (err) {
      console.log(err);
    }
  };

  return [planetData, getPlanet];
}
