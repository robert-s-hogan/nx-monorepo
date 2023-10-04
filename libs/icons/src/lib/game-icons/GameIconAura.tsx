import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconAuraIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'aura'];
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
        d="M320.938 13.28c-16.646 34.584-38.466 60.157-63.094 60.157-24.522 0-47.035-25.275-63.656-59.593.366 39.358-9.71 90.884-30.938 105.125-21.228 14.24-49.64-12.002-78.844-32.126 17.455 34.04 42.095 67.5 29.78 92.28-12.21 24.576-59.172 35.96-92.874 35.626 29.338 19.29 78.842 45.803 78.844 74.188.002 28.384-49.504 53.71-78.844 73 33.702-.333 80.663 11.612 92.876 36.187 12.227 24.61-9.03 56.31-33.75 85.563 44.826-15.413 65.142-5.735 85.374 10.812h31.75c-42.74-35.413-72.062-107.828-72.062-191.563-.002-118.62 58.92-214.906 131.406-214.906 72.488 0 131.406 96.29 131.406 214.907 0 83.74-29.317 156.153-72.062 191.563h27.313c19.847-14.62 39.796-25.65 89.687-9.28-26.233-30.264-42.2-62.484-29.97-87.095 12.257-24.665 56.658-36.612 90.533-36.188-29.4-19.297-75.344-44.584-75.344-73 0-28.415 45.943-54.89 75.342-74.187-33.874.424-78.273-10.962-90.53-35.625-12.315-24.78 9.982-58.24 27.437-92.28-29.202 20.12-57.583 46.385-78.845 32.124-21.262-14.263-31.382-66.13-30.938-105.69zm-68.97 93.75c-19.56 2.543-37.343 25.564-37.343 55.407 0 16.447 5.67 30.986 14 41.032l10.156 12.218-15.593 2.937c-10.815 2.035-18.743 7.737-25.53 17.063-6.79 9.325-11.984 22.344-15.626 37.343-6.585 27.128-8.078 60.24-8.31 89.47h36.093l.656 8.656 9.124 122.563h76.187l8.095-122.5.563-8.72h34.375c-.026-29.592-.44-63.166-6.407-90.5-3.295-15.095-8.287-28.096-15.156-37.313-6.87-9.216-15.133-14.897-27.28-16.78l-15.94-2.47 10.064-12.593c7.97-9.996 13.375-24.36 13.375-40.406-.002-31.817-19.884-55.313-41.44-55.313-2.54 0-3.96-.103-4.03-.094h-.03z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconAuraIcon })
);
