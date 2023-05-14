import { render } from '@testing-library/react';

import NextjsImage from './nextjs-image';

describe('NextjsImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NextjsImage />);
    expect(baseElement).toBeTruthy();
  });
});
