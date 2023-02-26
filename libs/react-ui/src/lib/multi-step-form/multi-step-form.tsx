import styles from './multi-step-form.module.css';
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
}

export function MultiStepForm({ steps, onSubmit }: MultiStepFormProps) {
  const {
    stepData,
    stepValid,
    currentStep,
    handleStepChange,
    handleStepSubmit,
  } = useMultiStepForm({ steps, onSubmit });

  const StepComponent = steps[currentStep].component;

  console.log(`currentStep`, currentStep);
  console.log(`stepValid`, stepValid);
  console.log(`!stepValid[currentStep]`, !stepValid[currentStep]);

  return (
    <form onSubmit={handleStepSubmit}>
      <StepComponent data={stepData} onChange={handleStepChange} />
      {currentStep !== steps.length - 1 && (
        <button
          className="btn-primary"
          type="submit"
          disabled={!stepValid[currentStep]}
        >
          Next
        </button>
      )}
    </form>
  );
}
