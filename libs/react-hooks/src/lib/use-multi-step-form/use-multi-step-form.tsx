import { useState, useEffect } from 'react';

export type FormStep = {
  name: string;
  component: React.ComponentType<{
    data: Record<string, any>;
    onChange: (name: string, value: any) => void;
  }>;
  validation: (data: Record<string, any>) => boolean;
};

export type UseMultiStepFormProps = {
  steps: FormStep[];
  onSubmit: (data: Record<string, any>) => void;
};

export default function useMultiStepForm({
  steps,
  onSubmit,
}: UseMultiStepFormProps) {
  const [stepData, setStepData] = useState<Record<string, any>>({});
  const [stepValid, setStepValid] = useState<boolean[]>(steps.map(() => false));
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepChange = (name: string, value: any) => {
    setStepData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleStepBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  useEffect(() => {
    setStepValid(
      steps.map((step) => {
        console.log(step.validation);
        return step.validation(stepData);
      })
    );
  }, [stepData, steps]);

  const handleStepSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (steps[currentStep].validation(stepData)) {
      setStepValid((prev) =>
        prev.map((val, index) => (index === currentStep ? true : val))
      );
      if (currentStep === steps.length - 1) {
        onSubmit(stepData);
      }
      setCurrentStep((prev) => prev + 1);
    } else {
      setStepValid((prev) =>
        prev.map((val, index) => (index === currentStep ? false : val))
      );
    }
  };

  return {
    stepData,
    stepValid,
    currentStep,
    handleStepChange,
    handleStepSubmit,
    handleStepBack,
  };
}
