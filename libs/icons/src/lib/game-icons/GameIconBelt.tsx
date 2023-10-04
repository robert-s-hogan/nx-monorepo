import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBeltIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'belt'];
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
        d="M256 126.97c-86.364 0-225.564 39.103-234.6 109.96-9.828 90.817 77.986 124.365 144.875 128.814v-78.592c-52.133 0-70.272-22.63-66.675-50.222 7.275-55.81 100.12-63.614 156.4-63.614s149.125 7.805 156.4 63.614c3.597 27.59-14.542 50.222-66.675 50.222v78.592c66.89-4.45 154.703-37.997 144.875-128.814-5.604-78.746-148.236-109.96-234.6-109.96zm71.656 152.257l-143.312.02V384.87l143.312.157V279.226zm-17.642 21.507v23.606h-82.29v19.592h82.29v21.523h-104.12V300.8h32.33l71.79-.066z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBeltIcon })
);
