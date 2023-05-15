import { render } from '@testing-library/react';

import UseLocalStorage from './use-local-storage';

describe('UseLocalStorage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseLocalStorage />);
    expect(baseElement).toBeTruthy();
  });
});
