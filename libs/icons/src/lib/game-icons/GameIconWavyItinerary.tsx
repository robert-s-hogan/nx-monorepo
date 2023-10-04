import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconWavyItineraryIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'wavy-itinerary'];
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
        d="M20.875 15.47v44.405c6.964 245.8 209.943 234.28 332.875 332.938-10.604 5.66-23.793 9.413-40.125 11.406 44.99 10.586 84.793 44.636 104.03 89.092 23.766-62.477-3.088-115.007-25.905-164.78-2.283 16.258-6.327 29.72-12.906 40.624-65-77.148-197.603-71.956-270.375-246.22 109.484 109.288 275.855-16.455 346.78 173.876-9.736 4.946-21.563 5.977-36.47 3.094 26.28 31.006 41.215 69.576 60.033 119.906 17.417-63.916 15.822-108.235 6.03-162.406-4.77 12.202-10.066 21.867-16.406 29C415.188 8.556 195.654 151.902 75.78 15.47H20.876z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconWavyItineraryIcon })
);
