import { render } from '@testing-library/react';

import FontLoader from './font-loader';

describe('FontLoader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FontLoader />);
    expect(baseElement).toBeTruthy();
  });
});
