import { LabelProps } from '@with-nx/types';

export const Label = ({
  htmlFor,
  children,
  className,
  style,
}: LabelProps): JSX.Element => {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-sm text-gray-700 ${className}`}
      style={style}
    >
      {children}
    </label>
  );
};

export default Label;
