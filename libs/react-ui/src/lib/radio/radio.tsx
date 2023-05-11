import { RadioProps } from '@with-nx/types';

export const Radio = ({
  label,
  name,
  value,
  checked,
  onChange,
}: RadioProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={handleChange}
        />
        {label}
      </label>
    </div>
  );
};

export default Radio;
