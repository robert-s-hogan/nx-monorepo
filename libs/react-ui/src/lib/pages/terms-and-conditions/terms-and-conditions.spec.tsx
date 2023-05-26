import { render } from '@testing-library/react';

import TermsAndConditions from './terms-and-conditions';

describe('TermsAndConditions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TermsAndConditions />);
    expect(baseElement).toBeTruthy();
  });
});
