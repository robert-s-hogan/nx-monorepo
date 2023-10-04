import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDiceShieldIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'dice-shield'];
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
        d="M32 24C0 312 128 488 256 488S512 312 480 24C320 56 192 56 32 24zm223.9 58.8c4.5 0 9.4 1.1 12.8 2.9l115.9 67.1c7.4 4.1 7.4 10.9 0 15.2l-115.9 66.9c-7.2 4.3-18.5 4.3-25.7 0L126.8 168c-7.3-4.3-7.3-11.1 0-15.2L243 85.7c3.4-1.8 7.9-2.9 12.9-2.9zm-89 62.6c-21.6-.4-33.1 15-18.2 24.3 9.6 4.8 23.7 4.4 32.7-.8 8.8-5.3 9.5-13.7 1.5-19.4-4.3-2.5-10-4-16-4.1zm178.6.1c-20.8.4-31.3 15.5-16.3 24.5 9.6 4.9 23.9 4.6 33-.7 8.9-5.3 9.5-13.9 1.2-19.6-4.2-2.4-9.9-4-15.9-4.2h-2zm-89 0c-6.6-.1-13 1.5-17.7 4.2-10.2 5.6-10.4 15.1-.6 20.9 9.9 5.8 25.8 5.6 35.1-.6 15-9 4.6-24.3-16.8-24.5zm-141 41c1.5.1 3.4.5 5.6 1.6l111.5 64.5c7.2 4.1 12.9 14.2 12.9 22.5v119.7c0 8.3-5.7 11.7-12.9 7.6L121.2 338c-7.4-4.3-13.2-14.2-13.2-22.6V195.7c0-6.2 3-9.2 7.5-9.2zm281.3 0c4.2 0 7.2 3 7.2 9.2v119.7c0 8.4-6 18.3-13 22.6l-111.5 64.4c-7.2 4.1-12.9.7-12.9-7.6V275.1c0-8.3 5.7-18.4 12.9-22.5L391 188.1c2.1-1.1 4.2-1.5 5.8-1.6zm-185 65.5h-1.1c-5.3.4-8.5 4.8-8.5 11.6-.6 10.4 7.2 24.1 16.9 29.8 9.8 5.6 17.6 1.1 17.2-9.9.2-14.2-13.3-31.1-24.5-31.5zm130.9 21.8c-11.2.1-24.8 17.2-24.7 31.4.1 10.4 7.7 14.4 17.2 8.9 9.4-5.5 17-18.3 17.1-28.8 0-6.7-3.3-11.1-8.5-11.5h-1.1zm-216.9 22.5c-5.4.3-8.7 4.7-8.7 11.6-.5 10.5 7.3 24.1 17 29.8 9.8 5.5 17.6 1 17.2-10.1 0-14.5-14.1-31.8-25.5-31.3z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDiceShieldIcon })
);
