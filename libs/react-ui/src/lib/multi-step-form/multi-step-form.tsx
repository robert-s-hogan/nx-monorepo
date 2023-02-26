import { ReactNode } from 'react';
import multiStepFormStyles from './multi-step-form.module.css';
import { useMultiStepForm } from '@with-nx/react-hooks';

/* eslint-disable-next-line */
export type FormStep = {
  name: string;
  component: React.ComponentType<{
    data: Record<string, any>;
    onChange: (name: string, value: any) => void;
  }>;
  validation: (data: Record<string, any>) => boolean;
};

/* eslint-disable-next-line */
export interface MultiStepFormProps {
  steps: FormStep[];
  onSubmit: (data: Record<string, any>) => void;
  className?: string;
  okayButtonIcon?: ReactNode;
}

export function MultiStepForm({
  steps,
  onSubmit,
  className,
  okayButtonIcon,
}: MultiStepFormProps) {
  const {
    stepData,
    stepValid,
    currentStep,
    handleStepChange,
    handleStepSubmit,
    handleStepBack,
  } = useMultiStepForm({ steps, onSubmit });

  const StepComponent = steps[currentStep]?.component;

  const isLastStep = currentStep === steps.length - 1;
  const buttonText = isLastStep ? 'Submit' : 'Next';
  const statusButtonText = !stepValid[currentStep]
    ? 'Please fill out field'
    : 'Okay';

  return (
    <form onSubmit={handleStepSubmit}>
      <div className={className}>
        <StepComponent data={stepData} onChange={handleStepChange} />
      </div>
      <button
        type="button"
        className={`btn-status block ${
          !stepValid[currentStep] ? 'btn-disabled' : ''
        }`}
        disabled
      >
        {!stepValid[currentStep] ? (
          <div className="flex items-center space-x-4">{statusButtonText}</div>
        ) : (
          <div className="flex items-center space-x-4">
            {okayButtonIcon}
            {statusButtonText}
          </div>
        )}
      </button>

      <button
        className="btn-secondary"
        type="button"
        onClick={handleStepBack}
        disabled={currentStep === 0}
      >
        Back
      </button>
      <button
        className="btn-primary"
        type={isLastStep ? 'submit' : 'button'}
        disabled={!stepValid[currentStep]}
        onClick={handleStepSubmit}
      >
        {buttonText}
      </button>
    </form>
  );
}
