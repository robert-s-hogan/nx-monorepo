import progressStyles from './progress.module.css';
import { ProgressProps } from '@with-nx/types';

export function Progress({
  value,
  maxValue,
  type = 'horizontal',
}: ProgressProps) {
  const progressValue = Math.round((value / maxValue) * 100);

  if (type === 'horizontal') {
    return (
      <div
        className={`progress-horizontal-container w-${progressValue} ${progressStyles.horizontalContainer}`}
      >
        <div
          className={`progress-horizontal-value ${progressStyles.horizontalValue}`}
          style={{ width: `${progressValue}%` }}
        />
      </div>
    );
  }

  return (
    <div
      className={`progress-circular-container ${progressStyles.circularContainer}`}
    >
      <span
        className={`progress-circular-value ${progressStyles.circularValue}`}
      >
        {progressValue}%
      </span>
    </div>
  );
}

export default Progress;
