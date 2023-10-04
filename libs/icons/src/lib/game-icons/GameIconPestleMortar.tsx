import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPestleMortarIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'pestle-mortar'];
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
        d="M454.26 312.874C454.26 402.782 365.33 476 256 476c-109.33 0-198.26-73.17-198.26-163.126a136.787 136.787 0 0 1 11.16-53.956c7.295 20.99 25.277 40.055 52.422 55.05 34.442 19.043 80.042 29.533 128.384 29.533 48.343 0 93.943-10.49 128.385-29.53 34.442-19.043 54.29-44.805 55.963-72.71a139.07 139.07 0 0 1 20.206 71.614zM416.842 64.578c-12.99-11.33-27.49-20.506-39.813-25.174-11.215-4.265-19.826-4.53-23.606-.75l-.554.508-5.21 4.426a8.253 8.253 0 0 0-1.026 11.527 26.57 26.57 0 0 1-.495 34.487L177.18 283.135a58.106 58.106 0 0 0-13.693 28.92c26.027 8.53 55.674 13.015 86.254 13.015 9.637 0 19.33-.46 28.887-1.36l110.575-189.557a26.66 26.66 0 0 1 37.312-9.083l.68.427a8.242 8.242 0 0 0 11.043-2.087l7.988-10.916c4.876-6.478-4.957-26.638-29.382-47.916zm-148.164 85.76a309.78 309.78 0 0 0-18.893-.59c-45.277 0-87.706 9.672-119.462 27.227-30.027 16.598-46.568 38.038-46.568 60.434 0 22.395 16.54 43.8 46.568 60.434 4.968 2.743 10.224 5.28 15.687 7.63a76.4 76.4 0 0 1 17.29-34.476zm100.57 147.54c30.027-16.598 46.568-38.038 46.568-60.434 0-19.17-12.16-37.67-34.58-53.023l-79.454 136.13c25.21-4.425 48.262-12.125 67.408-22.706z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPestleMortarIcon })
);
