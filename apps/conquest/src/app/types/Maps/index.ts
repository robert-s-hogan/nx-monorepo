export interface Map {
  id: string; // Firestore document ID
  shape: string;
  terrain_type: string;
  starting_quadrant_of_opposition: boolean;
  generated: boolean;
  generation_algorithm?: string; // Optional since it might not be present for all maps
}
