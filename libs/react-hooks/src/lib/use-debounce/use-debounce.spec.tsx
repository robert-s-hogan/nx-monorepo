import { render } from '@testing-library/react';

import UseDebounce from './use-debounce';

describe('UseDebounce', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseDebounce />);
    expect(baseElement).toBeTruthy();
  });
});
