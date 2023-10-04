import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDrillIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'drill'];
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
        d="M48.148 49c-9 0-14.776 3.864-19.793 11.29-5.017 7.424-8.323 18.56-9.234 30.4-.91 11.838.52 24.33 3.814 34.214 3.079 9.236 7.783 15.602 12.288 18.367 28.96 2.58 66.314 2.689 82.671 28.96 11.82 42.442-15.348 94.133-25.816 130.769h74.55l-5.064-89.941 23.168-4.729 14.12-58.926 64.296 7.219V49zm233 0v98.916l30-.453V49zm48 16v62h30V65zm-274 2h178v60h-178zm322 .525v56.95l46-11.5v-33.95zM73.148 85v24h142V85zm368 0v18h52V85h-9zm-228.5 84.064l-8.841 36.907 17.925-1.532c-1.87-15.08 1.338-23.637 10.96-33.125zM89.148 321v32H52.965l-20 30h244.879l-11.823-30h-98.873v-32zm-64 80v62h237.608l16.584-62z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDrillIcon })
);
