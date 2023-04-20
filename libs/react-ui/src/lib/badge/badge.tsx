import badgeStyles from './badge.module.css';

/* eslint-disable-next-line */
export interface BadgeProps {
  value: number | string;
  variant?: 'primary' | 'secondary' | 'warning' | 'error' | 'success';
  max?: number;
}

export function Badge({ value, variant = 'primary', max }: BadgeProps) {
  let displayValue = value;

  if (typeof value === 'number' && max && value > max) {
    displayValue = `${max}+`;
  }

  return (
    <span className={`badge ${badgeStyles.badge} ${badgeStyles[variant]}`}>
      {displayValue}
    </span>
  );
}

export default Badge;
