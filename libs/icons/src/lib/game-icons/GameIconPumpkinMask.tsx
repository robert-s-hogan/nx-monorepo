import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPumpkinMaskIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'pumpkin-mask'];
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
        d="M256.156 16.875c-48.954 107.457-128.398 80.9-139.312 36.97-57.82 42.426-95.53 110.673-95.53 187.56-.002 128.577 104.928 232.94 234.217 232.94 129.29 0 234.22-104.363 234.22-232.94 0-76.278-37.273-143.847-94.313-186.343-11.27 42.068-78.266 67.493-139.28-38.187zM134.686 134.53c9.528-.102 20.15 2.023 30.5 6.5 25.48 11.024 39.598 32.274 31.5 47.47-8.095 15.196-35.33 18.585-60.81 7.563-25.48-11.023-39.567-32.304-31.47-47.5 4.808-9.023 16.358-13.88 30.28-14.032zm248.97 1.19c14.907-.366 27.44 4.532 32.5 14.03 8.097 15.196-6.02 36.446-31.5 47.47-25.48 11.02-52.684 7.632-60.78-7.564-8.098-15.196 5.988-36.446 31.468-47.47 9.555-4.132 19.368-6.25 28.312-6.467zM151.75 228.562L205 316.719l54.5-77.5 40.438 80.56 65.406-89.936 34.812 69.25 73.375-62.844c-1.208 56.223-38.25 133.637-83.78 165.344l-23.344-68.03-56.125 93.186-56.467-89.656-70.094 83.594-53.25-91.72-17.407 64.344c-46.367-40.18-69.01-99.95-66.907-158.593l54.157 68.186 51.437-74.344z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPumpkinMaskIcon })
);
