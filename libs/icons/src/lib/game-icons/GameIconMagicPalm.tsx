import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconMagicPalmIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'magic-palm'];
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
        d="M245.813 23.188c-1.228-.006-2.455.027-3.657.093-10.103.56-19.646 3.682-30.156 11.25l20.72 196.782c-8.394 2.127-16.676 4.47-24.814 7.094L137.72 57.812c-7.032-1.706-17.442-.3-27.126 4.626-10.248 5.213-19.034 13.84-22.813 22.937L155.03 261.5c-7.414 4.345-14.59 9.137-21.5 14.47l-74.343-94.25c-16.34.698-34.965 14.455-37.562 32.655C28.89 222.693 93.978 297.77 126 357.405c10.3 19.184 29.543 50.725 39.188 70.064 5.83 11.693 16.004 24.238 27.843 32.342 11.84 8.104 24.7 11.82 37.907 8.282l112.907-30.22c5.493-1.47 9.196-5.39 13.22-11.937 4.02-6.545 7.535-15.137 12.905-23 20.61-30.185 50.432-76.085 115.186-112.062-2.696-15.053-7.405-24.57-12.72-29.563-6.03-5.667-13.198-7.372-23.686-5.843-18.062 2.63-43.498 17.063-69.594 36.874-1.68 1.39-3.318 2.802-4.937 4.22l-7-61.252 42.5-155.718c-4.478-7.355-13.806-13.258-24.845-15.97-10.874-2.67-22.506-1.698-30.28 1.595l-38.75 149.874c-9.365 1.58-18.732 3.17-28.064 4.812L273.69 27.5c-10.057-2.52-19.284-4.272-27.875-4.313zM234.343 255l30.157 56.625 54.406-33.906-33.78 54.186L341.562 362l-64.157-2.188 2.188 64.032-30.03-56.344-54.283 33.813 33.97-54.438-56.53-30.125 63.78 2.156L234.344 255z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconMagicPalmIcon })
);
