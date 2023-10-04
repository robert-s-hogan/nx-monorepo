import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIcon3dStairsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', '3d-stairs'];
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
        d="M325.944 61.815l-98.26 24.566 147.158 66.891 98.263-24.566zM209.787 97.687v43.488l155.355 70.617v-43.489zM491 142.475l-108.159 27.04v62.929c-20.977 5.241-41.953 10.488-62.929 15.732v62.929c-20.977 5.241-41.953 10.488-62.929 15.732v62.93c-20.977 5.24-41.952 10.487-62.929 15.731v44.687L491 375.947zm-290.914 13.733l-35.332 8.834 147.16 66.891 35.334-8.834zm-53.228 20.14v43.488l155.355 70.617v-43.489zm-9.7 58.521l-35.333 8.834 147.16 66.891 35.334-8.834zm-53.23 20.14v43.488l155.357 70.617v-43.489zm-9.7 58.522l-35.331 8.834 147.159 66.89 35.334-8.834zM21 333.67v43.487l155.356 70.617v-43.488z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIcon3dStairsIcon })
);
