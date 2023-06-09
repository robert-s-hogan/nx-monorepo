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
        className={`bg-gray-200 rounded-lg relative w-full h-4 overflow-hidden`}
      >
        <div
          className={`bg-blue-600 absolute left-0 top-0 h-full`}
          style={{ width: `${progressValue}%` }}
        />
      </div>
    );
  }

  return (
    <div
      className={`border-t-4 border-blue-600 rounded-full border-gray-200 w-20 h-20 animate-spin relative`}
    >
      <span
        className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold`}
      >
        {progressValue}%
      </span>
    </div>
  );
}

export default Progress;
