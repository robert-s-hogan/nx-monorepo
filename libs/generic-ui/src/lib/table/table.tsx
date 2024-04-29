interface TableProps {
  headers: string[];
  data: any[];
}

export const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {Object.values(row).map((cell, cellIndex) => (
              <td key={cellIndex}>{cell as React.ReactNode}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
