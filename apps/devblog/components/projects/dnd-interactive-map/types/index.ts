export type Coordinate = {
  x: number;
  y: number;
};

export type IconData = {
  id: string;
  x: number;
  y: number;
  className: string;
  isDragging: boolean;
};

export type StageSize = {
  width: number;
  height: number;
};

export type IconProps = {
  id: string;
  name: string;
  x: number;
  y: number;
  className: string;
  draggable: boolean;
  dragBoundFunc: (pos: Coordinate) => Coordinate;
};
