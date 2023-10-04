import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconWavesIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'waves'];
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
        d="M400.9 104.8c-12 30-41 47.9-99.7 43.9-13.7-1.8-27.6-4.1-41.6-6.7-119.1-37.2-236.24-37.2-236.24 37.2 33.48-37.2 117.74-30.8 225.04-4 116.8 29.2 241.8 41.2 241.8-51.8-18.4 19.3-53.4 28.6-96.6 30.4 10-10.4 12.5-26.7 7.3-49zM147 187.5c-70.75-.3-123.64 16.1-123.64 66.1 33.48-37.2 117.74-34.8 225.04-8 116.8 29.2 241.8 45.2 241.8-47.8-35.4 37.2-130.2 39.6-230.6 8-37.7-11.9-78-18.2-112.6-18.3zm-23.9 69.6c-58.44-.2-99.74 15.6-99.74 70.9 33.48-37.2 122.34-44.3 225.04-18.6 121 30.2 241.8 37.2 241.8-37.2-35.4 37.2-132.1 22.6-230.6 4-48.4-7.5-96.5-19.1-136.5-19.1zm0 74.3c-58.44-.1-99.74 15.8-99.74 71 19.03-21.1 55.52-30.3 102.54-30.8-10.4 10.4-12.9 26.9-7.7 49.4 13.9-34.8 52-51.8 130.3-37.2 122.6 22.8 241.7 37.2 241.7-37.2-35.4 37.2-132.1 18.6-230.6 0-48.4-7.6-96.5-15.1-136.5-15.2z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconWavesIcon })
);
