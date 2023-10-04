import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBoltEyeIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'bolt-eye'];
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
        d="M253.12 66.45c-86.344-.825-168.94 54.43-231.636 157.583 142.248 147.99 316.073 144.962 471.508 0-74.337-106.54-158.758-156.806-239.87-157.582zm11.734 21.282c57.37 3.81 102.726 51.543 102.726 109.877 0 60.822-49.306 110.126-110.13 110.126-60.82 0-110.126-49.304-110.126-110.127 0-39.058 20.334-73.364 50.99-92.917l39.778 64.233-60.69 6.746 124.23 109.066-44.343-89.78 60.33-7.673-52.766-99.553zm-243.37 173.48c6.764 25.905 19.346 48.295 36.182 67.142L34.148 363.63 49.698 374l21.42-32.13c9.303 8.407 19.537 15.958 30.534 22.634l-18.06 38.81 16.945 7.885 17.522-37.656c12.11 6.054 24.937 11.168 38.274 15.345l-13.64 40.816 17.724 5.925 13.947-41.738c13.677 3.323 27.766 5.714 42.067 7.166l-2.315 42.582 18.66 1.015 2.297-42.24c14.223.63 28.56.35 42.826-.848l3.83 43.338 18.614-1.644-3.867-43.776c14.068-1.983 27.98-4.87 41.54-8.67l14.883 44.698 17.733-5.904-14.78-44.395c12.946-4.517 25.475-9.915 37.413-16.19l19.543 42.125 16.952-7.866-20.225-43.594c10.597-6.627 20.6-14.024 29.87-22.194L463.688 374l15.56-10.35-26.17-39.35c16.938-17.922 30.633-38.94 39.912-63.09-155.435 133.35-329.26 136.136-471.508 0z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBoltEyeIcon })
);
