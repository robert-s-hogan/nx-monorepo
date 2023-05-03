export interface Position {
  x: number;
  y: number;
}

export interface DraggableElement {
  id: string;
  x: number;
  y: number;
  className: string;
  isDragging: boolean;
}
