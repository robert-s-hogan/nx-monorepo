import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconHoleIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'hole'];
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
        d="M256 151c-62.9 0-119.9 10.8-161.94 28.8-21.03 9.1-38.38 19.9-50.86 32.5C30.71 225 23 239.9 23 256s7.71 31 20.2 43.7c12.48 12.6 29.83 23.4 50.86 32.5C136.1 350.2 193.1 361 256 361c62.9 0 119.9-10.8 161.9-28.8 21.1-9.1 38.4-19.9 50.9-32.5C481.3 287 489 272.1 489 256s-7.7-31-20.2-43.7c-12.5-12.6-29.8-23.4-50.9-32.5-42-18-99-28.8-161.9-28.8zm0 43c82.7 0 165.5 21.2 215 63.6-.5 9.9-5.3 19.6-15 29.4-10.2 10.4-25.6 20.2-45.2 28.6-39 16.7-94 27.4-154.8 27.4-60.8 0-115.8-10.7-154.8-27.4-19.55-8.4-35.01-18.2-45.19-28.6-9.65-9.8-14.48-19.5-14.96-29.4C90.54 215.2 173.3 194 256 194z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconHoleIcon })
);
