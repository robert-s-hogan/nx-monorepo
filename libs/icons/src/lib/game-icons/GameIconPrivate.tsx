import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPrivateIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'private'];
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
        d="M255.977 147.306C285.345 194.92 349.612 272.93 406 311.866v52.592c-52.596-39.175-105.228-92.47-140.56-145.47l-9.44-14.16-9.44 14.16c-35.446 53.17-87.448 106.787-140.56 145.706v-52.89c55.382-38.943 120.38-116.82 149.977-164.498z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPrivateIcon })
);
