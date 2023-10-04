import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTeslaCoilIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'tesla-coil'];
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
        d="M218.5 406v80h75V377zm169.7-56 16.9 73 23.2-17 35.5 39-22.8-83.7-19.8 20.3zM118 315l-74 68 66-28zm53.4 37.5h169.2c6.9 0 12.5-5.6 12.5-12.5s-5.6-12.5-12.5-12.5H171.4c-6.9 0-12.5 5.6-12.5 12.5s5.6 12.5 12.5 12.5zm-9.5-48.5h188.2c13.8 0 25-11.2 25-25s-11.2-25-25-25H161.9c-13.8 0-25 11.2-25 25s11.2 25 25 25zm194.5-66.2L398 173l-61.9-57L395 30l-30 79 38 29-6-45 47-38-8-43 47 45-64 44 16 82-36 40 46 7-62.7 22.5c-6.4-7.7-15.5-13.1-25.9-14.7zm-223 10.7c7.3-6.7 17-11 27.7-11.2l-25.5-80.2L91 189l-24-54 55-26-99-92 53 83-43 16 38 131 44-31zm29.8-57 25.1-67.8 52.3-1.9-10.4-67.1L215 101l-45.5-5.9-15 53.4zM300 31l22 67 14.1-20z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTeslaCoilIcon })
);
