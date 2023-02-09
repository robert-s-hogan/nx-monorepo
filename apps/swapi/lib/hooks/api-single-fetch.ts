import axios from 'axios';
import { useState } from 'react';
import { PostData } from '../../types';

export function useSingleFetch() {
  const [singleFetchData, setSingleFetchData] = useState<Array<PostData>>([]);

  const getSingleFetchData = async (url) => {
    try {
      const res = await axios.get(url);
      const data = res.data as Array<PostData>;

      setSingleFetchData(data);
    } catch (err) {
      console.log(err);
    }
  };

  return [singleFetchData, getSingleFetchData];
}
