// api/fetcher.ts
import axios from 'axios';

export const fetcher = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};
