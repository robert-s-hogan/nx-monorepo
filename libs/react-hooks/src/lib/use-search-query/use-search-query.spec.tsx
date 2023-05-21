import { render } from '@testing-library/react';

import UseSearchQuery from './use-search-query';

describe('UseSearchQuery', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseSearchQuery />);
    expect(baseElement).toBeTruthy();
  });
});
