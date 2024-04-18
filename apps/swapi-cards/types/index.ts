export interface PaginatedApiResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface PaginationResponse<T> {
  data: T; // 'T' is already expected to be an array or whatever structure you're fetching.
  loading: boolean;
  error: string;
  nextPage: string | null;
  previousPage: string | null;
  fetchPage: (url: string) => void;
}

export interface StarWarsCharacter {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

// Example of extending for a specific type of data
export type StarWarsPeopleResponse = PaginatedApiResponse<StarWarsCharacter>;
