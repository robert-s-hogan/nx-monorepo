import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPentacleIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'pentacle'];
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
        d="M486 203.652H310.111L256 37.113l-54.111 166.539H26l142.22 103.623-54.462 167.612L256 371.24l142.242 103.646-54.473-167.612zm-85.995 28.008l-65.335 47.596-15.46-47.596h80.795zM256 127.708l24.658 75.91H231.33zM111.995 231.66h80.795l-15.45 47.596zm55.097 169.713l24.932-76.743 40.194 29.29zm34.041-104.762l21.1-64.951h67.524l21.099 64.95-54.867 39.977zm143.731 104.762l-65.082-47.454 40.194-29.29zm-37.983-264.359l-10.424-32.092a183.269 183.269 0 0 1 114.322 81.21H376.43a155.293 155.293 0 0 0-69.55-49.118zM129 371.328l-10.413 32.049a182.425 182.425 0 0 1-43.918-142.581l26.684 19.435v2.847A153.804 153.804 0 0 0 129 371.284zm177.104 58.108l26.64 19.413a182.447 182.447 0 0 1-153.51 0l26.64-19.413a154.79 154.79 0 0 0 100.23 0zM135.569 186.133h-34.348a183.269 183.269 0 0 1 114.322-81.21l-10.424 32.091a155.293 155.293 0 0 0-69.55 49.119zm303.12 96.955a181.922 181.922 0 0 1-45.276 120.245L383 371.285a153.804 153.804 0 0 0 27.68-88.197v-2.846l26.683-19.446a183.685 183.685 0 0 1 1.325 22.292z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPentacleIcon })
);
