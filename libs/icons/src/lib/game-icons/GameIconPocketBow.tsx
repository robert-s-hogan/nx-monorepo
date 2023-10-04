import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPocketBowIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'pocket-bow'];
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
        d="M77.85 11.848l9.535 70.648-69.418-11.174 41.508 56.07-11.127 322.715c-11.712 13.235-20.716 28.85-25.823 47.914 74.198-55.834 152.88-71.602 223.606-101.383l-35.913-35.914c-53.122 25.232-105.774 42.49-142.547 71.347l9.674-280.54 8.06 10.888 2.2 4.47h71.304L358.723 394.03c15.618-13.627 29.605-28.41 42.66-44.645l-229.877-193.78V84.226l-11.86-9.165 273.594-10.66c-29.99 36.36-46.84 89.07-71.39 142.416l36.558 36.56c29.22-70.24 45.014-148.09 100.262-221.507-18.54 4.97-33.69 13.015-46.604 23.603l-.02-.506-315.437 12.29-58.76-45.41zm24.613 42.638l50.355 38.916v54.795H99.236l-.607-.146-38.357-50.988 49 7.89-6.81-50.466zm248.103 167.48c-8.162 13.275-17.044 25.835-26.586 37.727l30.727 25.903c11.16-8.75 22.568-17.176 34.06-25.432l-38.2-38.2zm100.006 89.74C414.826 368.52 375.184 412.43 315.88 447.67c59.143 20.683 118.488 37.302 178.8 43.98-8.706-60.66-23.977-120.562-44.108-179.94zm-184.08 5.774c-13.42 10.98-27.58 21.186-42.414 30.674l37.47 37.47c8.748-14.57 18.62-27.954 29.327-40.43l-24.383-27.714z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPocketBowIcon })
);
