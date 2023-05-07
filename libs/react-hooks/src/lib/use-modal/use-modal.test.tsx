// useModal.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import { useModal } from './use-modal';
import { useState } from 'react';

function TestComponent() {
  const { isShowing, toggle } = useModal();
  return (
    <div>
      <button onClick={toggle}>Toggle Modal</button>
      {isShowing && <div>Modal Content</div>}
    </div>
  );
}

describe('useModal', () => {
  it('should toggle modal visibility', () => {
    render(<TestComponent />);
    const toggleButton = screen.getByText('Toggle Modal');
    const modalContent = () => screen.queryByText('Modal Content');

    expect(modalContent()).toBeNull();

    fireEvent.click(toggleButton);
    expect(modalContent()).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(modalContent()).toBeNull();
  });
});
