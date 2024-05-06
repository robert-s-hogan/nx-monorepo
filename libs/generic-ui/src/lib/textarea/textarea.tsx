import React, { ChangeEvent } from 'react';

type TextareaProps = {
  className?: string;
  id: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

export const Textarea: React.FC<TextareaProps> = ({
  className,
  id,
  label,
  value,
  onChange,
  placeholder,
}) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        className={className}
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};
