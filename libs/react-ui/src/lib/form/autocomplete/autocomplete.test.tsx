import { render, fireEvent } from '@testing-library/react';
import { AutoComplete } from './autoComplete';

describe('AutoComplete', () => {
  const mockChangeHandler = jest.fn();

  test('renders AutoComplete component', () => {
    const { getByDisplayValue } = render(
      <AutoComplete suggestions={[]} onChange={mockChangeHandler} />
    );

    fireEvent.change(getByDisplayValue(''), {
      target: { value: 'Test input' },
    });

    expect(mockChangeHandler).toHaveBeenCalledWith('Test input');
  });
});
