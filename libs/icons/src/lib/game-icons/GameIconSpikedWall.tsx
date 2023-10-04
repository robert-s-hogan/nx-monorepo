import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSpikedWallIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'spiked-wall'];
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
        d="M25 41v446h46V41H25zm416 0v446h46V41h-46zM89 76.49v39.01L147.5 96 89 76.49zm334 0L364.5 96l58.5 19.5V76.49zM251.8 125.7c-17.9 2.4-34.1 23.3-34.1 50.4 0 14.9 5.2 28.2 12.8 37.3l9 10.9-13.9 2.6c-9.9 1.9-17 7.1-23.2 15.5-6.2 8.5-10.9 20.3-14.2 33.9-6.1 24.6-7.4 54.7-7.6 81.3h32.8l9 120.4c22.8 5.2 47.1 5 69.1 0l8-120.4h31.1c0-26.9-.4-57.4-5.8-82.3-3-13.6-7.5-25.4-13.7-33.8-6.3-8.4-13.8-13.5-24.9-15.2L272 224l9-11.2c7.3-9.1 12.1-22.2 12.1-36.7 0-28.9-18.1-50.3-37.7-50.3l-3.6-.1zM89 140.5v39l58.5-19.5L89 140.5zm334 0L364.5 160l58.5 19.5v-39zm-334 64v39l58.5-19.5L89 204.5zm334 0L364.5 224l58.5 19.5v-39zm-334 64v39l58.5-19.5L89 268.5zm334 0L364.5 288l58.5 19.5v-39zm-334 64v39l58.5-19.5L89 332.5zm334 0L364.5 352l58.5 19.5v-39zm-334 64v39l58.5-19.5L89 396.5zm334 0L364.5 416l58.5 19.5v-39z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSpikedWallIcon })
);
