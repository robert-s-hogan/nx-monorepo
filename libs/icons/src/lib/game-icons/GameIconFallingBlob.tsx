import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFallingBlobIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'falling-blob'];
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
        d="M227.54 25.87l128.997 177.28-219.59-169.19L259.07 198.92 20.78 26.128h-.005l180.06 232.19L35.878 129.186l169.19 225.433L20.17 219.052l210.703 228.224c59.994 56.81 154.88 55.822 213.664-2.963 58.782-58.783 59.77-153.668 2.962-213.664L227.54 25.87zm128.448 222.855c27.394 0 54.786 10.45 75.686 31.35 41.8 41.8 41.8 109.574 0 151.374s-109.573 41.8-151.373 0c-41.8-41.802-41.8-109.575 0-151.376 20.9-20.9 48.295-31.35 75.688-31.35zm-6.734 20.734c-17.067.057-36.98 7.253-52.576 20.872-13.134 11.468-20.463 25.015-22.217 36.897-1.753 11.88 1.438 21.776 10.216 29.11 17.555 14.667 55.232 11.185 81.5-11.752 13.134-11.47 20.462-25.015 22.217-36.897 1.754-11.88-1.438-21.776-10.215-29.11-7.132-5.96-17.247-9.16-28.924-9.12zm47.572 124.368c-8.597.03-19.063 3.706-27.14 10.65-6.803 5.848-10.36 12.6-11.172 18.01-.812 5.41.45 9.185 4.314 12.364 7.73 6.357 27.337 5.207 40.942-6.49 6.802-5.846 10.36-12.597 11.17-18.008.813-5.412-.45-9.187-4.313-12.366-3.14-2.582-7.918-4.18-13.8-4.16z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFallingBlobIcon })
);
