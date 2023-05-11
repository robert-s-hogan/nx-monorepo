import Button from '../button/button';
import stepperStyles from './stepper.module.css';
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
      className={`stepper ${className ? className : ''} ${
        stepperStyles.stepper
      }`}
      style={style}
    >
      <Button
        className={stepperStyles.btn}
        onClick={handleDecrement}
        disabled={value < 2}
        icon={minusIcon}
      />
      <span className={stepperStyles.value}>{value}</span>
      <Button
        className={stepperStyles.btn}
        onClick={handleIncrement}
        icon={plusIcon}
      />
      {value < 1 && (
        <div className={stepperStyles.error}>
          {errorMessage || 'Minimum value is 1'}
        </div>
      )}
    </div>
  );
};

export default Stepper;
