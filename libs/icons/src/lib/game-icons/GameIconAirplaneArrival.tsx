import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconAirplaneArrivalIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'airplane-arrival'];
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
        d="M86.48 31.83c-1.96 4.68-4.03 10.14-5.96 16.22-4.14 13.05-8.05 28.48-11.15 43.03-3.1 14.52-5.39 28.32-6.34 37.82-.35 3.6-.35 5.8-.35 7.7l167.92 78.6-11.4 9c-34.8 27.7-73 53-115.1 75.7l33.4 7.8c60-11.4 93.5-27.9 163.4-55.9l3-1.2 99.4 32.3.2.1c24 8.8 38.2 9.1 42 7.8 1.9-.7 1.4-.5 1.6-1.3.2-.8.2-3.3-1.2-6.9-2.7-7.2-10.1-17.6-19.6-26.7-9.5-9.1-21.2-17-31.5-20.9l-.3-.1-279.9-122.6-.8-4.6c-4.6-24.2-9.5-49.13-27.32-75.87zM209.2 47.9l21.5 95.6 59.8 26.3c-15.5-32.1-33.8-66.1-63.1-108.83L209.2 47.9zM32 439v18h448v-18H32z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconAirplaneArrivalIcon })
);
