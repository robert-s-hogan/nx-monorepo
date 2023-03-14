import { render } from '@testing-library/react';

import UseApi from './use-api';

describe('UseApi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseApi />);
    expect(baseElement).toBeTruthy();
  });
});
