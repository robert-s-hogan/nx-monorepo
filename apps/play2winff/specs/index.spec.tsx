import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@with-nx/theme';

import Index from '../pages/index';
import { themes } from '../styles/themes';

jest.mock('next/router', () => ({
  useRouter: () => ({ push: jest.fn(), basePath: '' }),
}));

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider themes={themes} initialThemeName="dark">
        <Index />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
