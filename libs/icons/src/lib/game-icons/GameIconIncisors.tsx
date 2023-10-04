import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconIncisorsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'incisors'];
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
        d="M203.72 18.97c-28.924-.952-61.06 76.206-61.907 181.686 33.953-1.45 69.937-2.307 107.437-2.625-1.177-127.187-22.312-178.298-45.53-179.06zm109.374 0c-21.54.943-41.12 52.085-42.22 179.03 34.8-.056 68.26.51 99.876 1.594-.947-105.09-30.825-181.802-57.656-180.625zM77.156 48.28C50.104 47.703 20.683 117.8 18.594 208c.11.946.45 1.722.562 2.656 21.85-3.812 58.996-6.717 102.78-8.937-4.15-109.758-23.74-152.988-44.78-153.44zm360.938.064c-21.14.226-40.853 42.942-45.156 151.78 44.583 2.027 81.885 5.516 103.375 10.532.112-.945.45-1.703.562-2.656-2.084-89.998-31.6-159.947-58.78-159.656zM19.156 310.53c-.112.917-.452 1.633-.562 2.564 3.713 156.09 93.857 250.325 103.344 6.125-43.786-2.164-80.93-4.98-102.782-8.69zm477.156 0c-21.49 4.883-58.79 8.248-103.375 10.22 9.836 242.16 100.234 148.085 103.938-7.656-.112-.935-.45-1.65-.563-2.563zm-354.5 9.72c1.53 185.105 104.795 280.58 107.438 2.563-37.5-.318-73.484-1.145-107.438-2.563zm228.938 1.03c-31.615 1.048-65.077 1.607-99.875 1.533 2.467 277.488 98.167 182.874 99.875-1.532z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconIncisorsIcon })
);
