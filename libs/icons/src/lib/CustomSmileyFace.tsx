import DynamicIconWrapper from './DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const CustomSmileyFaceIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      {...props}
      className={`custom custom-smiley-face ${props.className}`}
    >
      <path
        d="M 85.358 98.416 C 85.358 99.097 85.159 100.262 86.176 100.262 C 86.864 100.262 87.888 99.354 87.928 98.647 C 87.97 97.904 87.818 97.032 86.876 97.032 C 86.368 97.032 85.115 96.819 84.891 97.263 M 108.956 96.34 C 108.956 97.833 108.759 98.871 110.695 98.365 C 112.088 98.001 113.862 96.891 113.862 95.302 C 113.862 93.445 112.278 93.572 110.825 93.572 C 109.422 93.572 109.89 95.28 109.89 96.34 M 73.909 111.797 C 78.077 115.538 81.873 119.475 87.253 121.563 C 90.788 122.935 94.778 122.64 98.494 122.64 C 102.819 122.64 106.434 121.405 110.15 119.23 C 116.961 115.243 124.241 109.542 128.166 102.595 C 129.843 99.627 130.268 96.784 130.918 93.572 M 89.204 78.491 C 81.393 78.491 76.555 79.951 70.73 85.668 C 64.032 92.244 60.511 100.298 59.455 109.4 C 58.448 118.088 58.655 125.956 64.907 132.607 C 74.799 143.128 91.711 145.457 105.507 144.184 C 117.567 143.072 129.89 135.719 135.626 124.88 C 142.159 112.536 142.598 95.625 137.691 82.735 C 134.982 75.62 130.235 69.525 124.457 64.556 C 118.131 59.115 110.368 57.185 102.199 56.174 C 91.064 54.797 79.165 55.193 69.195 60.575"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: CustomSmileyFaceIcon })
);