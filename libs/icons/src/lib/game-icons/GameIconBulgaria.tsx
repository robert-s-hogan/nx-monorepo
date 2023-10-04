import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBulgariaIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'bulgaria'];
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
        d="M49.66 101.8l40.48 16.1-11.03 28.4 185.19 11.6 95.3-47.1L483 150.1l5 40.1-38.9 3.3-8.9 63.9S405.5 281 408.9 281c3.5 0 44.5 44.9 44.5 44.9l-40.8 16.5-15.4-17.5-89 39.3 5.6 30.4-72.1 15.6-59.9-34.4-121 21.2 3.25-67.5-40.03-25.6 15.44-63.3 41.15-31.8-50.44-54.4z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBulgariaIcon })
);
