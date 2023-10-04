import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPieceSkullIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'piece-skull'];
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
        d="M258.555 24.28c-85.44 0-154.703 57.376-154.703 128.154 0 26.275 9.552 50.7 25.927 71.03L95.665 257.58l52.828 52.826 30.447-30.447v93.46h40.177V315.51h18.694v57.906h41.49V315.51h18.69v57.906h40.178V279.79l30.627 30.626 52.826-52.826-34.218-34.22c16.33-20.312 25.854-44.7 25.854-70.936 0-70.778-69.26-128.153-154.7-128.153zm-78.125 98.4c25.714 0 46.56 20.846 46.56 46.558 0 25.715-20.846 46.56-46.56 46.56-25.715 0-46.56-20.845-46.56-46.56 0-25.712 20.845-46.558 46.56-46.558zm156.2 0c25.715 0 46.56 20.846 46.56 46.558 0 25.715-20.845 46.56-46.56 46.56-25.714 0-46.56-20.845-46.56-46.56 0-25.712 20.846-46.558 46.56-46.558zm-78.075 72.275l30.845 82.17h-61.693l30.848-82.17zm-79.614 197.15v104.194H338.17V392.103H297.99v66.134H279.3v-66.134h-41.49v66.134h-18.693v-66.134H178.94z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPieceSkullIcon })
);
