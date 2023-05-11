import { InputProps } from '@with-nx/types';

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
}: InputProps): JSX.Element => {
  return (
    <div className={className} style={style}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onClick={onClick}
        required={required}
      />
    </div>
  );
};

export default Input;
