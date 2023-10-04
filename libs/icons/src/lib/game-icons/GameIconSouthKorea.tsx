import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSouthKoreaIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'south-korea'];
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
        d="M300.9 15.71c62.9 88.09 126.3 176.09 88.5 279.39l15.9-2.6-27.5 96.5c-76.2 46-157.1 73.3-241.8 85.4-9.6-43.1-21.2-85.9 3.6-133.1l24.5-44.1c-30-32.3-32.5-63.1-45.4-94.4 23-6.4 32.4-20.4 60.8 3.8L139.2 109c11.3-22.61 29.5-51.07 56.2-61.48 33.2-12.94 71.3 1.24 105.5-31.81z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSouthKoreaIcon })
);
