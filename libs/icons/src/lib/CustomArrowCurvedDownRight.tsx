import DynamicIconWrapper from './DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const CustomArrowCurvedDownRightIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      {...props}
      className={`custom custom-arrow-curved-down-right ${props.className}`}
    >
      <path
        d="M 21.315 99.618 C 44.533 89.027 105.309 75.676 162.682 107.011 M 153.343 119.746 C 157.643 119.41 162.188 119.364 166.499 119.518 C 167.533 119.555 178.436 120.304 178.314 119.61 C 177.732 116.283 175.701 112.966 174.542 109.81 C 172.172 103.358 170.203 97.019 169.525 90.161 C 169.187 86.729 169.212 83.309 169.017 79.904"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: CustomArrowCurvedDownRightIcon })
);
