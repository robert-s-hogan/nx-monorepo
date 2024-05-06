import { ChangeEvent } from 'react';

type InputProps<T> = {
  value: T;
  onChange: (value: T) => void;
  label?: string;
  placeholder?: string;
  id?: string;
};

export const Input = <
  T extends string | number | readonly string[] | undefined
>({
  value,
  onChange,
  label,
  placeholder,
  id,
}: InputProps<T>) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value as unknown as T);
  };

  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type="text"
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};
