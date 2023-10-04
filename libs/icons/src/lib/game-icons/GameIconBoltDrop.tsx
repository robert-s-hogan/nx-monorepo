import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBoltDropIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'bolt-drop'];
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
        d="M256 34.25C210.3 115.3 165.1 172.3 131.3 219.3 95.53 268.9 73 307 73 352c0 45 21.91 77.8 56 100.5 34.1 22.7 80.5 34.5 127 34.5s92.9-11.8 127-34.5c34.1-22.7 56-55.5 56-100.5s-22.5-83.1-58.3-132.7c-33.8-47-79-104-124.7-185.05zM304 128l-46.8 134.4h117L178.7 471.3l59.2-159.2H130.5L304 128z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBoltDropIcon })
);
