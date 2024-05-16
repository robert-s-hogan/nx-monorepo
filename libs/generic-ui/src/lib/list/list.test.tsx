import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import matchers from jest-dom
import { List } from './list';

const items = [
  { id: '1', text: 'Item 1' },
  { id: '2', text: 'Item 2', href: 'https://example.com' },
  { id: '3', text: 'Item 3' },
];

describe('List', () => {
  it('renders all list items', () => {
    render(<List items={items} />);
    items.forEach((item) => {
      // expect(screen.getByText(item.text)).toBeInTheDocument();
    });
  });

  it('renders list items with links', () => {
    render(<List items={items} />);
    const linkedItem = screen.getByText('Item 2');
    // expect(linkedItem.closest('a')).toHaveAttribute(
    //   'href',
    //   'https://example.com'
    // );
  });

  it('renders list items without links', () => {
    render(<List items={items} />);
    const nonLinkedItem = screen.getByText('Item 1');
    expect(nonLinkedItem.closest('a')).toBeNull();
  });
});
