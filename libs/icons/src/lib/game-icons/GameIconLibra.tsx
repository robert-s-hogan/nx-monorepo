import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLibraIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'libra'];
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
        d="M34.303 381.03h443.23v82.957H34.303V381.03zm258.44-66.852v-51.04c24.66-13.395 40.927-38.56 40.927-67.453 0-42.325-34.9-76.633-77.933-76.633-43.033 0-77.928 34.308-77.928 76.633 0 28.546 15.868 53.446 39.412 66.633v51.86l-.306 31.57H34.298v-82.95h66.225c-9.99-20.48-15.558-43.28-15.558-67.297 0-89.033 76.53-161.215 170.94-161.215s170.94 72.182 170.94 161.216c0 24.02-5.568 46.818-15.557 67.297h66.23v82.95H292.753l-.01-31.57z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLibraIcon })
);
