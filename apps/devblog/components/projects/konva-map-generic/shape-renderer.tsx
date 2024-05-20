// ShapeRenderer.tsx
import React from 'react';
import { Circle, Rect } from 'react-konva';
import { Token } from './useMockDNDData';

interface ShapeRendererProps {
  token: Token;
  handleDragEnd: (e: any, id: number) => void;
}

const ShapeRenderer: React.FC<ShapeRendererProps> = ({
  token,
  handleDragEnd,
}) => {
  if (token.shape === 'circle') {
    return (
      <Circle
        x={token.x}
        y={token.y}
        radius={20}
        fill={token.color}
        draggable
        onDragEnd={(e) => handleDragEnd(e, token.id)}
      />
    );
  }

  if (token.shape === 'rectangle') {
    return (
      <Rect
        x={token.x}
        y={token.y}
        width={40}
        height={40}
        fill={token.color}
        draggable
        onDragEnd={(e) => handleDragEnd(e, token.id)}
      />
    );
  }

  return null;
};

export default ShapeRenderer;
