import { render, fireEvent } from '@testing-library/react';
import { Accordion } from './accordion';

describe('Accordion', () => {
  test('renders Accordion component and handles open/close', () => {
    const { getByText, queryByText } = render(
      <Accordion title="Accordion Title">Accordion Content</Accordion>
    );

    expect(getByText('Accordion Title')).toBeInTheDocument();
    expect(queryByText('Accordion Content')).not.toBeInTheDocument();

    fireEvent.click(getByText('Accordion Title'));

    expect(getByText('Accordion Content')).toBeInTheDocument();
  });
});
