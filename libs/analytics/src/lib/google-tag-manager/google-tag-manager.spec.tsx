import { render } from '@testing-library/react';

import GoogleTagManager from './google-tag-manager';

describe('GoogleTagManager', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GoogleTagManager />);
    expect(baseElement).toBeTruthy();
  });
});
