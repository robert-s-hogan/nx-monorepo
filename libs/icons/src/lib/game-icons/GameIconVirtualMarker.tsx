import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconVirtualMarkerIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'virtual-marker'];
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
        d="M256 32L32 224h128l96-80 96 80h128L256 32zm0 176l-52 39H32v18h172l52 39 52-39h172v-18H308l-52-39zM32 288l224 192 224-192H352l-96 80-96-80H32z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconVirtualMarkerIcon })
);
