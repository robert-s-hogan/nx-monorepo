import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDolmenIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'dolmen'];
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
        d="M436 26.98L285.9 63.63l-.5.1c-55.8 7.67-118.7 11.48-199.56 4.93L19.18 116.4l54.99 40.2L482.2 125l10.6-29.75c-4.3-5.21-7.9-10.15-11.7-15.12l-60.4 23.77-43.2-11.41 94-26.19C462.1 52.2 452 38.8 436 26.98zM290.7 90.3l-7.2 21.7H136.3l-57.42 5.3 26.72-21.32zm169.6 54.8l-40 1.1-17.1 90-14.5 20.9-15.5-41.6 30-68.9-9.7.3-39.2 60.4c-3.1 87.2-22.3 176.8-7.6 265.4 19 7.3 40.7 9.7 61.5 10.2L401 358.3l22.5-33 1.5 95.8 27.5 60.1c10.8-1.1 21.6-2.5 34.4-4.9l-36.1-154.2zm-330.7 28l-34.48 2.7-38.78 219 9.33 77.9c6.7 4.3 13.59 6.6 20.5 8.1l-8.99-101.6 12.18-43.3 2.16 81.7 15.38 66.5c22.6 2.4 45.9.1 66.4-5.1l-5.6-173.6z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDolmenIcon })
);
