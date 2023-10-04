import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconGongIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'gong'];
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
        d="M25 34.36v40.77l58 43.47h346l58-43.47V34.36l-67.8 54.27H92.84zm439 80.44l-29 21.8h-1v341h30zm-414 1.6v361.2h30v-341h-3zm84.7 20.2l26.4 66c4.6-4.2 9.6-8.1 14.8-11.6l-21.8-54.4zm223.2 0L336.1 191c5.2 3.5 10.2 7.4 14.8 11.6l26.4-66zm-101.9 48c-66.1 0-119 49.9-119 111s52.9 111 119 111c15.2 0 29.6-2.6 42.9-7.4l-66.1-87.4c-11.9-.5-23.4-6.1-31.1-16.2-13.6-17.9-10-43.8 8-57.4 18-13.6 43.8-10 57.4 8 7.7 10.1 9.9 22.8 7.1 34.3l68.8 90.9c19.9-19.9 32-46.6 32-75.8 0-61.1-52.9-111-119-111zm-21.7 63.2c-4.8.1-9.6 1.6-13.8 4.8-10.2 7.7-12.1 22-4.4 32.2 7.7 10.2 22 12.2 32.2 4.5 10.2-7.8 12.2-22.1 4.5-32.3-4.6-6.1-11.5-9.2-18.5-9.2zm30.8 50.3c-1.8 2-3.7 3.8-5.9 5.5-2.2 1.7-4.5 3-6.9 4.2l111 146.7 12.8-9.6z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconGongIcon })
);
