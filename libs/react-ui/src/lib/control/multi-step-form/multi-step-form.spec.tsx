import { render } from '@testing-library/react';

import MultiStepForm from './multi-step-form';

describe('MultiStepForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MultiStepForm />);
    expect(baseElement).toBeTruthy();
  });
});
