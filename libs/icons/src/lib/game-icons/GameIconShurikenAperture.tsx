import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconShurikenApertureIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'shuriken-aperture'];
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
        d="M219.645 21.475c-86.323 77.557-105.59 201.658-54.65 300.066-50.127-25.673-138.8-86.724-138.8-86.724 45.85 108.476 160.455 167.27 272.284 148.418-38.472 38.54-115.353 104.705-115.353 104.705 115.886-14.46 202.25-108.08 215.535-219.26 27.34 50.296 65.844 152.21 65.844 152.21 23.61-111.875-33.285-223.592-130.53-274.11 51.594-5.78 148.903-10.66 148.903-10.66-99.39-57.33-222.258-38.557-300.13 38.646 9.29-53.964 36.895-153.29 36.895-153.29zm58.146 133.713l8.468 16.66c-19.188 9.75-33.34 25.41-41.39 43.62 16.735-9.672 35.52-14.51 54.304-14.507 27.74.007 55.472 10.557 76.568 31.638l-13.21 13.218c-14.463-14.45-32.598-22.938-51.378-25.468 35.685 31.958 47.01 85.173 24.352 129.8l-16.664-8.46c10.288-20.263 12.17-42.564 6.93-62.94-17.864 45.488-65.192 74.762-115.713 67.762l2.566-18.512c20.953 2.903 41.172-1.655 58.006-11.64-3.377-.222-6.673-.75-9.853-1.58-44.683-8.246-81.18-44.32-87.76-91.66l18.51-2.573c3.092 22.242 14.056 41.433 29.696 55.135-10.657-47.194 11.486-97.58 56.568-120.493zm-3.626 73.238c-19.27 0-34.69 15.418-34.69 34.69 0 16.075 10.732 29.462 25.475 33.464 3.528.61 7.12 1.01 10.755 1.19 18.544-.798 33.15-15.9 33.15-34.653 0-19.273-15.42-34.69-34.69-34.69z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconShurikenApertureIcon })
);
