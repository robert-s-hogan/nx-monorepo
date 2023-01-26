import { render } from '@testing-library/react';

import NavbarMenu from './navbar-menu';

describe('NavbarMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavbarMenu />);
    expect(baseElement).toBeTruthy();
  });
});
