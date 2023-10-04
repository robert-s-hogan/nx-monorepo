import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconHumanPyramidIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'human-pyramid'];
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
        d="M256 21.17c-2.8 0-5.6 1.38-8.1 4.71-2.6 3.32-4.5 8.47-4.5 14.34 0 5.87 1.9 11.02 4.5 14.34 2.5 3.33 5.3 4.71 8.1 4.71s5.6-1.38 8.1-4.71c2.6-3.32 4.5-8.47 4.5-14.34 0-5.87-1.9-11.02-4.5-14.34-2.5-3.33-5.3-4.71-8.1-4.71zm-80 23.25v16.1l58 28v45.98l-9.4 75.6h-23c-4.8 4.1-10.9 6.7-17.6 6.7-7 0-13.4-2.9-18.4-7.3L104 194.1v16.1l58 18v46l-9.1 72.4h-23c-4.9 4.3-11.1 7-17.9 7-7 0-13.3-2.9-18.2-7.3L32 338.6v16.2l58 10v46l-10 80h16l12-70h8l12 70h16l-10-80v-46l50-1.7 50 1.7v46l-10 80h16l12-70h8l12 70h16l-10-80v-46l50-1.7 50 1.7v46l-10 80h16l12-70h8l12 70h16l-10-80v-46l58-10v-16.2l-61.8 7.8c-5 4.4-11.3 7.2-18.2 7.2-6.8 0-13-2.7-17.9-7h-23l-9.1-72.5v-46l58-18V194l-61.5 15.4c-5 4.6-11.4 7.5-18.5 7.5-6.8 0-13-2.7-17.9-6.9h-22.7l-9.4-75.5V88.52l58-28v-16.1l-61 24.85c-5 4.81-11.7 8-19 8-7.5 0-14.2-3.31-19.3-8.27zm76 100.08h8l11.2 65.5H248v.1h-7.2zm-68 16.2c-2.8 0-5.6 1.4-8.1 4.8-2.6 3.3-4.5 8.4-4.5 14.3s1.9 11 4.5 14.3c2.5 3.4 5.3 4.7 8.1 4.7s5.6-1.3 8.1-4.7c2.6-3.3 4.5-8.4 4.5-14.3s-1.9-11-4.5-14.3c-2.5-3.4-5.3-4.8-8.1-4.8zm144 .1c-2.8 0-5.6 1.4-8.1 4.8-2.6 3.3-4.5 8.4-4.5 14.3s1.9 11 4.5 14.3c2.5 3.4 5.3 4.7 8.1 4.7s5.6-1.3 8.1-4.7c2.6-3.3 4.5-8.4 4.5-14.3s-1.9-11-4.5-14.3c-2.5-3.4-5.3-4.8-8.1-4.8zm-70.6 65.6l48.6 1.7v46l-9.1 72.6h-23.1c-4.9 4.2-11 6.9-17.8 6.9-6.8 0-12.9-2.7-17.8-6.9h-23.1l-9.1-72.5v-46zm66.6 57.7h8l10.7 62.5H320v.1h-6.7zm-144 .1h8l10.7 62.5H192v-.1h-22.7zm-68 13.2c-2.8 0-5.6 1.4-8.1 4.8-2.6 3.3-4.5 8.4-4.5 14.3s1.9 11 4.5 14.3c2.5 3.4 5.3 4.8 8.1 4.8s5.6-1.4 8.1-4.8c2.6-3.3 4.5-8.4 4.5-14.3s-1.9-11-4.5-14.3c-2.5-3.4-5.3-4.8-8.1-4.8zm288 0c-2.8 0-5.6 1.4-8.1 4.8-2.6 3.3-4.5 8.4-4.5 14.3s1.9 11 4.5 14.3c2.5 3.4 5.3 4.8 8.1 4.8s5.6-1.4 8.1-4.8c2.6-3.3 4.5-8.4 4.5-14.3s-1.9-11-4.5-14.3c-2.5-3.4-5.3-4.8-8.1-4.8zm-144 .1c-2.8 0-5.6 1.4-8.1 4.7-2.6 3.3-4.5 8.5-4.5 14.4 0 5.8 1.9 11 4.5 14.3 2.5 3.3 5.3 4.7 8.1 4.7s5.6-1.4 8.1-4.7c2.6-3.3 4.5-8.5 4.5-14.3 0-5.9-1.9-11.1-4.5-14.4-2.5-3.3-5.3-4.7-8.1-4.7z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconHumanPyramidIcon })
);
