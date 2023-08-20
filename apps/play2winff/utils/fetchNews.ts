import axios from 'axios';

export const fetchNews = async () => {
  const response = await axios.get(
    'https://site.api.espn.com/apis/site/v2/sports/football/nfl/news?limit=50'
  );
  return response.data;
};
