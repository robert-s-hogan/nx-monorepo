import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSauropodHeadIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'sauropod-head'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className: propClassName, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={`game-icon ${combinedClassNames}`}
      {...otherProps}
    >
      <path
        fill="currentColor"
        d="M259.2 49.24c-32.7 1.11-56.9 22.79-80.3 43.25C103 121.5 57.02 171.6 17.59 222.3V494H140.7c-14.2-28-29.8-57.7-23.6-93.3 7-40 41-83.3 127.8-137.9-18-10.6-33.6-26.3-35.5-42l18-1.6c1.1 11.5 10.4 20.3 23.9 26.6 13.2 6.2 29.8 8 40 9.2 46.1 5.4 125.3 21.4 154-39.3-36.9 7.6-101 13.5-189.7-8.8l4.4-17.4c110.3 27.6 179 10.5 204.6 2.6 6.7-4.7 11.1-9 13.5-12.7 3.2-5 3.5-8.3 2.3-12.5C444 124.1 371 106.8 324.7 99.44l-4-.63c-16.3-22.49-32.9-49.69-61.5-49.57zm.3 18.33c.9 0 1.9.1 2.8.16-1 1.77-1.5 3.75-1.5 5.77 0 6.78 5.5 12.27 12.3 12.25 2.9 0 5.8-1.04 8-2.95.1.82.2 1.64.2 2.46 0 9.75-9.8 17.64-21.8 17.64s-21.8-7.89-21.8-17.64c0-9.77 9.8-17.69 21.8-17.69zm156.4 72.83c20.7 5.8 29.6 18.1 36.3 28.3l-15 9.8c-6.7-10.2-9.8-16.1-26.1-20.7z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSauropodHeadIcon })
);
