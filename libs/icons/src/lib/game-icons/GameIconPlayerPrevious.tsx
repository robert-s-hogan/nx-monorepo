import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPlayerPreviousIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'player-previous'];
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
        d="M208 16l-64 64 64 64V96h160V64H208V16zm-83.7 111.9c-17.9 2.3-34.14 23.2-34.14 50.4 0 14.8 5.2 28 12.84 37.2l9 10.8-13.94 2.6c-9.8 2-17 7.1-23.2 15.6-6.2 8.5-10.9 20.3-14.2 33.9-6 24.6-7.3 54.7-7.5 81.3h32.7l9 120.5c22.84 5.2 47.14 5 69.14 0l7.9-120.5h31.2c0-26.9-.4-57.4-5.8-82.3-3-13.6-7.5-25.4-13.8-33.8-6.2-8.4-13.8-13.5-24.8-15.3l-14.3-2.2 9.1-11.2c7.2-9.1 12.1-22.1 12.1-36.6 0-29-18.1-50.3-37.6-50.3l-3.7-.1zm256 0c-17.9 2.3-34.1 23.2-34.1 50.4 0 14.8 5.2 28 12.8 37.2l9 10.8-13.9 2.6c-9.8 2-17 7.1-23.2 15.6-6.2 8.5-10.9 20.3-14.2 33.9-6 24.6-7.3 54.7-7.5 81.3h32.7l9 120.5c22.8 5.2 47.1 5 69.1 0l7.9-120.5h31.2c0-26.9-.4-57.4-5.8-82.3-3-13.6-7.5-25.4-13.8-33.8-6.2-8.4-13.8-13.5-24.8-15.3l-14.3-2.2 9.1-11.2c7.2-9.1 12.1-22.1 12.1-36.6 0-29-18.1-50.3-37.6-50.3l-3.7-.1z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPlayerPreviousIcon })
);
