import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFurnaceIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'furnace'];
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
        d="M183.8 25l-13.4 94h171.2l-13.4-94H183.8zm-79.5 112L73.82 487H438.2l-30.5-350H104.3zm30.7 62h242v48h32v114h-32v48H135V199zm18 18v174h206v-30h-16V247h16v-30H153zm30 16h146v112H183V233zm74.2 10.7c-6.5 22-24.5 43.6-13.6 66.1-17.8-9.5-20.2-25.1-23.4-40.6-2.2 15.5-9.3 30.8-6.8 45.4-6.3-4.6-11.6-10.9-18.2-18 7 28.2 7.9 35.8 31.8 37.4h51.5c32.1-3.6 26.8-21.3 41-38.2-12.7.4-18.9 4.5-25.8 12.3 10.3-18.7-1.5-18.9-2.7-34.3-5.1 9.8-16.9 20.7-23.3 18.6-8.5-2.6-9.3-30.7-10.5-48.7zM361 265v78h30v-78h-30zM183 432h18v32h-18v-32zm64 0h18v32h-18v-32zm64 0h18v32h-18v-32z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFurnaceIcon })
);
