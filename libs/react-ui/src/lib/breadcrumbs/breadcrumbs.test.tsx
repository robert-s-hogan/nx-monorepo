import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Breadcrumb } from './Breadcrumb';

describe('Breadcrumb component', () => {
  const defaultProps = {
    items: [
      { title: 'Home', path: '/' },
      { title: 'Category', path: '/category' },
      { title: 'Product' },
    ],
  };

  test('renders Breadcrumb with items', () => {
    render(<Breadcrumb {...defaultProps} />);
    defaultProps.items.forEach(({ title }) => {
      const itemElement = screen.getByText(title);
      expect(itemElement).toBeInTheDocument();
    });
  });

  test('renders Breadcrumb with correct active item', () => {
    render(<Breadcrumb {...defaultProps} />);
    const lastItem = defaultProps.items[defaultProps.items.length - 1];
    const activeElement = screen.getByText(lastItem.title);

    expect(activeElement).toHaveClass('active');
  });
});
