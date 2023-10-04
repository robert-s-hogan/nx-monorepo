import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDrippingSwordIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'dripping-sword'];
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
        d="M495.52 21.816l-11.305 1.043-82.805 7.644-258.045 258.053c-15.554-22.716-27.955-46.57-35.414-70.16l-4.098-12.96-10.633 8.47c-19.564 15.59-31.423 31.095-36.855 46.65-5.43 15.554-3.958 30.888 1.717 44.084 9.88 22.977 30.975 40.096 51.26 52.862-24.534 31.35-52.64 56.51-82.09 80.21l-3.486 2.808v4.474c0 14.772 4.732 27.31 13.584 35.684 8.85 8.375 21.067 12.126 34.222 12.125h4.7l2.802-3.774c22.927-30.88 48.28-59.133 79.71-82.04 10.91 17.653 26.147 38.022 48.323 48.664 12.948 6.214 28.392 8.625 44.922 4.35 16.53-4.275 33.916-14.868 52.42-33.373l10.88-10.88-14.672-4.637c-25.307-7.998-49.583-21.334-72.77-37.787l32.987-32.988c-.656.765-1.31 1.558-1.963 2.412l3.89-4.34 2.78-2.78c16.614-13.837 33.616 1.5 43.3 59.98 6.67-64.68 35.053-74.725 38.56-47.342V502.98h18.687V316.715l.175 1.828c4.48-49.957 29.634-39.048 33.996 24.996v152.835h18.69v-69.408c5.9-43.874 38.74-54.97 47.68-10.248l-.295 84.575 18.688.066 1.36-390.126 9.097-89.418zm-20.89 20.696l-6.53 64.162L199.223 375.56l8.58 6.467c22.645 17.077 46.745 31.5 72.267 41.534-12.25 10.186-23.203 15.888-32.72 18.35-12.33 3.19-22.537 1.512-32.16-3.105-19.24-9.235-35.212-31.906-45.618-49.928l-5.017-8.69-8.31 5.624c-36.06 24.4-64.17 55.143-88.975 88.002-7.447-.676-13.15-2.994-17.075-6.708-4.023-3.807-6.73-9.497-7.435-17.99 31.122-25.274 61.537-52.874 87.783-88.485l6.2-8.413-9.05-5.225c-21.07-12.165-44.11-30.36-52.443-49.736-4.166-9.688-5.14-19.37-1.242-30.537 3.067-8.784 9.632-18.68 20.832-29.36 9.388 24.544 23.015 48.677 39.63 71.308l6.44 8.775 268.942-268.95 64.777-5.98zM428.57 75.064L164.334 339.3l13.215 13.216L441.786 88.28l-13.215-13.216zM450.75 200.75c7.306 0 14.617 7.55 14.617 18.78s-7.308 18.78-14.617 18.78c-7.306 0-14.617-7.552-14.617-18.78 0-11.23 7.308-18.78 14.617-18.78zm-20.535 49.844c3.373 0 7.69 2.54 11.73 9.53 4.042 6.987 6.955 17.67 6.955 29.595 0 11.923-2.912 22.607-6.953 29.594-4.04 6.988-8.357 9.53-11.732 9.53-3.373 0-7.69-2.542-11.73-9.53-4.042-6.988-6.956-17.67-6.956-29.595 0-11.926 2.913-22.61 6.954-29.597 4.042-6.988 8.356-9.53 11.73-9.53z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDrippingSwordIcon })
);
