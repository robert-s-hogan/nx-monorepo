import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFireSpellCastIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'fire-spell-cast'];
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
        d="M366.9 36.88c-49.5 6.81-66 65.52-55.2 104.52 13.8 49.7-46.5 54.2-33.3-24.7-17.5 28.4-22.4 53.7-18.6 74.9 3.7 21.3 14.7 37.7 29.8 49.6 9.5 7.5 20.6 13.3 32.5 17 27.2-25.1 31.2-69.5 18.2-98.4 19.3 12.1 30.3 35.4 28.9 62.5 11.9.7 27.2-6.8 36.4-17.8.4 19 2.3 34.7-8.9 52.4 28.5-10.9 64.3-36.2 65.7-51.2 1.4-15.7-1.5-34.2-8.3-55.7-17.1 66.8-77.4 39.6-42.6-45.4-61.7 53.6-69.5-11.1-44.6-67.72zm116.8 2.09c-8 13.23-16 34.87-45.9 32.25 20.5 22.17 20.4 33.78 11.8 63.88 37.2-31.9 37.8-67.34 34.1-96.13zM205.4 75.8c-28.1-.1-49.9 56.5-57.7 90.6-11.3 49.2-14.6 83.5-.9 133l-17.3 4.8c-15.5-55.9-8.3-94.7 2.3-142.3 10.5-47.6 14.5-70.4-4.5-74.1-42.1-8.4-45.3 90.4-47.8 134.8-1.4 25.8.8 57 6.6 77.6l-16.9 6.2c-14.4-53.4-6.7-98-1.7-150.8 2.5-15.6-1.8-25.7-19.1-25.2-15.8.5-27 143.4-13.3 179.1 8.7 53 31.3 130.5 11 152.7L18 494h206l20-28.6c23-5 28.4-19.9 37-33.8 25.3-40.9 82.4-83.1 129.1-99.2 21.1-7.5-21.9-48.6-53.8-32.8-55 27.2-81.7 56.3-117.8 38.3-55.9-27.8-47.3-100.6-35.9-162.8 6.2-33.6 40.4-89.6 7.2-98.8-1.4-.32-2.9-.49-4.4-.5z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFireSpellCastIcon })
);
