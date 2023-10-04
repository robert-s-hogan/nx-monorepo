import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconIcePopIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'ice-pop'];
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
        d="M256 16.5c-18.8 0-37.597 3.918-50.766 10.94C192.066 34.465 185 43.25 185 55.5v239.582c0 5.285 2.807 11.398 7.406 16.014 4.6 4.616 10.67 7.404 15.836 7.404h95.516c5.165 0 11.246-2.793 15.847-7.395 4.602-4.6 7.395-10.682 7.395-15.847V55.5c0-12.25-7.066-21.036-20.234-28.06C293.598 20.42 274.8 16.5 256 16.5zm-24 320v135c0 32 48 32 48 0v-135h-48z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconIcePopIcon })
);
