import DynamicIconWrapper from './DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const CustomCursiveSquigglesIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      {...props}
      className={`custom custom-cursive-squiggles ${props.className}`}
    >
      <path
        d="M 45.281 66.118 C 40.223 66.118 34.899 73.116 33.636 77.705 C 31.566 85.222 31.852 93.746 32.391 101.473 C 32.945 109.409 36.109 119.19 43.389 123.508 C 49.109 126.901 59.035 127.992 65.535 126.529 C 71.844 125.109 78.665 119.83 81.011 113.852 C 82.628 109.736 82.722 103.489 79.867 99.938 C 77.812 97.383 71.947 96.785 69.566 98.998 C 66.038 102.273 63.031 106.642 62.4 111.525 C 61.408 119.202 62.791 124.111 69.516 128.46 C 78.205 134.08 91.992 134.393 101.266 130.589 C 111.644 126.333 122.66 117.823 127.741 107.712 C 130.066 103.085 131.221 98.098 131.622 92.956 C 131.853 90.002 132.332 86.165 130.627 83.548 C 127.838 79.267 121.675 78.343 117.838 82.162 C 114.279 85.703 113.786 91.819 115.15 96.472 C 116.233 100.166 120.691 103.088 123.859 104.89 C 127.947 107.214 133.48 107.594 138.092 107.564 C 151.44 107.475 160.941 94.224 168 84.39"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: CustomCursiveSquigglesIcon })
);
