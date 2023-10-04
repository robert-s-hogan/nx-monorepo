import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconUnlitCandelabraIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'unlit-candelabra'];
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
        d="M249.344 17.344l-.97 37.375h-14.968v147.56h43.375V54.72h-12.936l-14.5-37.376zm135.22 0L376.28 54.72h-15.436v147.56h43.375V54.72h-12.47l-7.188-37.376zm-252.502.312L121.094 54.72h-14.03v147.56h43.374V54.72h-14.344l-4.03-37.064zm-30.78 204.375c0 16.145 9.13 26.056 20.343 29.72v41.72c0 30.783 24.7 56.53 55.688 56.53h70.125v91.5c-22.293 3.78-42.157 21.122-42.157 52.03h103c0-30.993-19.874-48.318-42.155-52.06V350h69.28c30.987 0 56.533-25.546 56.533-56.53v-41.345c11.76-3.307 21.593-13.317 21.593-30.094h-61.06c0 16.353 9.37 26.297 20.78 29.845v41.594c0 20.7-17.14 37.842-37.844 37.842h-69.28v-79.53c11.213-3.643 20.343-13.555 20.343-29.75h-61.064c0 16.93 10.077 27.015 22.03 30.218v79.063h-70.124c-20.702 0-37-16.946-37-37.844v-41.22c11.955-3.18 22.032-13.234 22.032-30.22H101.28z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconUnlitCandelabraIcon })
);
