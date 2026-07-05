import { render } from '@testing-library/react';
import { FloatingFooter } from './floating-footer';

// @with-nx/constants isn't set up to transform through this project's Jest
// config when pulled in transitively (a workspace-wide Jest gap, not a
// react-ui-specific one) -- mocked here rather than reworking cross-project
// Jest transform config for one test file. Jest hoists jest.mock() calls
// above imports automatically, so placement here doesn't change behavior.
jest.mock('@with-nx/constants', () => ({
  SIBLING_APPS: [{ id: 'play2winff', name: 'Play 2 Win', shortLabel: 'P2W', url: '#', icon: 'football-helmet' }],
}));

describe('FloatingFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FloatingFooter currentApp="play2winff" />);
    expect(baseElement).toBeTruthy();
  });
});
