// useMockDNDData.ts
import { useState, useEffect } from 'react';

export interface Token {
  id: number;
  x: number;
  y: number;
  color: string;
  shape: 'circle' | 'rectangle';
}

// Mock data
const mockData: Token[] = [
  { id: 1, x: 120, y: 160, color: 'red', shape: 'circle' },
  { id: 2, x: 240, y: 280, color: 'blue', shape: 'rectangle' },
  { id: 3, x: 360, y: 400, color: 'green', shape: 'circle' },
  { id: 4, x: 440, y: 480, color: 'purple', shape: 'rectangle' },
];

const useMockDNDData = (): Token[] => {
  const [data, setData] = useState<Token[]>([]);

  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setData(mockData);
    }, 1000); // Mock delay
  }, []);

  return data;
};

export default useMockDNDData;
