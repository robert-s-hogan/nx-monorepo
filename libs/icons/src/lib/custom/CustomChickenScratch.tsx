import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const CustomChickenScratchIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      {...props}
      className={`custom custom-chicken-scratch ${props.className}`}
    >
      <path
        d="M 94.922 75.769 C 89.519 71.031 91.511 93.705 91.511 97.265 C 91.511 106.855 88.556 121.195 102.598 121.195 C 113.389 121.195 114.352 118.474 116.246 108.389 C 118.067 98.696 119.426 82.636 111.982 74.836 C 104.242 66.724 94.055 71.804 86.962 78.573 C 80.3 84.933 74.559 92.343 67.631 98.389 C 63.08 102.357 56.353 107.621 54.174 113.531 C 52.043 119.308 75.335 114.374 77.297 113.342 C 90.374 106.476 102.355 98.168 106.012 83.34 C 106.237 82.421 109.665 59.895 107.433 61.095 C 100.47 64.841 95.912 76.505 92.271 82.685 C 85.522 94.136 77.643 104.909 70.854 116.332 C 69.564 118.507 60.199 137.845 64.597 138.019 C 78.157 138.554 82.581 131.822 85.352 118.764 C 88.761 102.694 84.554 87.414 72.844 75.864 C 64.685 67.815 62.077 73.095 70.096 79.509 C 93.511 98.231 126.767 117.831 158.036 117.831"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default IconWrapper(CustomChickenScratchIcon);
