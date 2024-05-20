// DNDMap.tsx
import React, { useState, useEffect } from 'react';
import { Stage, Layer, Line } from 'react-konva';
import useMockDNDData from './useMockDNDData'; // Use the mock hook
import ShapeRenderer from './shape-renderer';

const DNDMap: React.FC = () => {
  const data = useMockDNDData();
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [isClient, setIsClient] = useState(false);
  const cellSize = 80; // Define the cell size

  useEffect(() => {
    setIsClient(true); // Set to true after the component mounts
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    if (typeof window !== 'undefined') {
      handleResize(); // Set initial dimensions
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const handleDragEnd = (e: any, id: number) => {
    const x = e.target.x();
    const y = e.target.y();

    // Update the position of the token
    e.target.position({ x, y });

    // If you want to update the state or the backend, do it here
    // Example: updateTokenPosition(id, x, y);
  };

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <Stage width={dimensions.width} height={dimensions.height}>
      <Layer>
        {/* Background grid */}
        {[...Array(Math.ceil(dimensions.width / cellSize))].map((_, i) => (
          <Line
            key={`v${i}`}
            points={[i * cellSize, 0, i * cellSize, dimensions.height]}
            stroke="#ddd"
            strokeWidth={0.25}
          />
        ))}
        {[...Array(Math.ceil(dimensions.height / cellSize))].map((_, i) => (
          <Line
            key={`h${i}`}
            points={[0, i * cellSize, dimensions.width, i * cellSize]}
            stroke="#ddd"
            strokeWidth={0.25}
          />
        ))}
      </Layer>
      <Layer>
        {/* Display tokens */}
        {data.map((token) => (
          <ShapeRenderer
            key={token.id}
            token={token}
            handleDragEnd={handleDragEnd}
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default DNDMap;
