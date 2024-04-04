import { FieldConfig } from '../types';

const ConquestField: React.FC<FieldConfig> = ({
  name,
  label,
  type,
  options,
  placeholder,
  required,
}) => {
  switch (type) {
    case 'text':
    case 'number':
      return (
        <label>
          {label}
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            required={required}
          />
        </label>
      );
    case 'select':
      return (
        <label>
          {label}
          <select name={name} required={required}>
            {options?.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      );
    case 'checkbox':
      return (
        <label>
          <input name={name} type="checkbox" /> {label}
        </label>
      );
    default:
      return null;
  }
};

export default ConquestField;
