import { InputProps } from '@with-nx/types';
import { Label } from '@with-nx/react-ui';

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
    <>
      <Label htmlFor={name} className={`w-full mb-2 ${className}`}>
        {label}
      </Label>
      <input
        className={`border rounded py-2 px-3 text-grey-darker w-full ${className}`}
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onClick={onClick}
        onBlur={onBlur}
        onFocus={onFocus}
        style={style}
        required={required}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
