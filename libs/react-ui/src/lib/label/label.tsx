import { LabelProps } from '@with-nx/types';
import labelStyles from './label.module.css';

export const Label = ({
  htmlFor,
  children,
  className,
  style,
}: LabelProps): JSX.Element => {
  return (
    <label
      htmlFor={htmlFor}
      className={`label ${labelStyles.label} ${className}`}
      style={style}
    >
      {children}
    </label>
  );
};

export default Label;
