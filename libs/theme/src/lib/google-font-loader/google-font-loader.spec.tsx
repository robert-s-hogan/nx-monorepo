import { render } from '@testing-library/react';

import GoogleFontLoader from './google-font-loader';

describe('GoogleFontLoader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GoogleFontLoader />);
    expect(baseElement).toBeTruthy();
  });
});
