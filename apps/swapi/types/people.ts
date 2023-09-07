interface Person {
  id: string;
  persona: Array<string>;
  slug: string;
  name: string;
  birth_year: string;
  homeworld: string;
  species: string;
  backstory: string;
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
  bounty: null | string;
  known_associates: string[];
  factions: Array<string>;
  status: string;
  films: string[];
  species_traits: string[];
  owned_starships: string[];
  owned_vehicles: string[];
  visited_planets: string[];
  relationships: {
    friends: string[];
    enemies: string[];
    family: null | string[];
  };
  achievements: string[];
  trivia: string[];
  main_story_arc: string;
  avatar_attributes: AvatarAttributes;
}

interface AvatarAttributes {
  avatar_size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; // Example size types, add more if needed
  height: string;
  mass: string;
  hair_color: string;
  hair_style: string;
  body_shape: string;
  clothing: string;
  accessories: string[];
  age: string;
  emotions: string;
  faction_colors: string[];
  species_traits: string[];
  gender: string;
  eye_color: string;
  skin_color: string;
  dark_mode: DarkMode;
  animations: Animations;
  voice_lines: VoiceLines;
}

interface DarkMode {
  background_color: string;
  clothing: string;
  lightsaber_color?: string;
  accessories?: string[];
}

interface Animations {
  speak: string;
  rotate: string;
  custom_animation: string;
}

interface VoiceLines {
  greeting: string;
  farewell: string;
}

export type { Person };
