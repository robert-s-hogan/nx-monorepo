import { StepsProps } from '@with-nx/types';

export const Steps: React.FC<StepsProps> = ({ currentStep, steps }) => {
  return (
    <div className="flex justify-between items-center">
      {steps.map((step, index) => (
        <div key={index} className="text-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
              index < currentStep
                ? 'bg-green-500 text-white'
                : 'bg-gray-300 text-gray-600'
            }`}
          >
            {index + 1}
          </div>
          <div>{step}</div>
        </div>
      ))}
    </div>
  );
};
