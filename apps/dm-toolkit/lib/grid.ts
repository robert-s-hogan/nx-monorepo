// Client-safe grid math shared between GridLayer (drawing), TokenLayer /
// StructureLayer (snap-on-drag + distance readout), and anywhere else that
// needs to convert canvas pixels to 5e feet. Fixed constants rather than a
// per-map setting for now — no request yet for maps at other scales.
export const GRID_CELL_PIXELS = 50;
export const GRID_CELL_FEET = 5;

export function pixelsToFeet(pixels: number): number {
  return Math.round((pixels / GRID_CELL_PIXELS) * GRID_CELL_FEET);
}

// Snaps a coordinate to the nearest grid LINE — used for structures, whose
// x/y is their top-left corner.
export function snapToGridLine(value: number): number {
  return Math.round(value / GRID_CELL_PIXELS) * GRID_CELL_PIXELS;
}

// Snaps a coordinate to the nearest grid CELL CENTER — used for tokens,
// whose x/y is the center of the token circle.
export function snapToGridCenter(value: number): number {
  return snapToGridLine(value - GRID_CELL_PIXELS / 2) + GRID_CELL_PIXELS / 2;
}

export function distanceInFeet(x1: number, y1: number, x2: number, y2: number): number {
  const pixelDistance = Math.hypot(x2 - x1, y2 - y1);
  return pixelsToFeet(pixelDistance);
}
