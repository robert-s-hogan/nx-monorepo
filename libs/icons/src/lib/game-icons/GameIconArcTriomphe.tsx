import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconArcTriompheIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'arc-triomphe'];
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
        d="M64 92v24h24V92H64zm40 0v24h48V92h-48zm64 0v24h48V92h-48zm64 0v24h48V92h-48zm64 0v24h48V92h-48zm64 0v24h48V92h-48zm64 0v24h24V92h-24zM48 132v16h416v-16H48zm16 32v112h128.67c4.696-29.122 34.004-56 63.33-56s58.634 26.878 63.33 56H448V164H64zm17.994 16H184v80H81.373l.56-72.063.061-7.937zM208 180h96v16h-96v-16zm120.063 0h102.005v80H327.441l.559-72.063.063-7.937zM97.869 196l-.371 48H168v-48H97.87zm246.069 0l-.372 48h70.502v-48h-70.13zM64 292v200h128V292H64zm256 0v200h128V292H320zM88 414h80v64H88v-64zm256 0h80v64h-80v-64zm-240 16v32h48v-32h-48zm256 0v32h48v-32h-48z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconArcTriompheIcon })
);
