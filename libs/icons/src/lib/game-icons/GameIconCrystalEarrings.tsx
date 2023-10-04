import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCrystalEarringsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'crystal-earrings'];
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
        d="M369.4 33.6c-12.3.3-25.6 5.1-38.8 15L341.4 63c14.4-10.8 26.5-12.8 35.9-10.7 9.3 2.1 16.6 8.5 20.5 17.2 7.9 17.4 3.4 43.3-33.1 57.9l-5.7 2.3v45.1h18v-33.2c38.7-18.3 48.8-54.1 37.2-79.5-6.1-13.4-17.8-24-33-27.4-3.8-.8-7.7-1.2-11.8-1.1zm-224 .04c-12.3.32-25.6 5.07-38.8 14.96L117.4 63c14.4-10.81 26.5-12.77 35.9-10.67 9.3 2.1 16.6 8.51 20.5 17.19 7.9 17.37 3.4 43.28-33.1 57.88l-5.7 2.3v45.1h18v-33.2c38.7-18.3 48.8-54.1 37.2-79.52-6.1-13.32-17.8-23.91-33-27.31-3.8-.85-7.7-1.24-11.8-1.13zM89 192.8v30h110v-30H89zm224 0v30h110v-30H313zm-187.7 48l-55.6 69.5L144 496l74.3-185.7-55.6-69.5h-37.4zm224 0l-55.6 69.5L368 496l74.3-185.7-55.6-69.5h-37.4zM135 257.4v31.4l-31.4 7.8 31.4-39.2zm18 0l31.3 39.2-31.3-7.8v-31.4zm206 0v31.4l-31.4 7.8 31.4-39.2zm18 0l31.3 39.2-31.3-7.8v-31.4zm-242 49.9v117.8L92.2 318l42.8-10.7zm18 0l42.8 10.7L153 425.1V307.3zm206 0v117.8L316.2 318l42.8-10.7zm18 0l42.8 10.7L377 425.1V307.3z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCrystalEarringsIcon })
);
