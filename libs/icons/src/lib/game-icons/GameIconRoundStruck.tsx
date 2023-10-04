import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconRoundStruckIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'round-struck'];
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
        d="M444.098 19.16l-75.114 117.7-60.69-29.085L286.5 164.12c-11.048-3.82-22.37-5.51-33.496-5.257-12.552.285-24.847 3.042-36.21 7.955l-20.16-7.437 34.79-70.763L18.862 66.38l117.697 75.116-29.087 60.686 56.36 21.804c-8.05 23.45-6.478 48.13 2.763 69.5l-7.516 20.37-70.758-34.79-22.24 212.56 75.113-117.698 60.688 29.088 21.887-56.58c23.334 8.013 47.888 6.495 69.185-2.625l20.596 7.598-34.792 70.76 212.562 22.24-117.697-75.115 29.082-60.688-56.557-21.88c8.102-23.41 6.6-48.063-2.56-69.434l7.512-20.358 70.757 34.79 22.24-212.562zM253.326 177.482c3.33-.07 6.683.098 10.04.467-27.333 6.483-47.673 31.032-47.673 60.35 0 34.263 27.777 62.04 62.04 62.04 22.998 0 43.055-12.522 53.77-31.11-.914 4.94-2.313 9.866-4.24 14.717-15.896 39.996-60.943 59.42-100.94 43.524-39.994-15.894-59.42-60.94-43.524-100.937 11.92-29.994 40.24-48.418 70.526-49.05z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconRoundStruckIcon })
);
