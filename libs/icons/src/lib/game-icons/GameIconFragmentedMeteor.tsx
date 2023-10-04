import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFragmentedMeteorIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'fragmented-meteor'];
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
        d="M21.89 14.13L219.02 248.454l-168.37-153.8 166.03 190.222-52.178 3.793 70.33 46.832-50.58 13.225 44.18 5.152-59.264 43.962 95.676-4.9-19.037 66.435 64.646-52.75 18.363 83.873 18.744-56.713 9.96 35.684 5.628-50.855 53.253 49.696-12.945-80.61 65.406 8.312-39.702-45.69 65.54-41.302-77.66-3.057 36.023-36.22-54.777 23.732 10.576-69.498-54.497 42.585-27.457-71.253-11.863 44.592L111.715 45.004 212.557 183.22 21.893 14.13h-.002zm305.016 181.18v-.005h-.002l.002.004zm34.596 101.266l36.87 45.13-36.026 13.85 1.306-23.154-52.257-16.94 50.107-18.886zm-41.326 35.05l-2.127 49.288-41.003-12.37 8.736-27.437 34.393-9.48zm17.543 37.212l42.135 14.045-40.798 20.734-1.338-34.78z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFragmentedMeteorIcon })
);
