import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBurningBlobsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'burning-blobs'];
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
        d="M30.936 23.332c-.97 100.412 10.37 192.13 100.757 231.064 109.81 47.303 46.883 118.85-58.246 83.002 76.11 65.222 145.665 141.652 200.928 159.985 6.78 2.995 14.26 4.674 22.12 4.674 11.404 0 22.023-3.508 30.835-9.495 31.55 8.544 59.065 11.345 82.4 9.23 19.94-.195 38.412-6.676 53.524-17.556 49.986-33.49 55.46-109.83 11.715-201.34 1.573-8.565 1.077-16.997-1.154-25.322-1.973-9.506-6.227-18.195-12.152-25.476-28.97-42.765-97.358-83.18-159.58-124.506 77.79 99.205 67.214 143.1 10.635 94.234 1.09-7.624-1.225-15.174-6.103-23.178-1.8-3.4-4.032-6.54-6.625-9.343-17.988-22.57-52.22-49.85-87.02-92.078 38.056 186.15-97.83 83.32-182.036-53.895zM267.79 173.836c14.032 0 25.208 11.176 25.208 25.21 0 14.032-11.175 25.208-25.21 25.208-14.032 0-25.208-11.176-25.208-25.21 0-14.032 11.175-25.208 25.21-25.208zm147.575 54.834c22.756 0 41.004 18.248 41.004 41.004 0 22.756-18.248 41.004-41.005 41.004-5.145 0-10.056-.942-14.582-2.65-.746-19.392-10.64-36.512-25.476-47.16 3.997-18.478 20.328-32.198 40.058-32.198zm-75.45 39.473c23.44 0 42.24 18.802 42.24 42.242 0 23.44-18.8 42.242-42.24 42.242s-42.243-18.802-42.243-42.242c0-23.44 18.8-42.242 42.242-42.242zm68.886 65.464c41.396 0 74.755 33.36 74.755 74.754 0 41.397-33.357 74.755-74.754 74.755-23.397 0-44.22-10.662-57.91-27.404.458-2.85.704-5.772.704-8.75 0-15.814-6.752-30.113-17.506-40.183.268-12.963 3.804-25.092 9.828-35.61 23.163-1.518 42.872-16.092 51.803-36.403 4.247-.746 8.613-1.157 13.08-1.157zm-145.53 10.59c12.626 0 22.662 10.038 22.662 22.664 0 12.628-10.035 22.663-22.662 22.663-12.627 0-22.663-10.035-22.663-22.662 0-12.625 10.035-22.663 22.663-22.663zm33.226 66.35c20.22 0 36.414 16.194 36.414 36.414 0 20.222-16.192 36.413-36.414 36.413-20.22 0-36.412-16.192-36.412-36.412s16.19-36.413 36.412-36.413z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBurningBlobsIcon })
);
