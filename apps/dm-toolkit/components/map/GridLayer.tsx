import { Line } from 'react-konva';
import { GRID_CELL_PIXELS } from '../../lib/grid';

interface GridLayerProps {
  width: number;
  height: number;
}

export default function GridLayer({ width, height }: GridLayerProps) {
  const verticalLines = [];
  for (let x = 0; x <= width; x += GRID_CELL_PIXELS) {
    verticalLines.push(x);
  }
  const horizontalLines = [];
  for (let y = 0; y <= height; y += GRID_CELL_PIXELS) {
    horizontalLines.push(y);
  }

  return (
    <>
      {verticalLines.map((x) => (
        <Line key={`v-${x}`} points={[x, 0, x, height]} stroke="#44403c" strokeWidth={1} opacity={0.5} />
      ))}
      {horizontalLines.map((y) => (
        <Line key={`h-${y}`} points={[0, y, width, y]} stroke="#44403c" strokeWidth={1} opacity={0.5} />
      ))}
    </>
  );
}
