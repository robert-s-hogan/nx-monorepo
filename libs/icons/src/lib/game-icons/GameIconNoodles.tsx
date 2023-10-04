import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconNoodlesIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'noodles'];
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
        d="M21.35 26.1l-2.68 15.78L382.7 103.9l2.6-15.79L21.35 26.1zm-.55 57.94l-1.58 15.92L383.2 136l1.6-16-364-35.96zm202.6 52.16c-1.8 7.8-7.7 19.5-14.3 31C201.1 181 192 194 192 208c0 18.7 9.8 31.1 18 40.3 8.2 9.3 14 15.3 14 23.7 0 5.7-3.3 14.8-7.8 24h18c3.4-7.9 5.8-16 5.8-24 0-15.5-10.2-25.5-18-34.3-7.8-8.8-14-16.4-14-29.7 0-4.9 6.9-18.8 14.9-32.8 7-12.1 14.8-24.6 16.7-37.4l-16.2-1.6zm40 4c-1.7 7.5-7.5 18.2-14.2 28.8-8 12.8-17.2 25-17.2 39 0 18.7 9.8 31.1 18 40.3 8.2 9.3 14 15.3 14 23.7 0 5.7-3.3 14.8-7.8 24h18c3.4-7.9 5.8-16 5.8-24 0-15.5-10.2-25.5-18-34.3-7.8-8.8-14-16.4-14-29.7 0-4.9 6.8-17.6 14.8-30.5 7-11.3 14.8-23.1 16.8-35.8l-16.2-1.5zm40 3.9c-1.7 7.2-7.4 16.9-14 26.7-8 11.8-17.4 23.2-17.4 37.2 0 18.7 9.8 31.1 18 40.3 8.2 9.3 14 15.3 14 23.7 0 5.7-3.3 14.8-7.8 24h18c3.4-7.9 5.8-16 5.8-24 0-15.5-10.2-25.5-18-34.3-7.8-8.8-14-16.4-14-29.7 0-4.9 6.6-16.4 14.6-28.3 7-10.4 15-21.5 16.9-34l-16.1-1.6zM40.33 312c1.68 42.5 16.6 76.8 48.58 101.7C122.9 440.1 177.1 456 256 456s133.1-15.9 167.1-42.3c32-24.9 46.9-59.2 48.6-101.7H40.33zM192 472v16h128v-16H192z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconNoodlesIcon })
);
