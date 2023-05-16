import { InputProps } from '@with-nx/types';
import Label from '../label/label';
import inputStyles from './input.module.css';

export const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  className,
  id,
  style,
  onClick,
  ariaLabel,
  required,
  placeholder,
}: InputProps): JSX.Element => {
  return (
    <div
      className={`input-container ${inputStyles.inputContainer} ${className}`}
      style={style}
    >
      <Label htmlFor={name} className="input-label">
        {label}
      </Label>
      <input
        className="input"
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onClick={onClick}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
