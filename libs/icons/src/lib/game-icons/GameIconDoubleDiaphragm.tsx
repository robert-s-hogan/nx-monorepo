import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDoubleDiaphragmIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'double-diaphragm'];
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
        d="M254.727 19.027c-1.302.008-2.603.028-3.903.057C171.402 20.884 94.76 62.85 52.18 136.602c-64.884 112.384-26.305 256.362 86.078 321.246 112.382 64.883 256.36 26.304 321.244-86.08 64.883-112.383 26.304-256.36-86.078-321.245C336 28.917 295.07 18.783 254.727 19.027zm.03 18.608c20-.11 40.162 2.56 59.903 8.158l-89.572 59.637c9.898-2.035 20.144-3.104 30.637-3.104 2.503 0 4.99.064 7.464.184l73.718-49.08c9.224 3.74 18.3 8.163 27.168 13.283 35.108 20.27 62.376 48.856 80.778 81.818l-105.756-21.218c10.707 7.06 20.477 15.43 29.066 24.89l87.03 17.46c18.944 44.744 22.685 95.438 8.956 143.61l-59.644-89.58c2.015 9.852 3.074 20.05 3.074 30.49 0 2.536-.064 5.056-.187 7.562l49.09 73.735c-3.72 9.142-8.094 18.146-13.17 26.94-20.32 35.193-48.993 62.51-82.055 80.914L382.432 337.8c-7.06 10.664-15.42 20.39-24.868 28.944l-17.43 86.89c-44.718 18.87-95.357 22.57-143.476 8.835l89.303-59.458c-9.773 1.98-19.884 3.025-30.235 3.025-2.594 0-5.173-.066-7.735-.195l-73.527 48.955c-9.115-3.714-18.09-8.077-26.858-13.14-35.15-20.292-62.443-48.922-80.845-81.934l105.28 21.12c-10.652-7.058-20.367-15.417-28.91-24.86l-86.69-17.39c-18.876-44.658-22.617-95.233-8.963-143.31l59.445 89.283c-2-9.82-3.053-19.98-3.053-30.384 0-2.56.065-5.106.19-7.635l-48.93-73.49c3.735-9.202 8.13-18.26 13.24-27.108 20.246-35.07 48.785-62.328 81.7-80.73l-21.172 105.524c7.06-10.696 15.427-20.455 24.885-29.035l17.42-86.835c25.263-10.713 52.425-16.582 79.963-17.19 1.196-.028 2.394-.044 3.592-.05zm.968 83.385c-15.46 0-30.293 2.63-44.086 7.455l57.245 30.795c-4.81-.74-9.733-1.125-14.748-1.125-7.588 0-14.97.884-22.05 2.544l-41.86-22.518c-23.703 13.388-42.87 33.826-54.672 58.492l58.754-17.652c-9.195 7.31-17.02 16.267-23.03 26.425l-43.93 13.2c-3.116 11.312-4.787 23.23-4.787 35.545 0 14.985 2.464 29.385 7.01 42.818l29.02-53.945c-.435 3.705-.663 7.472-.663 11.295 0 8.23 1.035 16.216 2.978 23.84l-21.765 40.462c12.728 23.007 32.062 41.826 55.466 53.91l-18.68-62.175c7.303 10.174 16.54 18.863 27.177 25.53l13.723 45.67c12.3 3.74 25.357 5.757 38.895 5.757 13.444 0 26.414-1.99 38.64-5.68l-62.78-33.77c7.234 1.737 14.784 2.665 22.552 2.665 6.336 0 12.525-.622 18.52-1.79l44.206 23.78c23.888-12.34 43.538-31.693 56.244-55.357l-74.045 22.246c13.433-7.107 24.98-17.297 33.698-29.633l49.82-14.97c4.09-12.812 6.307-26.47 6.307-40.655 0-13.935-2.133-27.362-6.086-39.977l-36.527 67.902c2.645-8.79 4.07-18.106 4.07-27.757 0-5.66-.492-11.2-1.43-16.59l24.624-45.774c-12.995-24.61-33.47-44.628-58.422-57.054l20.512 68.267c-7.254-11.532-16.886-21.413-28.21-28.96l-14.403-47.94c-11.83-3.434-24.34-5.28-37.29-5.28z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDoubleDiaphragmIcon })
);
