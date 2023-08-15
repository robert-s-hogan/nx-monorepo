export interface Relationship {
  friends: string[];
  enemies: string[];
  family: string[];
}

export interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  species: string;
  affiliation: string[];
  occupation: string;
  appearances: string[];
  force_sensitive: boolean;
  alias: string[];
  weapons: string[];
  vehicles: string[];
  droids: string[];
  force_ability: string;
  quote: string;
  skills: string[];
  bounty: string | null;
  known_associates: string[];
  faction: string;
  status: string;
  films: string[];
  species_traits: string[];
  owned_starships: string[];
  owned_vehicles: string[];
  visited_planets: string[];
  relationships: Relationship;
  achievements: string[];
  trivia: string[];
  main_story_arc: string;
}
