// Client-safe custom-tag types. No DB access here — see lib/server/tags.ts.

export type CustomTag = {
  id: number;
  name: string;
  icon: string;
  color: string;
};
