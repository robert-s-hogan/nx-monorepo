import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconIronMaskIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'iron-mask'];
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
        d="M256.25 18.25c-31.81 0-61.71 14.253-86.906 39.438L191 246.905h35.125c19.944 0 19.7 37.852.688 38.75v64.156h59.218v-64.187c-20.043-1.644-19.334-38.72 1.376-38.72h34.75L343.78 58.313C318.455 32.74 288.323 18.25 256.25 18.25zM152.687 76.813c-2.375 3.118-4.68 6.353-6.937 9.687-29.025 42.865-47.375 102.888-47.375 169.375s18.35 126.542 47.375 169.406c26.88 39.698 62.346 64.383 101.156 67.814v-63.97H212.53c-21.46 0-21.18-38.78 0-38.78h88.5c20.185 0 19.697 38.78 0 38.78h-35.436v63.97c38.81-3.43 74.276-28.116 101.156-67.813 29.025-42.863 47.375-102.918 47.375-169.405S395.775 129.365 366.75 86.5c-2.077-3.067-4.198-6.053-6.375-8.938L340.97 246.906h34.936c20.184 0 19.696 38.78 0 38.78l-71.187.002V368.5h-96.596v-82.814l-70.5.002c-21.462 0-21.18-38.782 0-38.782h34.563l-19.5-170.094z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconIronMaskIcon })
);
