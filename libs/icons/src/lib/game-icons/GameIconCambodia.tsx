import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCambodiaIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'cambodia'];
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
        d="M19.823 176.292c52.634-142.707 221.115-88.048 332.738-44.2l-13.409-41.716c41.185-20.775 48.6-23.357 81.943 3.973l59.098-35.757-15.892 52.642c44.039 50.132 22.324 108.155 23.838 163.39l-155.167 71.975 37.964 75.522c-21.918 3.053-62.448-14.29-101.311-8.443l-11.905 37.608-119.7 2.122C50.901 387.048 33.051 278.67 19.822 176.292z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCambodiaIcon })
);
