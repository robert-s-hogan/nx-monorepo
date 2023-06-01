import { TextareaProps } from '@with-nx/types';
import { Label } from '@with-nx/react-ui';

export const Textarea = ({
  name,
  value,
  onChange,
  className = '',
  label,
  id,
  style = {},
  onClick,
  ariaLabel,
  required,
  placeholder,
  cols,
  rows,
  minLength,
  maxLength,
}: TextareaProps): JSX.Element => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <textarea
        className={`w-full ${className}`}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onClick={onClick}
        required={required}
        placeholder={placeholder}
        aria-label={ariaLabel}
        style={style}
        cols={cols}
        rows={rows}
        minLength={minLength}
        maxLength={maxLength}
      />
    </>
  );
};

export default Textarea;
