import { ChangeEvent } from 'react';

type InputProps<T> = {
  value: T;
  onChange: (value: T) => void;
};

export const Input = <
  T extends string | number | readonly string[] | undefined
>({
  value,
  onChange,
}: InputProps<T>) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value as unknown as T);
  };

  return <input type="text" value={value} onChange={handleChange} />;
};
