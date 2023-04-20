import spinnerStyles from './spinner.module.css';

/* eslint-disable-next-line */
export interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 'medium' }) => {
  return (
    <div
      data-testid="spinner"
      className={`${spinnerStyles.spinner} ${spinnerStyles[size]}`}
    ></div>
  );
};

export default Spinner;
