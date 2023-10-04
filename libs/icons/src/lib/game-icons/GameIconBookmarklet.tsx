import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBookmarkletIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'bookmarklet'];
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
        d="M57.594 43v242.563l80 30.53V292c-22.504-3.217-45.065-8.633-62.53-26.844l13.5-12.937c12.15 12.667 29.032 17.263 48.28 20.374L110.656 55.03C93.3 51.725 75.492 48.1 57.594 43zm397.125.03c-65.178 17.392-138.354.102-191.22 70.814v208.812c19.795-29.15 45.443-40.866 70.72-46.53 33.914-7.603 66.18-7.163 91.5-27.626l11.75 14.53c-31.256 25.263-68.25 24.386-99.158 31.314-29.295 6.566-53.978 17.63-72.25 63.187l188.657-71.967V43.03zM128.81 49.28l27.407 228.157.06.563V494.906l19.94-39.28 20.468 38.155V296.814L168.563 57.5l-39.75-8.22zm60.47 24.25l25.593 217.782c4.175 2.3 8.258 4.96 12.188 8.063 6.452 5.097 12.412 11.36 17.75 18.97V109.5c-15.496-17.475-34.402-28.327-55.532-35.97zM20.5 74.376v239.813l6.125 2.25 110.97 40.78v-19.906l-98.407-36.156V74.376H20.5zm452.594.03v226.75l-216.938 79.69-40.78-14.97v38.28c23.21 8.03 58.078 6.813 86.25-2.53v-17.563l184.03-67.625 6.125-2.25V74.407h-18.686zm-257.72 239.532v31.813l27.564 10.53c-7.04-20.847-16.565-33.66-27.438-42.25-.04-.03-.084-.06-.125-.092z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBookmarkletIcon })
);
