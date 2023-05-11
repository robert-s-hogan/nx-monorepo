import { BadgeProps } from '@with-nx/types';
import badgeStyles from './badge.module.css';

export function Badge({ value, className, max }: BadgeProps) {
  let displayValue = value;

  if (typeof value === 'number' && max && value > max) {
    displayValue = `${max}+`;
  }

  const numDigits = displayValue.toString().length;
  const shapeClass =
    numDigits > 2
      ? badgeStyles.tripleDigits
      : numDigits > 1
      ? badgeStyles.doubleDigits
      : badgeStyles.singleDigit;

  return (
    <span className={`${badgeStyles.badge} ${className} ${shapeClass}`}>
      <span className={`${badgeStyles.digits}`}>{displayValue}</span>
    </span>
  );
}

export default Badge;
