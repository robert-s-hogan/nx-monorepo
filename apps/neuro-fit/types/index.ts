export interface Exercise {
  id: number;
  name: string;
  youtube_video_id: string;
  notes: string;
  created_at: string;
}

export interface ExerciseInput {
  name: string;
  youtube_video_id: string;
  notes?: string;
}

export type WeightUnit = 'lb' | 'kg';

export interface PlaylistItem {
  id: number;
  playlist_id: number;
  exercise_id: number;
  position: number;
  sets: number | null;
  weight: number | null;
  weight_unit: WeightUnit | null;
  duration_seconds: number | null;
  created_at: string;
  // Joined in from exercises for display — not a real column on
  // playlist_items itself.
  exercise: Exercise;
}

export interface PlaylistItemInput {
  exercise_id: number;
  position: number;
  sets?: number | null;
  weight?: number | null;
  weight_unit?: WeightUnit | null;
  duration_seconds?: number | null;
}

export interface Playlist {
  id: number;
  name: string;
  description: string;
  created_at: string;
}

export interface PlaylistInput {
  name: string;
  description?: string;
}

export interface PlaylistWithItems extends Playlist {
  items: PlaylistItem[];
}
