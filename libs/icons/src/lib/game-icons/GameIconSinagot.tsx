import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSinagotIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'sinagot'];
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
        d="M117.3 41.08c4.5 117.22-11 230.92-33.94 343.02 48.74 1.5 94.14-1.7 140.64-9 4.3-16.6 8.2-35.8 11.5-56.5-2.3-54.1-12.5-109.7-19.3-168.5zm69.6 15.03l.1 35.03L205.1 111l-.2-54.89zM264 123.6c4.5 93.3-5.8 198.4-25.1 265l116.2-12.5c3.3-60.6.3-114.4-6.3-174.3zm54.4 2.5v23.2l18 16.6v-39.8zm154.2 262.2c-53.5 11.2-87.7 15.4-136.2 22.4v-14.5l-18 1.9v15c-36.4 4.4-74.2 6.9-112.5 8.2l-.1-25.3c-6 .8-12 1.5-18 2.2l.1 23.6c-54.7 1.4-110.49.5-164.98-.3 14.72 13.6 24.36 31.5 46.67 43.8 101.81 9.9 200.41 4.6 299.21 0l22.4-46 97.9-17z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSinagotIcon })
);
