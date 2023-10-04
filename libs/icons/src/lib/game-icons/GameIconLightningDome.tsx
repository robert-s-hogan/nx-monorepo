import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLightningDomeIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'lightning-dome'];
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
        d="M256 55c-68.5 0-126.7 50.7-167.63 116.2C47.44 236.7 23 317.7 23 384v3.7l2.64 2.7C76.47 441.2 166.4 465 256 465c89.6 0 179.5-23.8 230.4-74.6l2.6-2.7V384c0-66.2-24.4-147.3-65.4-212.8C382.7 105.7 324.5 55 256 55zm0 18c39.4 0 76.3 19.88 108.1 51.5l-15.2 92.1 26.7 12.3-37.2 116.6 74-120.1-29.4-24.2 16-34.6c3.2 4.6 6.4 9.3 9.4 14.2C446.6 242 470 319 470.9 380.1 425.1 423.7 340.7 447 256 447c-84.7 0-169.08-23.3-214.91-66.9.83-54 19.16-120.4 49.8-177.4l48.81 44.6-42.09 3.5L177 355.4l-40.1-92 38.7 15.5-57.9-119c29.5-40.4 65.5-70.94 105.1-82.19l-17 77.59 39.3-7.1-32.3 95.6 35.1-12.7.6 123L291.4 189l-38.6 15.5 30.2-97-34.4 4.2 5.4-38.68c.7-.01 1.3-.02 2-.02z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLightningDomeIcon })
);
