import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSecurityGateIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'security-gate'];
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
        d="M41 25v462h46V71h31.3c-9-3.83-15.3-12.74-15.3-23s6.3-19.17 15.3-23H41zm96.7 0c9 3.83 15.3 12.74 15.3 23s-6.3 19.17-15.3 23h36.4c-4.5-6.57-7.1-14.49-7.1-23s2.6-16.43 7.1-23h-36.4zm70.3 0c-12.8 0-23 10.19-23 23s10.2 23 23 23 23-10.19 23-23-10.2-23-23-23zm33.9 0c4.5 6.57 7.1 14.49 7.1 23s-2.6 16.43-7.1 23h36.4c-9-3.83-15.3-12.74-15.3-23s6.3-19.17 15.3-23h-36.4zm55.8 0c9 3.83 15.3 12.74 15.3 23s-6.3 19.17-15.3 23H329v416h46V25h-77.3zm173.9 32.64l-32 32 12.8 12.76 32-32.04-12.8-12.72zM393 121v46h38.9c5.1 0 5.1-1.2 6-3 1-1.9 1.1-4 1.1-4v-32s-.1-2.1-1.1-4c-.9-1.8-.9-3-5.9-3h-39zm69 14v18h32v-18h-32zm-257.8 13.3c-17 2.2-32.5 22.1-32.5 48 0 14.2 5.1 26.8 12.3 35.4l8.5 10.3-13.3 2.5c-9.3 1.8-16.1 6.9-22 14.9-5.9 8-10.3 19.3-13.5 32.3-5.8 23.3-7 52.1-7.2 77.4h31.4l8.5 114.9c21.8 4.8 44.9 4.5 65.9 0l7.5-114.9h29.7c0-25.6-.4-54.7-5.5-78.4-2.9-12.9-7.2-24.2-13.1-32.1-6-8.1-13.3-13-23.8-14.7l-13.6-2 8.8-10.8c6.6-8.6 11.2-21 11.2-34.8 0-27.5-17.1-48-35.8-48h-3.5zm248.2 37.3l-12.8 12.8 32 32 12.8-12.8-32-32z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSecurityGateIcon })
);
