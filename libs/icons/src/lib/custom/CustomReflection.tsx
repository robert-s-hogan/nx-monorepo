import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const CustomReflectionIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      {...props}
      className={`custom custom-reflection ${props.className}`}
    >
      <path
        d="M 43.268 68.491 C 45.299 73.362 49.466 84.503 49.894 90.103 M 96.026 42.825 C 91.393 56.451 81.245 85.486 77.722 92.618 M 106.911 105.701 C 115.338 96.409 133.856 76.994 140.501 73.674 M 121.449 128.144 C 128.309 126.305 144.878 122.279 156.268 120.889 M 120.076 150.692 C 123.463 151.132 131.74 153.176 137.755 157.825"
        stroke-width="5"
        stroke-linecap="round"
        fill="none"
        stroke-miterlimit="10"
      />
    </svg>
  );
};

export default IconWrapper(CustomReflectionIcon);
