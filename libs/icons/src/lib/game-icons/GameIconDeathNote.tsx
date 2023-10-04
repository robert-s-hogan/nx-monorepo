import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDeathNoteIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'death-note'];
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
        d="M294.3 53.6l-81.2.24-79.5 70.56 18.3 70.5L201 187l-25.8 74.7 38.7-22.4 11 35.9 30.2-37.1 30.2 38.8 18.5-38.5 31.7 21.1-25.4-71.9 46.4 6.1 18.9-67.1c-27.1-24.3-54.1-48.7-81.1-73zm-88.8 61.2c13.3-.1 28.3 9 35.9 27l-61.9 9.3c-3.9-18.1 11-35.7 26-36.3zm104.5 0c15.1.1 28.1 12.1 26 36.3l-62-9.3c7.7-18 22.7-27.1 36-27zm-54.5 38.5l25.6 56.7h-47.9zM93.26 288.5L51.3 317.7l207.3 72.7L466 317.3l-41-28.8c-54.7 9.2-120.6-14.4-150.7 31.8h-31.4c-41-45.7-104.5-25.2-149.64-31.8zM29 329.8l-6.17 17.6 190.67 66.7v17.8h91.6v-18.7c62.3-21.8 125.5-43.9 188.1-65.8l-6.2-17.6-205.7 71.9 4.1 11.5h-54.8l4.1-11.5c-68.6-24-137.15-48-205.7-71.9z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDeathNoteIcon })
);
