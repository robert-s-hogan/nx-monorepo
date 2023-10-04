import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTogglesIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'toggles'];
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
        d="M96 32c-44 0-63 27.5-63 55s19 55 63 55h.12C80.75 128.6 71 108.9 71 87c0-21.91 9.75-41.6 25.12-55zm48 0c-30.5 0-55 24.52-55 55 0 30.5 24.5 55 55 55s55-24.5 55-55c0-7.4-1.5-14.45-4.1-20.89L145 132.7l-39.4-39.3 12.8-12.76L143 105.3l41.6-55.46C174.6 38.86 160.1 32 144 32zm47.9 0C207.2 45.4 217 65.09 217 87c0 21.9-9.8 41.6-25.1 55H416c44 0 63-27.5 63-55s-19-55-63-55zM96 192c-44 0-63 27.5-63 55s19 55 63 55h.12C80.75 288.6 71 268.9 71 247s9.75-41.6 25.12-55zm48 0c-30.5 0-55 24.5-55 55s24.5 55 55 55 55-24.5 55-55c0-7.4-1.5-14.5-4.1-20.9L145 292.7l-39.4-39.3 12.8-12.8 24.6 24.7 41.6-55.5c-10-10.9-24.5-17.8-40.6-17.8zm47.9 0c15.3 13.4 25.1 33.1 25.1 55s-9.8 41.6-25.1 55H416c44 0 63-27.5 63-55s-19-55-63-55zM96 334c-52 0-81 36.5-81 73s29 73 81 73h272c-18.3 0-35-6.8-47.9-18H96c-44 0-63-27.5-63-55s19-55 63-55h224.1c12.9-11.2 29.6-18 47.9-18zm272 0c18.3 0 35 6.8 47.9 18h.1c44 0 63 27.5 63 55s-19 55-63 55h-.1c-12.9 11.2-29.6 18-47.9 18h48c52 0 81-36.5 81-73s-29-73-81-73zm0 18c-30.5 0-55 24.5-55 55s24.5 55 55 55 55-24.5 55-55-24.5-55-55-55zm-25.6 16.6l25.6 25.6 25.6-25.6 12.8 12.8-25.6 25.6 25.6 25.6-12.8 12.8-25.6-25.6-25.6 25.6-12.8-12.8 25.6-25.6-25.6-25.6z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTogglesIcon })
);
