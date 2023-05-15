import { render } from '@testing-library/react';

import UseFetch from './use-fetch';

describe('UseFetch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseFetch />);
    expect(baseElement).toBeTruthy();
  });
});
