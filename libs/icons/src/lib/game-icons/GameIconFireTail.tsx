import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFireTailIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'fire-tail'];
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
        d="M158.256 36.47c2.22 49.155 45.426 31.47 81.68 62.66-30.405-53.095-58.346-36.28-81.68-62.66zm152.37 22.743c-13.924 49.15 27.75 38.738 54.208 100.21 4.956-65.19-34.792-64.58-54.21-100.21zm-160.038 34.39c-12.396.072-25.558 1.038-39.578 2.918 44.21 11.542 58.108 22.066 85.29 42.896C134.302 128.24 82.323 123.44 7.85 179.13c100.65-23.06 168.2-8.253 227.08 22.58-12.79 1.896-24.61 14.406-30.127 22.946 38.377 2.05 77.634 23.985 110.93 64.72-12.35-7.992-42.33-3.547-56.196 6.128 37.242 9.056 75.687 49.523 90.388 81.35 7.484 16.204 17.74 31.434 29.85 43.304.29.29.586.568.88.852.617.59 1.236 1.178 1.862 1.752.333.304.67.604 1.005.902 18.724 16.745 41.42 25.36 65.057 17.654 50.29-16.395 54.6-72.206 48.867-113.69-8.09-58.54-29.06-92.95-43.65-119.01 2.673 27.62-6.556 45.437-20.847 56.835-1.056-43.277-11.183-61.67-43.662-96.086.833 20.694-2.812 29.525-17.337 40.526-1.172-43.655-51.075-89.232-110.564-112.553v.002c19.306 21.608 32.916 42.774 36.967 69.78-36.27-48.287-80.83-73.92-147.77-73.52zm258.844 12.206c-28.72 35.415 15.06 53.01 23.328 99.5 9.73-57.558-21.908-65.23-23.328-99.5zm-341.036 1.477c-20.846-.04-35.705 8.377-56.01 1.582 25.778 40.33 56.76 4.1 102.47 12.737-19.29-11.226-33.952-14.295-46.46-14.32zm60.727 80.856c-21.19.374-42.96 8.55-60.262 32.492 40.094-19.363 84.84 36.146 117.017-18.182-14.96-7.26-35.565-14.685-56.754-14.31zm76.467 55.242c-9.53-.13-18.925 2.26-28.596 6.635 41.05 3.358 27.72 37.944 79.283 17.513-18.547-16.713-34.805-23.93-50.687-24.148zm-23.85 40.195c26.456 60.895 74.973 30.56 118.375 76.615-45.78-76.544-85.973-47.214-118.375-76.615zm246.822.22c6.257 1.843 12.41 4.995 18.25 9.374 13.202 9.9 24.376 26.025 29.713 45.91 5.337 19.884 3.734 39.42-2.74 54.582-6.474 15.16-17.43 25.74-31.437 29.486-14.007 3.747-28.804.054-42.008-9.847-13.204-9.9-24.378-26.024-29.715-45.91-2.57-9.574-3.517-19.065-3.1-28.03 18.53 19.584 41.6 28.266 57.48 19.73 19.717-10.604 21.098-43.87 3.558-75.296z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFireTailIcon })
);
