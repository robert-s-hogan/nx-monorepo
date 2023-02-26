import { render } from '@testing-library/react';

import UseMultiStepForm from './use-multi-step-form';

describe('UseMultiStepForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseMultiStepForm />);
    expect(baseElement).toBeTruthy();
  });
});
