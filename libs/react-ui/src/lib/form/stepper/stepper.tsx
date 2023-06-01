import { Button } from '@with-nx/react-ui';
import { StepperProps } from '@with-nx/types';

export const Stepper = ({
  value,
  onValueChange,
  minusIcon,
  plusIcon,
  className,
  style,
  errorMessage,
}: StepperProps) => {
  const handleDecrement = () => {
    if (value > 1) {
      onValueChange(value - 1);
    }
  };

  const handleIncrement = () => {
    onValueChange(value + 1);
  };

  return (
    <div
      className={`flex items-center bg-transparent ${className || ''}`}
      style={style}
    >
      <Button
        className={`px-4 py-2 rounded-md bg-gray-400 ${
          value < 2 ? 'bg-gray-200 cursor-not-allowed' : ''
        }`}
        onClick={handleDecrement}
        disabled={value < 2}
        icon={minusIcon}
      />
      <span className="ml-4 min-w-[20px] text-center">{value}</span>
      <Button
        className="px-4 py-2 ml-4 rounded-md bg-gray-400"
        onClick={handleIncrement}
        icon={plusIcon}
      />
      {value < 1 && (
        <div className="ml-4 text-red-500">
          {errorMessage || 'Minimum value is 1'}
        </div>
      )}
    </div>
  );
};

export default Stepper;
