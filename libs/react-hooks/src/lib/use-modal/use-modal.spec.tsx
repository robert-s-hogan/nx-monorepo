import { render } from '@testing-library/react';

import UseModal from './use-modal';

describe('UseModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseModal />);
    expect(baseElement).toBeTruthy();
  });
});
