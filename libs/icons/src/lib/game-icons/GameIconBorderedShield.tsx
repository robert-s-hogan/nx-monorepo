import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBorderedShieldIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'bordered-shield'];
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
        d="M50.807 26.285c-1.105 42.86 2.978 85.91 11.98 128.55l50.606-11.388c-2.658-19.543-4.11-39.265-3.6-59.002l.236-9.103h49.402V26.285H50.807zm306.607 0v49.057h45.904l.23 9.107c.498 19.563-.492 39.338-3.058 59l50.086 11.34c9.048-42.643 13.05-85.63 11.96-128.505H357.415zm-131.65 1.354v45.786h65.056V27.64h-65.056zM178.12 43.335V94.03H128.48c.084 18.322 1.696 36.784 4.56 55.216l1.34 8.633-50.216 11.298c3.15 13.61 6.88 27.174 11.172 40.677l41.1-6.197 50.804 107.07-31.744 28.473c7.095 11.418 14.626 22.74 22.615 33.952l42.496-31.466 5.634 6.912c9.656 11.84 19.914 23.57 30.766 34.93 10.873-11.26 21.116-22.59 30.664-34.335l5.625-6.922 41.82 30.886c8.05-11.315 15.64-22.748 22.788-34.277l-31.383-28.15 50.803-107.072 40.627 6.127c4.308-13.503 8.054-27.07 11.22-40.68l-49.636-11.24 1.347-8.627c2.855-18.264 4.06-36.774 4.023-55.207h-46.183V43.337h-29.22v48.78h-102.43v-48.78h-28.958zm-13.915 79.252h185.41l.22 9.12c1.746 73.04-27.91 137.976-86.116 199.905l-6.798 7.23-6.81-7.216c-58.558-62.066-87.895-126.956-86.128-199.92l.22-9.12zm18.48 18.69c.818 61.19 25.098 115.615 74.213 170.062 48.85-54.348 73.37-108.852 74.23-170.063H182.685zm-57.18 82.93l-54.216 8.173 52.335 110.306 40.752-36.553-38.873-81.926zm262.76 0l-38.874 81.925 40.753 36.553L442.48 232.38l-54.216-8.173zM217.52 367.227l-42.704 31.62c23.914 32.71 51.31 64.504 82.15 95.236 30.733-30.743 57.7-62.44 81.548-95.19l-42.15-31.128c-10.264 12.222-20.992 24.175-32.792 35.978l-6.597 6.598-6.608-6.586c-11.93-11.89-22.64-24.246-32.846-36.53z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBorderedShieldIcon })
);
