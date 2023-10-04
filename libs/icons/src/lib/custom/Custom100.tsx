import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const Custom100Icon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      {...props}
      className={`custom custom-heart ${props.className}`}
    >
      <path
        d="M 45.109 116.589 C 45.109 108.64 50.316 100.116 53.819 93.211 C 56.596 87.736 59.779 82.457 62.821 77.125 C 65.405 72.597 67.286 67.432 70.469 63.275 C 71.118 62.427 73.026 59.572 73.286 61.919 C 74.249 70.594 73.559 79.838 73.396 88.558 C 73.108 104.02 71.538 119.655 70.14 135.056 M 99.78 70.42 C 90.933 71.896 88.033 83.292 86.899 90.427 C 85.664 98.198 84.718 107.189 88.582 114.317 C 90.432 117.73 96.305 121.021 100.109 119.557 C 106.272 117.182 112.443 108.94 114.6 102.701 C 117.971 92.949 119.154 83.952 112.294 75.366 C 108.43 70.529 104.402 71.739 99.121 71.739 M 134.517 70.394 C 130.579 75.556 127.031 82.41 125.766 88.483 C 124.45 94.802 122.694 103.954 126.244 110.04 C 127.447 112.102 129.167 115.733 132.201 116.311 C 135.253 116.892 140.838 112.741 143.415 111.268 C 145.983 109.801 147.172 107.307 149.077 105.312 C 150.692 103.621 151.275 100.578 152.019 98.504 C 153.326 94.864 153.71 90.598 153.71 86.782 C 153.71 83.375 153.284 78.069 150.695 75.217 C 147.535 71.734 137.532 69.617 133.193 72.096 M 101.097 131.099 C 107.243 128.022 113.714 126.338 120.529 125.529 C 131.78 124.192 144.261 123.52 155.109 127.141 M 113.613 139.013 C 118.831 138.433 124.072 135.802 129.421 135.056 C 135.287 134.238 141.281 133.737 147.206 133.737"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default IconWrapper(Custom100Icon);
