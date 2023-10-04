import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCrucifixIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'crucifix'];
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
        d="M369.842 28.045l-56.086 69.44 33.695 21.06 55.35-68.527-32.957-21.973zM194.64 44.265h.002L172.63 77.28l240.73 150.455 22.01-33.015-73.81-46.132zM407 92.843v-20.52l-46 53.653 12.887 8.283zm-238 3.394v26.774l67.117 41.948 14.37-17.792L169 96.238zm96.863 60.54L45.2 429.983l32.958 21.973L299.56 177.838l-33.697-21.06zm56.29 35.18v26.774L407 271.763v-26.774l-84.848-53.03zM304 204.614L88.848 470.38v18.462L304 224v-19.387zm135 17.112l-14 21v15.55l14-21zM41 448.816V475.1l30 19.375v-25.66z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCrucifixIcon })
);
