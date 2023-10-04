import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconMassDriverIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'mass-driver'];
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
        d="M123.72 35.22c-30.363 19.964-56.875 46.728-76.282 80.343C28.03 149.178 18.108 185.502 16 221.78l149.72 8.782c.82-13.526 4.825-27.215 12.06-39.75 7.238-12.532 17.072-22.838 28.376-30.312L123.72 35.22zm264.56 0L305.845 160.5c11.304 7.474 21.138 17.778 28.375 30.313 7.235 12.532 11.24 26.222 12.06 39.75L496 221.78c-2.11-36.276-12.03-72.603-31.438-106.218-19.407-33.614-45.92-60.378-76.28-80.343zM256 175.75c-33.25 0-60.188 26.97-60.188 60.22 0 33.247 26.94 60.186 60.188 60.186 33.25 0 60.22-26.94 60.22-60.187 0-33.25-26.97-60.22-60.22-60.22zm-40.438 141.125l-67.28 134.03c32.47 16.315 68.904 25.876 107.718 25.876 38.814 0 75.248-9.562 107.72-25.874l-67.283-134.03c-12.124 6.05-25.964 9.405-40.437 9.405-14.473 0-28.313-3.353-40.438-9.405z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconMassDriverIcon })
);
