export interface Character {
  name: string;
  role: string;
  icon: string;
  avatar: string;
  level: number;
  currentHitpoints: number;
  totalHitpoints: number;
  stats: {
    ac: {
      base: number;
      modifier: number;
    };
    initiative: {
      base: number;
      modifier: number;
    };
    speed: {
      base: number;
      modifier: number;
    };
    str: {
      base: number;
      modifier: number;
    };
    dex: {
      base: number;
      modifier: number;
    };
    int: {
      base: number;
      modifier: number;
    };
    con: {
      base: number;
      modifier: number;
    };
    wis: {
      base: number;
      modifier: number;
    };
    prof: {
      base: number;
      modifier: number;
    };
    saves: Saves;
  };
  skills: Skills[];
}

export interface Saves {
  str: {
    base: number;
    modifier: number;
  };
  dex: {
    base: number;
    modifier: number;
  };
  int: {
    base: number;
    modifier: number;
  };
  con: {
    base: number;
    modifier: number;
  };
  wis: {
    base: number;
    modifier: number;
  };
}

export interface Skills {
  name: string;
  type: string;
  bonus: boolean;
  prof: boolean;
  modifier: number;
  advantage: boolean;
  disadvantage: boolean;
}
