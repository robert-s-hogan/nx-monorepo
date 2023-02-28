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
  showButtonStatus?: boolean[];
}

export function MultiStepForm({
  steps,
  onSubmit,
  className,
  okayButtonIcon,
  showButtonStatus = [],
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

  const shouldShowButtonStatus =
    currentStep < showButtonStatus.length
      ? showButtonStatus[currentStep]
      : true;

  const isNextButtonVisible = currentStep < steps.length - 2;

  return (
    <form onSubmit={handleStepSubmit}>
      <div className={className}>
        <StepComponent data={stepData} onChange={handleStepChange} />
      </div>
      {shouldShowButtonStatus && (
        <button
          type="button"
          className={`btn-status block ${
            !stepValid[currentStep] ? 'btn-disabled' : ''
          }`}
          disabled
        >
          {!stepValid[currentStep] ? (
            <div className="flex items-center space-x-4 mt-3">
              {statusButtonText}
            </div>
          ) : (
            <div className="flex items-center space-x-4 mt-3">
              <div className="btn-success flex items-center">
                <div className="mr-2">{okayButtonIcon}</div>
                {statusButtonText}
              </div>
            </div>
          )}
        </button>
      )}
      <div className="flex justify-end space-x-4">
        <button
          className={currentStep === 0 ? 'btn-disabled' : 'btn-prev'}
          type="button"
          onClick={handleStepBack}
          disabled={currentStep === 0}
        >
          Prev
        </button>
        {isNextButtonVisible ? (
          <button
            className={!stepValid[currentStep] ? 'btn-disabled' : 'btn-next'}
            type={isLastStep ? 'submit' : 'button'}
            disabled={!stepValid[currentStep]}
            onClick={handleStepSubmit}
          >
            {buttonText}
          </button>
        ) : (
          <div />
        )}
      </div>
    </form>
  );
}
