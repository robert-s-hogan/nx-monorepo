// api/endpoints.ts
export const API_BASE_URL = 'https://swapi.dev/api/';

export const endpoints = {
  planets: 'planets',
  starships: 'starships',
  species: 'species',
  vehicles: 'vehicles',
  people: 'people',
  films: 'films',
  peopleWithPage: (page: number) => `people/?page=${page}`,
};

export type Endpoint =
  | keyof typeof endpoints
  | ((page: number) => string)
  | string;
