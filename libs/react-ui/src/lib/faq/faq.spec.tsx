import { render } from '@testing-library/react';

import { FAQ } from './faq';

describe('FAQ', () => {
  it('should render successfully', () => {
    const item = { question: 'Sample question?', answer: 'Sample answer.' };
    const { baseElement } = render(<FAQ item={item} />);
    expect(baseElement).toBeTruthy();
  });
});
