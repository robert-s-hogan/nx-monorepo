import { render } from '@testing-library/react';
import { MultiStepForm } from './multi-step-form';

// @with-nx/react-hooks isn't set up to transform through this project's
// Jest config when pulled in transitively (a workspace-wide Jest gap -- see
// floating-footer.spec.tsx for the same pattern) -- mocked here rather than
// reworking cross-project Jest transform config for one test file. Jest
// hoists jest.mock() calls above imports automatically, so placement here
// doesn't change behavior.
jest.mock('@with-nx/react-hooks', () => ({
  useMultiStepForm: () => ({
    stepData: {},
    stepValid: [true],
    currentStep: 0,
    handleStepChange: jest.fn(),
    handleStepSubmit: jest.fn(),
    handleStepBack: jest.fn(),
  }),
}));

describe('MultiStepForm', () => {
  it('should render successfully', () => {
    const steps = [{ component: () => <div>Step 1</div> }];
    const { baseElement } = render(
      <MultiStepForm steps={steps} onSubmit={jest.fn()} />
    );
    expect(baseElement).toBeTruthy();
  });
});
