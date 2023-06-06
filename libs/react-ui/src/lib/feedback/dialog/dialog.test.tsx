import { render, fireEvent } from '@testing-library/react';
import { Dialog } from './dialog';

describe('Dialog', () => {
  test('renders Dialog component', () => {
    const mockCloseHandler = jest.fn();

    const { getByText } = render(
      <Dialog title="Test Dialog" isVisible={true} onClose={mockCloseHandler}>
        <p>Dialog content</p>
      </Dialog>
    );

    expect(getByText('Test Dialog')).toBeInTheDocument();
    expect(getByText('Dialog content')).toBeInTheDocument();

    fireEvent.click(getByText('Close'));
    expect(mockCloseHandler).toHaveBeenCalledTimes(1);
  });
});
