import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFastNoodlesIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'fast-noodles'];
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
        d="M279 31.1L263.8 183H282l15-150.1-18-1.8zm80.5 14.05L313.6 183h18.8l44.1-132.15-17-5.7zM118.3 189.6l-77.21 92.6 13.82 11.6L123 212.1l-3.8-18.2-.9-4.3zm275.4 0l-4.7 22.5 68.1 81.7 6.9-5.8 6.9-5.8-77.2-92.6zM144.8 201l52 78h118.4l52-78H144.8zm63.2 30h96v18h-96v-18zm-61.6 4.9L189.2 439h133.6l42.8-203.1-40.8 61.1H187.2l-40.8-61.1zM193 457l6.3 30h113.4l6.3-30H193z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFastNoodlesIcon })
);
