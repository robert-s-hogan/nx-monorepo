import { render } from '@testing-library/react';

import HamburgerMenu from './hamburger-menu';

describe('HamburgerMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HamburgerMenu />);
    expect(baseElement).toBeTruthy();
  });
});
