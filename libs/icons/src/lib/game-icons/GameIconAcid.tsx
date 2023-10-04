import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconAcidIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'acid'];
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
        d="M256.875 16A30 30 0 0 0 226 46a30 30 0 0 0 60 0 30 30 0 0 0-29.125-30zm-45 75A30 30 0 0 0 181 121a30 30 0 0 0 60 0 30 30 0 0 0-29.125-30zm74.563 30A15 15 0 0 0 271 136a15 15 0 0 0 30 0 15 15 0 0 0-14.563-15zm-30 45A15 15 0 0 0 241 181a15 15 0 0 0 30 0 15 15 0 0 0-14.563-15zM196 196c-45 0-15 30 0 45 0 150-120 225-120 255h360c0-30-120-105-120-255 15-15 45-45 0-45-15 0-30 15-60 15s-45-15-60-15z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconAcidIcon })
);
