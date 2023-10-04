import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconMagicShieldIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'magic-shield'];
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
        d="M57.78 23.135c-1.517 29.085-2.193 55.608-2.266 80.316 6.56-2.716 13.703-4.333 21.228-4.333 31.245 0 56.883 25.64 56.883 56.887 0 31.246-25.777 56.3-56.883 56.3-6.068 0-11.95-1.003-17.488-2.77C71.906 332.82 108.064 376.35 147.668 401.9c20.677 13.34 42.986 21.7 64.268 33.245 17.444 9.463 34.177 21.525 47.42 40.127 13.23-18.597 29.925-30.658 47.324-40.122 21.226-11.545 43.46-19.904 64.064-33.242 39.46-25.543 75.488-69.07 88.135-192.324-5.32 1.708-10.974 2.723-16.907 2.723-31.107 0-56.88-25.058-56.88-56.3 0-31.244 25.634-56.888 56.88-56.888 7.63 0 14.745 1.697 21.23 4.508-.07-24.757-.745-51.334-2.265-80.49-59.488 13-130.78 19.266-201.5 19.888h-.163c-70.718-.62-142.008-6.888-201.496-19.888zm304.124 39.32l-27.117 93.18-17.945-5.22 11.504-39.532-85.116 63.646-11.19-14.97 129.864-97.105zm-205.394 1.01l81.732 59.512-11 15.107-34.338-25.004 34.79 103.514-17.714 5.955-53.47-159.085zm140.486 99.652l129.383 97.95-98.25-.48.09-18.69 42.15.208-84.653-64.087 11.28-14.9zm-122.357 37.71l10.83 15.228-36.206 25.754 104.898-.17.03 18.69-163.577.262 84.024-59.766zm117.79 21l17.806 5.675-49.39 155.008-31.248-96.46 17.777-5.76 13.324 41.124 31.73-99.586z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconMagicShieldIcon })
);
