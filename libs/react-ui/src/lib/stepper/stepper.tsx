/**
 * Stepper (Molecule)
 * The Stepper component is a molecule that represents a numeric stepper. It allows the user to increment or decrement a numeric value using buttons with optional custom icons.
 *
 * @param value The current value of the stepper.
 * @param onValueChange A callback function that will be called when the value of the stepper changes.
 * @param minusIcon The icon to display for the minus button.
 * @param plusIcon The icon to display for the plus button.
 * @param className An optional class name to apply to the root element of the component.
 * @param style An optional style object to apply to the root element of the component.
 *
 * @example
 *
 * import { FiMinus, FiPlus } from 'react-icons/fi';
 *
 * function MyComponent() {
 *   const [value, setValue] = useState(0);
 *
 *   const handleValueChange = (newValue) => {
 *     setValue(newValue);
 *   };
 *
 *   return (
 *     <Stepper
 *       value={value}
 *       onValueChange={handleValueChange}
 *       minusIcon={<FiMinus />}
 *       plusIcon={<FiPlus />}
 *       className="my-stepper"
 *     />
 *   );
 * }
 */
import React from 'react';
import Button from '../button/button';
import stepperStyles from './stepper.module.css';

interface StepperProps {
  value: number;
  onValueChange: (newValue: number) => void;
  minusIcon: React.ReactNode;
  plusIcon: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Stepper: React.FC<StepperProps> = ({
  value,
  onValueChange,
  minusIcon,
  plusIcon,
  className,
  style,
}) => {
  const handleDecrement = () => {
    onValueChange(value - 1);
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
      <Button className={stepperStyles.btn} onClick={handleDecrement}>
        {minusIcon}
      </Button>
      <span className={stepperStyles.value}>{value}</span>
      <Button className={stepperStyles.btn} onClick={handleIncrement}>
        {plusIcon}
      </Button>
    </div>
  );
};

export default Stepper;
