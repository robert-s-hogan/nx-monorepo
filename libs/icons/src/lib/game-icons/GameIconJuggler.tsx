import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconJugglerIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'juggler'];
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
        d="M282.063 20.938c-18.876 0-33.875 15.56-33.875 34.437 0 18.877 15 33.875 33.875 33.875s33.875-14.998 33.875-33.875c0-18.875-15-34.438-33.875-34.438zM129.905 82.094c-18.875 0-33.875 15.59-33.875 34.47 0 18.876 15 33.874 33.876 33.874 18.875 0 33.875-14.998 33.875-33.875 0-18.876-15-34.47-33.874-34.47zm284.281 22.656c-18.875 0-33.875 15.59-33.875 34.47 0 18.876 15 33.874 33.875 33.874 18.876 0 33.875-14.998 33.875-33.875 0-18.877-15-34.47-33.875-34.47zm-162.25 57.563c-3.24-.003-6.51.42-9.718 1.28-25.657 6.875-39.12 39.755-30.095 73.438 3.502 13.072 9.883 24.315 17.875 32.814-19.225 4.532-34.137 13.467-40.5 24.5l-.406-.094-41.594 64.438-50.688-21.938c-29.376-16.12-61.575 24-30.624 41.688l94.468 44.062 38.03-50.063c21.493 38.735 15.748 77.484-25.124 116.25H342.75c-39.82-38.2-42.438-76.424-23.28-114.625l36.81 48.438 94.47-44.063c11.635-6.65 14.334-16.47 11.625-25.28-8.184 5.26-17.915 8.343-28.344 8.343-14.224 0-27.118-5.72-36.592-14.938l-28 12.125-41.594-64.437h-.03c-5.48-9.417-17.226-17.278-32.533-22.188 11.58-14.222 15.924-36.9 9.75-59.937-7.896-29.473-30.4-49.798-53.092-49.813zm-164.125 61.03c-18.875 0-33.874 15.56-33.874 34.438 0 18.88 15 33.876 33.874 33.876 18.876 0 33.876-14.997 33.876-33.875 0-18.874-15-34.436-33.876-34.436zm346.22 51.126c-18.876 0-33.876 15.59-33.876 34.467 0 18.878 15 33.875 33.875 33.875 18.876 0 33.876-14.997 33.876-33.875 0-18.875-15-34.468-33.875-34.468z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconJugglerIcon })
);
