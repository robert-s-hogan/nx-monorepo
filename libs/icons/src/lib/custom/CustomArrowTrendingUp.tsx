import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const CustomArrowTrendingUpIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      {...props}
      className={`custom custom-arrow-trending-up ${props.className}`}
    >
      <path
        d="M 29.062 108.641 C 29.212 109.479 30.212 110.369 30.741 110.977 C 32.582 113.092 34.192 115.391 36.06 117.486 C 39.889 121.781 43.815 126.006 47.587 130.348 C 48.21 131.065 49.725 133.378 50.762 133.611 C 51.147 133.697 51.27 133.261 51.453 132.998 C 52.856 130.983 54.106 128.937 55.63 126.987 C 64.51 115.62 73.293 103.828 83.454 93.571 C 85.021 91.988 86.674 90.485 88.293 88.956 C 88.538 88.725 89.46 87.759 89.859 87.759 C 90.067 87.759 90.678 88.389 90.818 88.5 C 92.298 89.669 93.754 90.853 95.079 92.204 C 101.177 98.418 106.775 105.218 112.603 111.689 C 117.003 116.576 121.386 121.468 125.414 126.674 C 126.016 127.451 126.932 129.686 127.587 127.984 C 128.592 125.376 130.446 122.968 131.834 120.563 C 135.177 114.773 138.216 108.814 141.514 103 C 146.199 94.739 151.292 86.625 157.612 79.527 C 158.599 78.418 160.195 77.273 160.857 75.937 M 146.889 76.962 C 146.888 76.962 148.436 76.029 148.836 75.795 C 152.765 73.489 157.177 71.997 161.351 70.225 C 163.718 69.22 166.178 68.38 168.476 67.22 C 169.207 66.851 170 66.082 170 67.22 C 170 69.203 169.656 71.143 169.492 73.117 C 169.07 78.214 168.768 83.366 167.912 88.414 C 167.346 91.751 167.251 95.287 166.191 98.499"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
        strokeMiterlimit="10"
      ></path>
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: CustomArrowTrendingUpIcon })
);
