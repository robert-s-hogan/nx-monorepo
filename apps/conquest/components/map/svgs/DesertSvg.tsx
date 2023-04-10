import React, { ReactNode, useState } from 'react';

interface Point {
  x: number;
  y: number;
}

interface DesertSvgProps {
  children?: ReactNode;
  mapDimensions: number;
}

function generateRandomPoints(): Point[] {
  const pointCount = 8;
  const minAngle = (2 * Math.PI) / pointCount;
  const maxRadius = 40;

  const points: Point[] = [];
  for (let i = 0; i < pointCount; i++) {
    const angle = i * minAngle;
    const radius = Math.random() * maxRadius + 30;
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    points.push({ x, y });
  }

  return points;
}

function pointsToPath(points: Point[]): string {
  return (
    points
      .map((point, index) =>
        index === 0 ? `M ${point.x} ${point.y}` : `L ${point.x} ${point.y}`
      )
      .join(' ') + ' Z'
  );
}

function isPointInPolygon(point: Point, polygon: Point[]): boolean {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x,
      yi = polygon[i].y;
    const xj = polygon[j].x,
      yj = polygon[j].y;

    const intersect =
      yi > point.y !== yj > point.y &&
      point.x < ((xj - xi) * (point.y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

function getRandomPointInPolygon(polygon: Point[]): Point {
  let point;
  do {
    point = {
      x: Math.random() * 100,
      y: Math.random() * 100,
    };
  } while (!isPointInPolygon(point, polygon));
  return point;
}

function DesertSvg({ children, mapDimensions = 1200 }: DesertSvgProps) {
  const randomPoints = generateRandomPoints();
  const randomPath = pointsToPath(randomPoints);
  const [selectedPoint, setSelectedPoint] = useState<Point>(
    getRandomPointInPolygon(randomPoints)
  );

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: `${mapDimensions}px`,
        borderRadius: '1rem',
        marginTop: '1rem',
        padding: '2rem',
      }}
    >
      <svg
        style={{ position: 'absolute', zIndex: 1 }}
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="desertGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" style={{ stopColor: '#f7c066' }} />
            <stop offset="100%" style={{ stopColor: '#f9d088' }} />
          </linearGradient>
        </defs>
        <path d={randomPath} fill="url(#desertGradient)" />
      </svg>
      <div
        style={{
          position: 'absolute',
          // left: `${selectedPoint.x - 50}%`,
          // top: `${selectedPoint.y - 50}%`,
          zIndex: 2,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default DesertSvg;
