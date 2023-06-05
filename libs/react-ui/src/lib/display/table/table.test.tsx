import { render } from '@testing-library/react';
import { Table } from './table';

describe('Table', () => {
  const mockData = [
    { Name: 'John', Age: 25, Location: 'New York' },
    { Name: 'Jane', Age: 24, Location: 'San Francisco' },
  ];

  test('renders Table component', () => {
    const { getByText } = render(<Table data={mockData} />);

    expect(getByText('John')).toBeInTheDocument();
    expect(getByText('Jane')).toBeInTheDocument();
    expect(getByText('New York')).toBeInTheDocument();
    expect(getByText('San Francisco')).toBeInTheDocument();
  });
});
