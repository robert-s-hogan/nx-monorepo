import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSawedOffShotgunIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'sawed-off-shotgun'];
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
        d="M472.133 19.812L162.52 197.03l21.996 34.133L483.97 38.183l-11.837-18.37zm-71.897 93.748l-117.627 75.8 16.35 10.41c45.98-32.88 82.61-61.844 100.483-82.544l.793-3.666zm-134.283 86.535l-100.125 64.523 20.48 12.13c34.023-22.565 66.99-44.805 96.788-65.74l-17.143-10.913zm-118.826 6.277l-6.227 4.012c-6.594 19.98-1.4 36.31 7.81 43.852l20.677-13.323-22.26-34.54zm-23.71 42.045c-5.512 5.532-12.928 13.198-22.288 23.64-17.225 19.212-36.353 43.545-43.47 60.405-18.543 43.928-15.34 97.99-18 147.736 2.41 7.08 5.408 9.92 8.197 11.137 2.96 1.292 6.896 1.194 11.74-.824 9.393-3.91 19.696-15.595 22.262-25.282-.174-2.232-.92-12.117-1.237-25.643-.356-15.14-.246-33.002 2.63-46.297 5.15-23.82 13.395-49.19 30.268-69.05 10.193-11.993 27.132-22.48 41.92-30.848 4.68-2.65 8.665-4.724 12.415-6.65-19.88-12.29-36.656-17.7-44.437-38.323zm-57.75 37.793l-37.638 9.64L43.6 320.01c5.432-11.014 13.33-22.587 22.064-33.8zm125.86 8.82l-1.154.532s-6.765 3.116-16.096 8.043c-.25 10.99-5.59 19.736-12.617 25.5-5.492 4.505-12.02 6.843-17.803 6.695-4.355-.112-8.346-1.367-12.013-4.55-1.8 1.62-3.36 3.18-4.606 4.644-2.444 2.876-4.69 5.96-6.77 9.197 6.78 5.595 14.91 8.5 22.928 8.704 10.763.276 21.213-3.827 29.68-10.773 12.754-10.462 20.973-28.17 18.45-47.99z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSawedOffShotgunIcon })
);
