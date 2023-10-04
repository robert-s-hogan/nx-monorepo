import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCarSeatIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'car-seat'];
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
        d="M71.47 18.38l-.01.01c-6.58-.1-14.25.79-21.52 2.41-8.31 1.84-16.18 4.69-21.3 7.56-2.57 1.44-4.42 2.9-5.24 3.8l25.86 90.54c7.22-9.1 15.41-16.6 23.75-22.2 9.69-6.44 19.19-10.67 27.89-12.47 0-13.14-.3-25.92-1.8-36.76-1.9-13.05-5.6-23.03-11.5-28.91-1.3-1.35-6.28-3.44-13.39-3.88-.89 0-1.81-.1-2.74-.1zm29.03 92.12c-6.7.4-14.2 3.5-21.1 8.7-13.68 10.3-24.04 28.7-24.34 40.2l45.74 240.3c7.6-9.5 19.2-15.7 32.2-15.7 11.5 0 22 4.9 29.5 12.7 5.1-1.1 10.5-2.2 16.4-3.3 1.5-.3 3.1-.5 4.7-.8-13.5-92.5-35.3-199.6-65.2-275.3-5.2-4.8-10.3-6.7-15.6-6.8h-2.3zm283 39.5l-53.6 167.4 17.2 5.4 24-75.1 117.1 37.5 5.4-17.2-117-37.4 24.1-75.2-17.2-5.4zm-38.7 245.3c-21.5.1-46.3 1.4-71 3.7-33 2.9-66 7.4-91.6 12.1-3.5.6-6.8 1.3-10 1.9 1.2 3.8 1.8 7.8 1.8 12 0 22.5-18.5 41-41 41-5.6 0-11-1.2-15.9-3.2-3.1 8.9-5.4 17.6-6.7 24.2H398c5 0 7.7-1.8 10.7-6.4 3.1-4.7 5.4-12.4 6.3-21.5 1.9-18.1-2.1-41.2-9.1-55.1.3.5-2.8-2.5-10.2-4.4-7.4-1.9-18.1-3.3-30.7-3.9-6.3-.3-13.1-.4-20.2-.4zM133 402c-12.8 0-23 10.2-23 23s10.2 23 23 23 23-10.2 23-23-10.2-23-23-23z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCarSeatIcon })
);
