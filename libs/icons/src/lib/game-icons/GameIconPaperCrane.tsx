import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPaperCraneIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'paper-crane'];
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
        d="m174.2 108.9 24.3 157.3 31.8-15.6zM383 142l28.8 40.6-38.3-30.4-2.8 15.3 60.5 33.2-35.8-61.3zm-18.1 5.5-13.8 7.2-41.2 143.4-3.2 105 11.1-16.6zm9.8 38.3-37.1 188.3 12.8 7.9zm115.8 13.5-107.4 21.3-17.2 125 24.4-73 33.3-6.4zM315 234.7l-21.7 4.8-3.7 9.4 20.1 1.7zm-38.4 23.4c-37.4-.3-69.1 25.4-69.1 25.4l69.8 14.4 18.2 67.7-1.2-68.4 11.6-32.9c-9.9-4.3-19.8-6.1-29.3-6.2zM170.2 290l-38.4 8.8-106.33 68.6L218.5 340l31-16.9 35.3 63.4-20.2-78.1zm78.3 58-41.1 4.5 4 20.6h35.9l33.4 27.1z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPaperCraneIcon })
);
