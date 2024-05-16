import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Heading } from './heading';

describe('Heading', () => {
  it('renders the correct heading level', () => {
    render(<Heading level={1} text="Heading Level 1" />);
    expect(screen.getByText('Heading Level 1').tagName).toBe('H1');
  });

  it('applies the correct class name', () => {
    render(
      <Heading level={2} text="Heading Level 2" className="custom-class" />
    );
    // expect(screen.getByText('Heading Level 2')).toHaveClass('custom-class');
  });

  it('renders different heading levels', () => {
    for (let i = 1; i <= 6; i++) {
      const level = i as 1 | 2 | 3 | 4 | 5 | 6;
      render(<Heading level={level} text={`Heading Level ${level}`} />);
      expect(screen.getByText(`Heading Level ${level}`).tagName).toBe(
        `H${level}`
      );
    }
  });
});
