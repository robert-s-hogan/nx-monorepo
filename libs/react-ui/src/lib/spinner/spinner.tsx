import { SpinnerProps } from '@with-nx/types';

export const Spinner = ({ size = 'medium' }: SpinnerProps) => {
  const sizeClasses = {
    small: 'w-4 h-4 border-2',
    medium: 'w-8 h-8 border-4',
    large: 'w-12 h-12 border-6',
  };

  return (
    <div
      data-testid="spinner"
      className={`inline-block border-transparent border-t-blue-500 rounded-full animate-spin ${sizeClasses[size]}`}
    ></div>
  );
};

export default Spinner;
