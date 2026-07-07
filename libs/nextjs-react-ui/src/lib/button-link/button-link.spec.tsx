import { render } from '@testing-library/react';

import ButtonLink from './button-link';

jest.mock('next/router', () => ({
  useRouter: () => ({ push: jest.fn(), basePath: '' }),
}));

describe('ButtonLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ButtonLink href="/">Click me</ButtonLink>
    );
    expect(baseElement).toBeTruthy();
  });
});
