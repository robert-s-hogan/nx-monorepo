import { render } from '@testing-library/react';

import Seo from './seo';

describe('Seo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Seo />);
    expect(baseElement).toBeTruthy();
  });
});
