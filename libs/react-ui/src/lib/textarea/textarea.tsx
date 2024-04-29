import { TextareaProps } from '@with-nx/types';
import textareaStyles from './textarea.module.css';
import Label from '../label/label';

export const Textarea = ({
  name,
  value,
  onChange,
  className,
  label,
  id,
  style,
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
    <div
      className={`${textareaStyles['textareaContainer']} textarea-container`}
    >
      <Label htmlFor={name}>{label}</Label>
      <textarea
        className={`textarea ${textareaStyles['textarea']} ${className}`}
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
    </div>
  );
};

export default Textarea;
