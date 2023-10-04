import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCornerExplosionIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'corner-explosion'];
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
        d="M293.324 20.738l-5.256 162.94L141.478 60.45l47.157 112.16L67.86 91.446 189.37 221.64 21.17 158.567 174.77 304.57l-113.885 2.92 160.02 77.09-127.9 14.602L196.91 435.81l-39.666 10.676 124.395 30.37-36.208 20.44h244.12v-91.835l-74.345-188.675 74.346 107.865v-44.025l-20.112-154.42-17.323 84.563L403.12 55.193 377.33 141 343.295 35.92l6.68 106.877-56.65-122.06zm12.133 116.823l73.764 121.56 15.376-30.233 38.836 141.656-73.946-103.967 9.682 76.022-77.018-20.64 102.518 91.044-33.8 6.584 93.515 53.76-202.012-61.412 64.49-21.9-113.56-57.97 74.012 13.08L156.25 242.18l126.86 37.164-19.96-60.555 69.795 44.25-27.488-125.48z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCornerExplosionIcon })
);
