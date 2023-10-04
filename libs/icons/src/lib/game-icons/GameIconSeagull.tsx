import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSeagullIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'seagull'];
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
        d="M377 67.5c-29.1.42-59.1 23.22-68.2 91.7-1.7 12.6-8.4 24.8-18.2 36.5 7.1-3 14.1-4.8 21-4.8 5 0 9.8.9 14.5 2.9 19.1 8.4 30.9 19.7 36.4 32.5s4.3 26.1.7 37.6c-3.6 11.4-9.6 21.4-15.1 28.9-5.4 7.6-9.6 12.1-12.2 14.4-33.6 30.6-94.9 37.4-148.2 38.7-43.3 1.7-86.3-3-129.12-8.2 0 0-31.13 10-41.99 14.5 51.99 15.9 96.11 11 139.61 4.3 52 17.3 165.8 31.6 241.1-37.2 37.6-30.9 36.2-86.1 17.5-152.2l25.9-53C438 91.95 408 67.04 377 67.5zm24.9 33c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm57.6 14.6L442.7 145c6.2-.1 12.3-.4 16.9-1.1 13.7-3 22-8.5 35.8-8.3-6.7-11.4-19.1-17.8-35.9-20.5zm-148.6 93.6c-4.5.2-9.8 1.7-16.5 5-11.2 5.4-25.3 15.4-42.9 28.3-30.5 22.4-71.6 53.3-129.6 84.3 17.4 1.1 40.4 2.1 65.4 1.6 51.8-1.2 110.5-10.4 136.5-34.1h.1c-.1.1 4.9-5 9.6-11.5 4.7-6.5 9.8-15.1 12.5-23.8 2.8-8.8 3.3-17.3 0-25.1-3.4-7.9-10.8-16-27.1-23-1.6-.8-3.3-1.2-5-1.5-1-.1-2-.2-3-.2zm-2 173c-6.1 1.5-12.1 2.7-18 3.6v38.1c-5.8-.1-11.8 0-18 .5v-36.8c-6.1.4-12.1.5-18 .4V426c-4.3.7-8.6 1.5-13 2.5v16h104c-8-10.1-21-16.4-37-19.2z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSeagullIcon })
);
