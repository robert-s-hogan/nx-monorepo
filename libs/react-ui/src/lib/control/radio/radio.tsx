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
    <div className="flex items-center mb-2">
      <input
        className="mr-2 text-blue-600 form-radio"
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
      />
      <label className="font-medium text-gray-700">{label}</label>
    </div>
  );
};

export default Radio;
