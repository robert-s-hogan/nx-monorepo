import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@with-nx/theme';

import Index from '../pages/index';
import { themes } from '../styles/themes';

jest.mock('next/router', () => ({
  useRouter: () => ({ push: jest.fn(), basePath: '' }),
}));

// The header reads the signed-in user via useAuth(), which throws outside
// an AuthProvider. Mocked as signed out instead of rendering the real
// provider, since that builds a Supabase client from env vars CI doesn't have.
jest.mock('@with-nx/auth', () => ({
  useAuth: () => ({ user: null, role: null, signOut: jest.fn() }),
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
