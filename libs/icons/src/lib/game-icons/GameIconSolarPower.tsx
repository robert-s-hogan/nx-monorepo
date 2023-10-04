import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSolarPowerIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'solar-power'];
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
        d="M219.615 401.84h16v88.06h-16v-88.06zm219.94-271.6l21.83-13.18-21.82-13.16 16-19.8-25-4.88 8.25-24.12-25.19 4-.46-25.49-22.28 12.29-9.18-23.8-16.7 19.24-16.78-19.24-9.22 23.8-22.3-12.31-.46 25.49-25.19-4 8.25 24.12-25 4.88 16 19.8-21.83 13.18 21.83 13.14h33.41l29.29 76.34 12-13.76 16.74 19.24 9.17-23.76 22.3 12.31.46-25.49 25.19 4-8.28-24.18 25-4.88zm-254.55 46.31h-91l31 80.85h91zm108.25 0h-91l30.94 80.85h91zm-70.81 97.42h-91l30.94 80.85h91zm108.25 0h-91l30.94 80.85h91zm73.89 111.87h-262.22L50.615 146.2h262.1zm-19.69-15l-43.31-112.87-37.28-97.42H70.785l80.47 210.27h233.68z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSolarPowerIcon })
);
