import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSirenIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'siren'];
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
        d="M157.705 400.355h193.09v17.53h-193.09v-17.53zm180.8-17.53h-165v-96.82a53.29 53.29 0 0 1 53.29-53.29h58.43a53.29 53.29 0 0 1 53.28 53.29v96.79zm-106.64-135.77h-10.44a37.83 37.83 0 0 0-37.83 37.83v77.22h48.27v-115zm-197 79.59h103.58v-17.53H34.875v17.53zm137.41-107.9l-73.22-73.23-12.4 12.4 73.23 73.23zm92.5-124.63h-17.54v103.57h17.53V94.115zm149 51.39l-73.23 73.23 12.4 12.4 73.23-73.23zm-40.18 163.6v17.53h103.54v-17.52h-103.57z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSirenIcon })
);
