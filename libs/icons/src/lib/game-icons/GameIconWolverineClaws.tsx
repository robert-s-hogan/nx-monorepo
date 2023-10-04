import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconWolverineClawsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'wolverine-claws'];
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
        d="M280.3 30.04c-33.4 19.78-70.7 55.47-104.5 97.06-47.4 58.3-88.85 127.5-109.81 176.6l1.69 8.9 7.61-1.4.83-1.5c16.57-30.5 41.98-66 72.18-101.7 38.3-61.4 84.1-127.56 132-177.96zm113.9 2.72c-43 15.92-96.3 52.79-146.1 97.94-64.9 59-124.9 131.3-154.73 185.2l1.6 11.6 12.93-5.8c8.3-9.9 17-19.9 24.4-28 64.8-85.2 170.9-189.4 261.9-260.94zM473 81.09c-47.5 7.72-106.6 38.31-163.9 79.31-71.2 50.9-140 116.6-183.9 168.7l1.4 19.5L151 347c73.7-85.1 198.4-193.7 322-265.91zM47.34 303L18 344v144l37.32-14s50.58 17.1 72.68 17.7c31.5.8 72.7-48.2 74.7-57.7 1.6-7.9-3.8-14.7-8.8-21.4-19.9 14.2-35.1 20.7-61.8 6.5 30.6-6.1 34.2-5.7 53.6-21.9 10-9 12.3-19.8 11.5-29.5-.5-6-14.3-10.5-22.4-20.5-5.6 6.2-10 11.3-15.1 17.2l-49.7 3.4-1.9-26.5-28.48 10-2.58-22.1-23.74 4.2c-1.9-10.6-4.11-21.6-5.96-30.4z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconWolverineClawsIcon })
);
