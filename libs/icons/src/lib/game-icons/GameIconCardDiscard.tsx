import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCardDiscardIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'card-discard'];
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
        d="M150.79 479.797l-85.27-185.08c-3.13-6.79-.15-14.862 6.634-17.993l129.163-59.51c6.783-3.12 14.862-.15 17.987 6.646l85.283 185.067c3.13 6.802.15 14.863-6.646 18L168.79 486.43c-6.795 3.144-14.868.15-18-6.633zm26.17-69.31l15.318-44.522 44.522 15.32 7.66-22.253-44.523-15.318 15.325-44.522-22.252-7.66-15.325 44.516-44.515-15.324-7.66 22.258 44.516 15.324-15.324 44.522zm106.07-211.05c47.9-85.625-53.11-105.304-102.586-62.593l-38.9 51.353C105.95 210 97.853 175.98 109.226 158.424l54.106-73.515 97.158-52.146c7.108-5.2 17.838-8.133 32.767-8.445l194.467 1.463.866 112.044-107.304-7.725c1.818 43.394-42.734 53.08-66.683 106.905l-13.813 46.38c-30.217-10.16-41.29-34.367-17.76-83.95zm-129.828-3.077l39.046-51.33c12.434-10.477 29.51-17.675 46.92-17.375-15.264 16.008-20.158 25.557-23.475 39.046-8 19.775-17.74 29.69-30.366 23.296-10.712 10.322-21.412 14.87-32.125 6.364z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCardDiscardIcon })
);
