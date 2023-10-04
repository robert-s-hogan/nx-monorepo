import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconIciclesFenceIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'icicles-fence'];
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
        d="M310.395 18.275l.582 30.954 61.322 113.3-4.09-128.485-8.763-15.77h-49.052zm134.71 2.47l-40.814 171.74c-16.327 2.13-32.17 5.827-47.372 10.94L235.45 74.834l49.745 166.524c-14.27 10.795-27.37 23.062-39.056 36.585L77.19 227.48l126.46 119.456c-6.737 16.35-11.818 33.546-15 51.392l-169.625 40.31L202.3 482.196l183.095-43.513-153.565-36.495c2.488-12.733 6.122-25.05 10.8-36.837l152.005 45.406-113.684-107.39c8.694-9.737 18.285-18.652 28.648-26.618L418.664 392.21l-44.53-149.077c11.256-3.536 22.927-6.144 34.923-7.742l36.03 151.616 43.53-183.166-43.512-183.094zM66.043 66.913l67.238 109.156 109.19 67.258-67.238-109.158-109.19-67.256zm-47.658 234.62v47.882l19.27 10.512 128.486 3.506-112.714-60.74-35.04-1.16z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconIciclesFenceIcon })
);
