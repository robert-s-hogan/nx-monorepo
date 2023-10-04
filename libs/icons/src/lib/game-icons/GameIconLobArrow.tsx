import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLobArrowIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'lob-arrow'];
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
        d="M269.03 14.47c-110.473 1.825-290.752 92.88-243.5 450.5 0-210.674 118.628-315.626 181.814-315.626 41.72 0 70.595 34.945 73.812 102.75h-40.592l7.218 13.687 114.94 218.283 8.25 15.687 8.28-15.688 114.938-218.28 7.218-13.688H441.97C438.38 104.607 361.12 15.24 274.25 14.47c-1.717-.017-3.465-.03-5.22 0zm-4.592 44.593c85.555-1.117 146.173 75.667 148.687 211.718h57.313L371 459.657 271.53 270.78h65.595c-2.322-140.208-60.25-201.84-171.72-180.25 35.16-20.848 68.674-31.07 99.032-31.468z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLobArrowIcon })
);
