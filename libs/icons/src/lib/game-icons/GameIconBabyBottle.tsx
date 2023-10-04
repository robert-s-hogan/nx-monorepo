import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBabyBottleIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'baby-bottle'];
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
        d="M458.5 26.53c-8.8.12-18.1 2.88-25.1 6.84-12.5 7.02-23 28.72-29 43.11a64 48 45 0 0-54.3-3.36L438.9 162a64 48 45 0 0-3.4-54.4c14.4-5.9 36.1-16.52 43.1-28.97 7.5-13.11 10.7-34.58 0-45.26-5-5-12.3-6.95-20.1-6.84zM331.6 80.05L299 112.6 399.4 213l32.6-32.5zm-61 42.55c-13.5-.3-32.9 6-57.1 30.3L32.42 334c-3.54 3.5-5.85 9.7-5.85 16.2s2.31 12.7 5.85 16.2L145.6 479.6c3.5 3.6 9.7 5.9 16.3 5.9 6.5 0 12.7-2.3 16.2-5.9l4.9-5-27.5-27.5 12.8-12.8 27.5 27.5 21.1-21.1-27.5-27.5 12.8-12.8 27.5 27.5 21.2-21.1-50.2-50.2 12.8-12.8 50.2 50.2 21.1-21.2-27.5-27.5 12.8-12.8 27.5 27.5 21.2-21.1-27.6-27.6 12.8-12.8 27.6 27.6 21.1-21.2-50.2-50.1 12.8-12.8 50 49.9c35.6-39.2 23.1-64.5 16.4-71.1l-90.5-90.5c-3.1-3.1-10.1-7.4-20.6-7.7z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBabyBottleIcon })
);
