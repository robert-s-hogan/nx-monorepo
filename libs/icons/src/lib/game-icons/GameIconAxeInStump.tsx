import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconAxeInStumpIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'axe-in-stump'];
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
        d="M18.53 19.688V61.03c72.043 13.54 136.044 34.786 205.126 63.907v.032c12.827 4.56 21.984 12.106 26.844 21.186 4.94 9.23 5.268 19.71 1.75 28.563-6.227 15.67-24.807 25.573-45.78 20.374-10.345 19.927-23.93 39.623-42.407 58.937 11.14 7.005 22.513 13.16 34.187 18.532H307.5c20.216-54.396 32.977-109.693 38.344-160.937-104.518-15.22-203.62-46.673-297.813-91.938h-29.5zm317.095 229c-2.58 8.03-5.326 16.08-8.22 24.093h28.94v18.69h-161.69v-.22h-.593l-1.843-.844c-16.61-7.513-32.607-16.53-48.126-27.062l-3.156-2.125c-10.943 4.44-19.705 9.41-25.563 14.342-7.023 5.915-9.563 11.066-9.563 15.594 0 4.53 2.54 9.71 9.563 15.625 7.023 5.916 18.168 11.9 32.313 16.94 28.29 10.075 68.477 16.56 112.906 16.56 44.428 0 84.648-6.485 112.937-16.56 14.146-5.04 25.29-11.024 32.314-16.94 7.023-5.913 9.562-11.095 9.562-15.624 0-4.527-2.54-9.68-9.562-15.594-7.024-5.914-18.168-11.9-32.313-16.937-10.984-3.913-23.774-7.277-37.905-9.938zm-234.03 70.843c-5.044 82.403-40.128 102.984-71.44 125.095 20.57 4.536 43.68 8.43 66.94 7.563 25.204-9.846 51.443-36.288 70.405-57.47-8.154 19.774-19.6 39.024-34.563 58.376L106.97 492.53c44.538-7.387 86.41-17.235 129.25-46.374-7.942-20.833-13.978-41.123-18.22-61.187 16.816 26.81 35.478 52.765 57.125 76.655.03.033.064.06.094.094l31.967 30.655c25.176-31.428 43.748-65.536 58.563-99.875-.153 15.875-1.45 32.3-5 49.594 43.973 9.924 87.933 3.585 131.906 2.53-44.83-18.237-70.754-54.62-75.344-123.093-9.53 7.867-22.24 14.347-37.5 19.783-31.12 11.084-72.99 17.656-119.218 17.656-46.227 0-88.068-6.573-119.188-17.658-15.56-5.542-28.473-12.174-38.062-20.25-.6-.504-1.175-1.01-1.75-1.53z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconAxeInStumpIcon })
);
