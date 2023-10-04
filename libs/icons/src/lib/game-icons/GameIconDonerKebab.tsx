import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDonerKebabIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'doner-kebab'];
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
        d="M247 16v23.14c3-.08 6-.14 9-.14s6 .06 9 .14V16h-18zm9 41c-38.8 0-73.9 7.82-98.8 17.4-12.4 4.79-22.3 10.06-28.7 14.64-5.6 4.07-7.1 7.73-7.4 7.14L128 142c25.3 6.6 48.3 6.2 70.7 1.9l3.4 17.6c-22.3 4.4-45.9 5.2-71.2-.3l22.6 150.7c12.4 5 28.7 6 42.7 6.3l-.4 18c-11.4-.2-25.6-.6-39.3-4.3l2.9 19.5c4.8 2.1 13.9 4.8 22.8 6.3 11.4 1.8 23.8 2.2 26.7 1.8l2.6 17.8c-8.1 1.2-19.6.2-32.2-1.9-5.8-.9-11.5-1.9-16.8-3.4l6.1 40.5c2.1 2.9 12.2 9.1 27.9 12.7 16.5 3.8 38 5.8 59.5 5.8s43-2 59.5-5.8c15.7-3.6 25.8-9.8 27.9-12.7l3.5-23.2c-6.7 2.5-13.8 4.4-20.9 5.7-16 3-31.6 3.4-43 1.1l3.4-17.6c7.6 1.4 22.3 1.4 36.3-1.2 10.3-1.9 20.3-5.4 27.4-9.6l17.2-114.4c-48.2 17.3-82.8 15.3-116 14.6l.4-18c36 .8 68.4 3.2 118.7-16.9l16.3-108.9c-41 20.4-94.6 20.8-140.6 16.8l1.6-18c49.6 4.5 106.7 1.9 142.4-21.5l.8-5.22c-.3.59-1.8-3.07-7.4-7.14-6.4-4.58-16.3-9.85-28.7-14.64-24.9-9.58-60-17.4-98.8-17.4zm-76.2 145c5.9 1.4 22.6 2.8 39.6 3.1 17 .2 35.2-.5 45.5-2.2l2.8 17.8c-12.6 2-30.9 2.6-48.5 2.4-17.7-.3-33.8-1.2-43.6-3.5l4.2-17.6zm146.5 104.3l2.8 8.6 2.8 8.6c-29.3 9.5-68.1 12.2-95.8 6.7l1.7-8.8 1.7-8.8c23.3 4.5 61.3 2 86.8-6.3zM247 448.9V496h18v-47.1c-3 .1-6 .1-9 .1s-6 0-9-.1z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDonerKebabIcon })
);
