import { render } from '@testing-library/react';

import UseFileTypeSelection from './use-file-type-selection';

describe('UseFileTypeSelection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseFileTypeSelection />);
    expect(baseElement).toBeTruthy();
  });
});
