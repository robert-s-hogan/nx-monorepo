import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconWindchimesIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'windchimes'];
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
        d="M256 22.82c-14.8 0-27 12.08-27 26.97 0 14.9 12.2 26.99 27 26.99 14.9 0 27-12.09 27-26.99 0-14.89-12.1-26.97-27-26.97zm0 17.22c5.4 0 9.8 4.37 9.8 9.75 0 5.39-4.4 9.77-9.8 9.77-5.3 0-9.8-4.38-9.8-9.77 0-5.38 4.5-9.75 9.8-9.75zM177 101c-4.1 0-7.7 3-8.5 7.1l-1.7 10.7-18.8 8.5c-3.6 1.8-5.7 5.8-4.8 9.8.9 3.9 4.4 6.7 8.4 6.7h208.9c4 0 7.5-2.8 8.3-6.7 1-4-1.1-8-4.7-9.8l-18.8-8.5-1.8-10.7c-.7-4.1-4.3-7.1-8.4-7.1zm69.2 61-23.6.2 1 229.8 23.8-.2zm68.7 1.9-6.8 198.5 25.2 1.2 6.8-198.6zm-114.7.1-25.2.9 6.3 255.7 25.2-1-3.4-137.5c-7.3-3.4-12.3-10.7-12.4-19.2-.3-8.4 4.5-15.7 11.4-19.3zm68 .1-.6 75.9 25.2-.4.6-75zm31.2 90.5-41.9.7.1 12.9 41.3-.7zm-87.4 1.5c-3.6.1-6.4 3-6.3 6.6 0 3.5 3 6.4 6.5 6.3h.1l-.1-12.9zm80.5 26.6-25.2.4-.4 48.4 25.2.5zm-20.2 132.9c-.3 0-.8.1-1.1.1-2.8.4-5.1 1.9-6.7 4.1l-22.4 30.7c-1.7 2.2-2.3 4.9-1.9 7.6.5 2.8 1.9 5.2 4.2 6.8l30.5 22.2c2.3 1.7 5 2.4 7.7 2 2.8-.4 5.2-2 6.8-4.1 6.2-8.7 16-22.1 22.3-30.7 1.6-2.2 2.3-5 1.9-7.7-.4-2.6-1.9-5.1-4.1-6.8l-30.6-22.2c-1.9-1.4-4.3-2-6.6-2z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconWindchimesIcon })
);
