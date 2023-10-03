import { render } from '@testing-library/react';

import UseHandleBackdropClick from './use-handle-backdrop-click';

describe('UseHandleBackdropClick', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseHandleBackdropClick />);
    expect(baseElement).toBeTruthy();
  });
});
