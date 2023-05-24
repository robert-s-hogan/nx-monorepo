import { BadgeProps } from '@with-nx/types';

export function Badge({ value, className, max }: BadgeProps) {
  let displayValue = value;

  if (typeof value === 'number' && max && value > max) {
    displayValue = `${max}+`;
  }

  const numDigits = displayValue.toString().length;
  const shapeClass =
    numDigits > 2
      ? 'px-2.5 py-2.5'
      : numDigits > 1
      ? 'px-2 py-2'
      : 'px-2 py-1.5';

  return (
    <span
      className={`inline-block text-white text-xs font-semibold align-middle whitespace-nowrap align-baseline rounded-full ${shapeClass} ${className}`}
    >
      {displayValue}
    </span>
  );
}

export default Badge;
