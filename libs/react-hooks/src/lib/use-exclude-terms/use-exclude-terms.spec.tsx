import { render } from '@testing-library/react';

import UseExcludeTerms from './use-exclude-terms';

describe('UseExcludeTerms', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseExcludeTerms />);
    expect(baseElement).toBeTruthy();
  });
});
