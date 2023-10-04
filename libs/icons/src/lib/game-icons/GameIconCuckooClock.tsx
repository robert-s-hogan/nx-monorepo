import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCuckooClockIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'cuckoo-clock'];
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
        d="M256 15.27L95.64 175.6l12.76 12.8L256 40.73 403.6 188.4l12.8-12.8L256 15.27zm0 53.46L137 187.7V311h238V187.7L256 68.73zm0 82.27c40.2 0 73 32.8 73 73s-32.8 73-73 73-73-32.8-73-73 32.8-73 73-73zm-9 18.7c-26.2 4.3-46 26.9-46 54.3 0 30.5 24.5 55 55 55s55-24.5 55-55c0-27.4-19.8-50-46-54.3v38.4l13.1-7.8 9.2 15.4-40.3 24.2v-70.2zm227.4 106c-18.4 15.9-30.8 13-48.9 10.8-3 23.1 3.3 49.3 12.2 68.2-4.9.9-9.9 2.6-14.7 5.1-16.1 8.3-25.1 22.8-20.2 32.3 5 9.5 22 10.4 38.1 2.1s25.1-22.8 20.2-32.3c-7-17.6-16.7-38.9-18.2-54.8 16.4.6 33.2-4.7 45.5-20.2l-14-11.2zM215 329v82.6c3-.4 6-.6 9-.6s6 .2 9 .6V329h-18zm64 0v39.5c2.6-.3 5.3-.5 8-.5 3.4 0 6.7.2 10 .8V329h-18zM95.22 383.7c-13.89 18.7-21.14 44.5-22.61 65.4-4.7-1.7-9.98-2.6-15.37-2.8-18.13-.6-33.12 7.6-33.48 18.3-.34 10.7 14.05 19.9 32.16 20.5 18.12.6 33.1-7.6 33.46-18.3 2.71-19 4.49-41.8 11.02-56.7 14 8.6 31.3 12.2 49.6 4.7l-6.8-16.6c-23.5 5-33.5-3.8-47.98-14.5zM287 386c-5 0-14 1-16.8 2.2-1.3.6-2 1.2-2.2 1.4v52.8c.2.2.9.8 2.2 1.4C273 445 282 446 287 446s14-1 16.8-2.2c1.3-.6 2-1.2 2.2-1.4v-52.8c-.2-.2-.9-.8-2.2-1.4C301 387 292 386 287 386zm-63 43c-5 0-14 1-16.8 2.2-1.3.6-2 1.2-2.2 1.4v52.8c.2.2.9.8 2.2 1.4C210 488 219 489 224 489s14-1 16.8-2.2c1.3-.6 2-1.2 2.2-1.4v-52.8c-.2-.2-.9-.8-2.2-1.4C238 430 229 429 224 429z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCuckooClockIcon })
);
