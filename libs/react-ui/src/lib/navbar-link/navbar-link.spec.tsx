import { render } from '@testing-library/react';

import NavbarLink from './navbar-link';

describe('NavbarLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavbarLink />);
    expect(baseElement).toBeTruthy();
  });
});
