import React from 'react';
import { TableProps } from '@with-nx/types';

export const Table: React.FC<TableProps> = ({ data }) => {
  const keys = Object.keys(data[0]);

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          {keys.map((key) => (
            <th key={key} className="px-4 py-2">
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? 'bg-gray-200' : ''}>
            {keys.map((key) => (
              <td key={key} className="border px-4 py-2">
                {row[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
