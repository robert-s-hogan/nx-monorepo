import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconVhsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'vhs'];
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
        d="M41.88 93.6c-5.52 0-10 4.5-10 10v38.6c0 9.2 7.47 16.7 16.67 16.7v-28.2H463.4v28.2h.1c9.2 0 16.6-7.5 16.6-16.7v-38.6c0-5.5-4.5-10-10-10H41.88zm21.34 53.2v26.7h-31v210.7c0 5.6 4.48 10 10 10H469.8c5.5 0 10-4.4 10-10V173.5h-31v-26.7H63.22zm-13.39 51H462.2v136.4H49.83V197.8zm34.44 16.6c-11.17 15.1-17.78 33.7-17.78 53.9 0 18.2 5.35 35.1 14.56 49.3h58.05v-9.1c-15.3-6.9-26-22.3-26-40.2 0-17.8 10.7-33.2 26-40.1v-13.8H84.27zm71.53 0v103.2h200.4V214.4H155.8zm217.1 0v13.8c15.3 6.9 26 22.3 26 40.1 0 17.9-10.7 33.3-26 40.2v9.1H431c9.2-14.2 14.5-31.1 14.5-49.3 0-20.2-6.6-38.8-17.8-53.9h-54.8zm-233.8 33.4c-5.7 5-9.3 12.3-9.3 20.5s3.6 15.6 9.3 20.6v-41.1zm233.8 0v41.1c5.7-5 9.3-12.4 9.3-20.6 0-8.2-3.6-15.5-9.3-20.5z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconVhsIcon })
);
