import { ReactNode } from 'react';
import { useMultiStepForm } from '@with-nx/react-hooks';
import { MultiStepFormProps } from '@with-nx/types';

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
    <form onSubmit={handleStepSubmit} className={`space-y-4 ${className}`}>
      <div>
        <StepComponent data={stepData} onChange={handleStepChange} />
      </div>
      {shouldShowButtonStatus && (
        <button
          type="button"
          className={`btn-status block w-24 p-2 text-center text-white ${
            !stepValid[currentStep] ? 'bg-gray-500' : 'bg-green-500'
          }`}
          disabled
        >
          {!stepValid[currentStep] ? (
            <div className="flex items-center justify-center space-x-4">
              {statusButtonText}
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-4">
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
          className={`px-4 py-2 border ${
            currentStep === 0
              ? 'bg-gray-200 cursor-not-allowed'
              : 'bg-blue-500 text-white'
          }`}
          type="button"
          onClick={handleStepBack}
          disabled={currentStep === 0}
        >
          Prev
        </button>
        {isNextButtonVisible ? (
          <button
            className={`px-4 py-2 border ${
              !stepValid[currentStep]
                ? 'bg-gray-200 cursor-not-allowed'
                : 'bg-blue-500 text-white'
            }`}
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
