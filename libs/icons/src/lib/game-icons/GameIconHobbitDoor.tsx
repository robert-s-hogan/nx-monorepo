import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconHobbitDoorIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'hobbit-door'];
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
        d="M256 23C127.4 23 23 127.4 23 256s104.4 233 233 233c103.1 0 190.6-67.1 221.3-160h-19C428.4 411.8 349.2 471 256 471c-118.8 0-215-96.2-215-215S137.2 41 256 41c93.2 0 172.4 59.2 202.3 142h19C446.6 90.12 359.1 23 256 23zm-9 50.22c-16 .77-31.4 3.58-46 8.17V359h46V73.22zm18 0V215h46V81.39c-14.6-4.59-30-7.4-46-8.17zm-82 14.89c-16.8 7.3-32.3 17.09-46 28.79v2.1h46V88.11zm146 0V311h46V116.9c-13.7-11.7-29.2-21.49-46-28.79zM119 134.6C90.37 166.9 73 209.4 73 256c0 46.6 17.37 89.1 46 121.4v-89c-9.7-7.5-16-19.3-16-32.4 0-13.1 6.3-24.9 16-32.4v-89zm274 0v242.8c12.7-14.3 23.1-30.6 30.9-48.4H411V183h12.9c-7.8-17.8-18.2-34.1-30.9-48.4zM137 137v78.6c2.3-.4 4.6-.6 7-.6 18.1 0 33.6 12 39 28.4V137h-46zm292 64v46h46v-46h-46zm-285 32c-12.8 0-23 10.2-23 23s10.2 23 23 23 23-10.2 23-23-10.2-23-23-23zm121 0v205.8c16-.8 31.4-3.6 46-8.2V233h-46zm164 32v46h46v-46h-46zm-246 3.6c-5.4 16.4-20.9 28.4-39 28.4-2.4 0-4.7-.2-7-.6v98.7c13.7 11.7 29.2 21.5 46 28.8V268.6zM329 329v94.9c16.8-7.3 32.3-17.1 46-28.8V329h-46zm-128 48v53.6c14.6 4.6 30 7.4 46 8.2V377h-46z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconHobbitDoorIcon })
);
