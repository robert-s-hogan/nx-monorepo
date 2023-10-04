import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconIntricateNecklaceIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'intricate-necklace'];
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
        d="M405.3 64.85h2.4c17.6.2 35.8 8.5 52.2 25.5C583.4 224.7 304.2 294.7 318.6 447.2c-18.8-11.5-31.9-24.7-40.2-38.9l42-24.2v-74.4l-23.5-13.6c19.9-24.2 48.8-45.8 82.9-60.8C469.3 195.6 452 48.46 340 112.5c16.5-30.46 40.3-47.18 65.3-47.65zm-298.6 0c25 .47 48.8 17.19 65.3 47.65-112-64.04-129.3 83.1-39.8 122.8 34.1 15 63 36.6 82.9 60.8l-23.5 13.6v74.4l42 24.2c-8.3 14.2-21.4 27.4-40.2 38.9C207.8 294.7-71.4 224.7 52.1 90.36c16.4-17 34.6-25.3 52.2-25.5h2.4zm205.8 58.65l15 10c-17.5 26.3-44.5 40-71.5 40s-54-13.7-71.5-40l15-10c14.5 21.7 35.5 32 56.5 32s42-10.3 56.5-32zm124.9 160.2c-24.1 47.8-49.4 84.8-62.9 156.3-4.8-16.6-8.1-34.2-9.3-53 11.1-37 38.7-73.2 72.2-103.3zm-362.8 0c33.5 30.1 61.1 66.3 72.2 103.3-1.2 18.8-4.5 36.4-9.3 53-13.5-71.5-38.8-108.5-62.9-156.3zm181.4 9.6l46.4 26.8v53.6L256 400.5l-46.4-26.8v-53.6z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconIntricateNecklaceIcon })
);
