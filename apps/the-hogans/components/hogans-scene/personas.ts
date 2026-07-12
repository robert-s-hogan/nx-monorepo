// Each shape is a primitive: a circle {c:[x,y], r} or a capsule (rounded
// "pill") {a:[x1,y1], b:[x2,y2], r} — stacked/overlapping capsules build up
// a body volume instead of thin skeletal lines. `joints` are the bright
// star-accents placed on top (head, hands, feet); `flecks` are unconnected
// dim dots (the cat's calico patches). All coordinates are 0..1, normalized
// to each persona's own w/h box.
export type Shape =
  | { type: 'circle'; c: [number, number]; r: number }
  | { type: 'capsule'; a: [number, number]; b: [number, number]; r: number };

export interface Persona {
  name: string;
  w: number;
  h: number;
  sizeRatio: number;
  seed: number;
  dim: number;
  shapes: Shape[];
  joints: Array<[number, number]>;
  flecks?: Array<[number, number]>;
  bio: string;
}

// Placeholder names/bios — swap for whatever you actually want public,
// especially the kid's, before this ever ships for real.
export const personas: Persona[] = [
  {
    name: 'DAD',
    w: 271,
    h: 506,
    sizeRatio: 1,
    seed: 0.1,
    dim: 1,
    shapes: [
      { type: 'circle', c: [0.5, 0.115], r: 0.085 },
      { type: 'capsule', a: [0.3, 0.27], b: [0.7, 0.27], r: 0.075 },
      { type: 'capsule', a: [0.5, 0.24], b: [0.5, 0.58], r: 0.155 },
      { type: 'capsule', a: [0.3, 0.27], b: [0.24, 0.62], r: 0.055 },
      { type: 'capsule', a: [0.7, 0.27], b: [0.76, 0.62], r: 0.055 },
      { type: 'capsule', a: [0.4, 0.6], b: [0.36, 0.97], r: 0.07 },
      { type: 'capsule', a: [0.6, 0.6], b: [0.64, 0.97], r: 0.07 },
    ],
    joints: [
      [0.5, 0.045],
      [0.24, 0.63],
      [0.76, 0.63],
      [0.36, 0.985],
      [0.64, 0.985],
    ],
    bio: "// process: dad.exe — uptime: since day one. handles grill duty, dad-joke compilation, and emergency wifi resets.",
  },
  {
    name: 'MOM',
    w: 248,
    h: 492,
    sizeRatio: 0.96,
    seed: 0.9,
    dim: 1,
    shapes: [
      { type: 'circle', c: [0.5, 0.12], r: 0.075 },
      { type: 'capsule', a: [0.5, 0.09], b: [0.36, 0.3], r: 0.05 },
      { type: 'capsule', a: [0.5, 0.09], b: [0.64, 0.3], r: 0.05 },
      { type: 'capsule', a: [0.36, 0.29], b: [0.64, 0.29], r: 0.065 },
      { type: 'capsule', a: [0.5, 0.26], b: [0.5, 0.6], r: 0.125 },
      { type: 'capsule', a: [0.36, 0.29], b: [0.32, 0.63], r: 0.045 },
      { type: 'capsule', a: [0.64, 0.29], b: [0.68, 0.63], r: 0.045 },
      { type: 'capsule', a: [0.42, 0.62], b: [0.39, 0.98], r: 0.06 },
      { type: 'capsule', a: [0.58, 0.62], b: [0.61, 0.98], r: 0.06 },
    ],
    joints: [
      [0.5, 0.045],
      [0.32, 0.64],
      [0.68, 0.64],
      [0.39, 0.99],
      [0.61, 0.99],
    ],
    bio: "// process: mom.exe — the family's root admin. schedules, hugs, and locating missing shoes all run in O(1).",
  },
  {
    name: 'KID · 8',
    w: 207,
    h: 345,
    sizeRatio: 0.68,
    seed: 1.7,
    dim: 1,
    shapes: [
      { type: 'circle', c: [0.5, 0.2], r: 0.135 },
      { type: 'capsule', a: [0.34, 0.38], b: [0.66, 0.38], r: 0.06 },
      { type: 'capsule', a: [0.5, 0.36], b: [0.5, 0.62], r: 0.115 },
      { type: 'capsule', a: [0.34, 0.38], b: [0.28, 0.58], r: 0.045 },
      { type: 'capsule', a: [0.66, 0.38], b: [0.72, 0.58], r: 0.045 },
      { type: 'capsule', a: [0.42, 0.63], b: [0.4, 0.97], r: 0.06 },
      { type: 'capsule', a: [0.58, 0.63], b: [0.6, 0.97], r: 0.06 },
    ],
    joints: [
      [0.5, 0.06],
      [0.28, 0.59],
      [0.72, 0.59],
      [0.4, 0.99],
      [0.6, 0.99],
    ],
    bio: '// process: kid.exe — age 8, still in beta. latest build adds Lego architecture and a strong opinion on cereal.',
  },
  {
    name: 'BLACK DOG',
    w: 271,
    h: 184,
    sizeRatio: 0.5,
    seed: 2.4,
    dim: 0.55,
    shapes: [
      { type: 'capsule', a: [0.3, 0.53], b: [0.66, 0.48], r: 0.165 },
      { type: 'circle', c: [0.2, 0.44], r: 0.15 },
      { type: 'capsule', a: [0.2, 0.44], b: [0.08, 0.48], r: 0.065 },
      { type: 'capsule', a: [0.22, 0.34], b: [0.16, 0.54], r: 0.05 },
      { type: 'capsule', a: [0.34, 0.58], b: [0.32, 0.94], r: 0.05 },
      { type: 'capsule', a: [0.62, 0.56], b: [0.64, 0.94], r: 0.055 },
      { type: 'capsule', a: [0.7, 0.48], b: [0.84, 0.36], r: 0.045 },
      { type: 'capsule', a: [0.84, 0.36], b: [0.8, 0.2], r: 0.04 },
    ],
    joints: [
      [0.2, 0.28],
      [0.8, 0.19],
      [0.32, 0.95],
      [0.64, 0.95],
    ],
    bio: '// process: blackdog.exe — cockapoo, dark-coat build. barks at the mail carrier on a strict but unpublished schedule.',
  },
  {
    name: 'BROWN DOG',
    w: 271,
    h: 184,
    sizeRatio: 0.5,
    seed: 3.1,
    dim: 0.92,
    shapes: [
      { type: 'capsule', a: [0.3, 0.53], b: [0.66, 0.48], r: 0.165 },
      { type: 'circle', c: [0.2, 0.44], r: 0.15 },
      { type: 'capsule', a: [0.2, 0.44], b: [0.08, 0.48], r: 0.065 },
      { type: 'capsule', a: [0.22, 0.34], b: [0.16, 0.54], r: 0.05 },
      { type: 'capsule', a: [0.34, 0.58], b: [0.32, 0.94], r: 0.05 },
      { type: 'capsule', a: [0.62, 0.56], b: [0.64, 0.94], r: 0.055 },
      { type: 'capsule', a: [0.7, 0.48], b: [0.84, 0.36], r: 0.045 },
      { type: 'capsule', a: [0.84, 0.36], b: [0.8, 0.2], r: 0.04 },
    ],
    joints: [
      [0.2, 0.28],
      [0.8, 0.19],
      [0.32, 0.95],
      [0.64, 0.95],
    ],
    bio: "// process: browndog.exe — cockapoo, same litter-spec as blackdog.exe, apricot-coat build. runs entirely on belly rubs and unwavering optimism.",
  },
  {
    name: 'CALICO CAT',
    w: 221,
    h: 253,
    sizeRatio: 0.58,
    seed: 4.0,
    dim: 0.85,
    shapes: [
      { type: 'capsule', a: [0.5, 0.46], b: [0.5, 0.72], r: 0.19 },
      { type: 'circle', c: [0.5, 0.28], r: 0.135 },
      { type: 'capsule', a: [0.44, 0.2], b: [0.4, 0.08], r: 0.035 },
      { type: 'capsule', a: [0.56, 0.2], b: [0.6, 0.08], r: 0.035 },
      { type: 'capsule', a: [0.66, 0.62], b: [0.82, 0.5], r: 0.05 },
      { type: 'capsule', a: [0.82, 0.5], b: [0.8, 0.28], r: 0.045 },
      { type: 'capsule', a: [0.8, 0.28], b: [0.68, 0.18], r: 0.04 },
    ],
    joints: [
      [0.5, 0.145],
      [0.68, 0.17],
    ],
    flecks: [
      [0.4, 0.52],
      [0.6, 0.44],
      [0.44, 0.64],
      [0.58, 0.6],
    ],
    bio: "// process: calico.exe — patch-based build, colors assigned at random by the universe's package manager. status: judging you.",
  },
];
