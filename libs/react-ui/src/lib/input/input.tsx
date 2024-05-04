import { InputProps } from '@with-nx/types';
import { Label } from '../label/label';
import inputStyles from './input.module.css';

export const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  onBlur,
  onFocus,
  className,
  id,
  style,
  onClick,
  ariaLabel,
  required,
  placeholder,
}: InputProps & { onBlur?: () => void; onFocus?: () => void }): JSX.Element => {
  return (
    <div
      className={`input-container ${inputStyles['inputContainer']} ${className}`}
      style={style}
    >
      {/* Ensure that the label text is passed as children to the Label */}
      <Label htmlFor={name} className="input-label">
        {label} {/* This is now correctly provided as the children of Label */}
      </Label>
      <input
        className="input"
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onClick={onClick}
        onBlur={onBlur}
        onFocus={onFocus}
        required={required}
        placeholder={placeholder}
        aria-label={ariaLabel} // Added for accessibility, assuming it's appropriate here
      />
    </div>
  );
};
