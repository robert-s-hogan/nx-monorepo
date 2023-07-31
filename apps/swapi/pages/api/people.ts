// pages/api/people.js
import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://swapi.dev/api/people');
    const data = response.data;
    const people = data.results.slice(0, 10); // We only take the first 10 results.

    res.status(200).json(people);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
