import spinnerStyles from './spinner.module.css';
import { SpinnerProps } from '@with-nx/types';

export const Spinner = ({ size = 'medium' }: SpinnerProps) => {
  return (
    <div
      data-testid="spinner"
      className={`${spinnerStyles['spinner']} ${spinnerStyles[size]}`}
    ></div>
  );
};

export default Spinner;
