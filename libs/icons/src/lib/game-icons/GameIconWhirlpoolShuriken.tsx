import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconWhirlpoolShurikenIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'whirlpool-shuriken'];
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
        d="M286.077 121.043l45.124-103.484-93.427 69.007-.392-.282-.062.616-105.5 77.925-83.85-76.773 35.532 112.459-.114.082.162.071 39.185 124.029-98.881 60.209 249.358-5.869L298.8 494.441l75.664-240.184 113.682 10.997zm-46.453 177.914c-32.097 0-58.115-26.019-58.115-58.114 0-32.098 26.018-58.115 58.115-58.115s58.114 26.017 58.114 58.115c0 32.096-26.017 58.114-58.114 58.114z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconWhirlpoolShurikenIcon })
);
