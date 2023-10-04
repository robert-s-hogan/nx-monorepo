import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconAirplaneDepartureIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'airplane-departure'];
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
        d="M442.6 67.37c-1.6.01-3.2.06-4.8.16-13.2.73-26.9 3.8-36.8 8.74l-.2.12-281 120.21-4.1-2.6c-20.62-13.3-42.15-26.8-73.84-32.1 2.07 4.7 4.64 9.9 7.76 15.5 6.69 11.9 15.26 25.3 23.75 37.6 8.49 12.2 16.96 23.3 23.21 30.4 2.41 2.8 4.02 4.3 5.42 5.6l172.2-68.6-1.2 14.4c-3.7 44.4-11.3 89.6-23.5 135.7l28.5-19c32.6-51.5 43.5-87.2 71-157.3l1.2-3 91.5-50.5h.2c22.9-11.49 32.8-21.65 34.4-25.36.8-1.86.6-1.37.2-2.04-.4-.66-2.3-2.39-5.8-3.85-5.4-2.2-13.8-3.72-23.3-4.03-1.5-.05-3.2-.07-4.8-.05zm-283 11.74l-22.1 4.4L222 133.3l60.1-25.7C248 96.96 210.8 86.98 159.6 79.11zM32 439v18h448v-18H32z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconAirplaneDepartureIcon })
);
