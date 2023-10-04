import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCandlebrightIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'candlebright'];
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
        d="M182.5 20.563c24.226 185.95-94.27 281.193-69.688 372.937 3.67 13.694 10.22 26.198 18.907 37.375-2.572-7.143-4.053-14.664-4.22-22.5-1.053-49.328 50.494-92.216 87.344-161.25 11.533 31.27 23.798 68.703 16.75 116.28 62.933-18.27 110.746-66.518 121.187-117.655 37.003 66.223 41.693 141.46.876 196.78-.134-3.025-.612-6.104-1.53-9.186-6.996-23.464-39.652-36.488-72.688-28.03-61.143 15.66-69.61 98.658 16.625 85.217.44-.068.896-.144 1.343-.217 24.446-3.723 47.13-12.838 64.906-28.063C510.78 335.102 388.185 103.572 182.5 20.562z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCandlebrightIcon })
);
