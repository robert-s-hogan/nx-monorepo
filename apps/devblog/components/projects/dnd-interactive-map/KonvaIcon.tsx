import React from 'react';
import { Path } from 'react-konva';

const KonvaIcon = ({
  IconComponent,
  x,
  y,
  fill,
  size,
  draggable,
  onDragStart,
  onDragEnd,
}) => {
  const icon = IconComponent({ size: size });
  const svgData = icon.props.children[0].props.d;
  const viewBox = icon.props.viewBox?.split(' ').map(Number) ?? [0, 0, 24, 24];
  const baseIconWidth = viewBox[2] - viewBox[0];
  const baseIconHeight = viewBox[3] - viewBox[1];
  const scaleFactorX = size / baseIconWidth;
  const scaleFactorY = size / baseIconHeight;

  return (
    <Path
      x={x}
      y={y}
      data={svgData}
      fill={fill}
      scaleX={scaleFactorX}
      scaleY={scaleFactorY}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    />
  );
};

export default KonvaIcon;
