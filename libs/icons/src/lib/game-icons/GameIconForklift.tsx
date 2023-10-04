import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconForkliftIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'forklift'];
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
        d="M360.998 56.998v222.004h14.004V56.998h-14.004zm-288 128v126.004h16.004v-110h127.594L257 328.947l-85.293 38.035 8.02 8.02h40.546l16-16h50.62l-53.54-174.004H72.999zm320 64v30.004h14.004v-30.004h-14.004zm-270.451 20.584C114.487 269.732 106 272 106 272v39.002h9.727l49.646 49.646C163.42 341.07 156.172 287.981 134 272c-2.366-1.705-5.988-2.345-9.85-2.418-.53-.01-1.066-.01-1.603 0zm238.451 27.416v14.004h46.004v-14.004h-46.004zm-336 32v55.121c13.4-15.367 33.091-25.117 55.002-25.117 40.21 0 72.998 32.788 72.998 72.998a73.26 73.26 0 0 1-.346 7.002h79.07c4.342-27.13 27.966-48 56.278-48 26.223 0 48.418 17.908 55.002 42.105v-29.38l-26.729-26.729h-72.546l-16 16h-55.454l-64-64H24.998zm336 0v142.004h14.004V328.998h-14.004zm32 0v62.004h97.277l-14.004-14.004h-69.269v-48h-14.004zM80 376.998c-30.483 0-55.002 24.52-55.002 55.002 0 30.483 24.52 55.002 55.002 55.002 30.483 0 55.002-24.52 55.002-55.002 0-30.483-24.52-55.002-55.002-55.002zm0 30.004c13.7 0 24.998 11.298 24.998 24.998 0 13.7-11.298 24.998-24.998 24.998-13.7 0-24.998-11.298-24.998-24.998 0-13.7 11.298-24.998 24.998-24.998zm208 1.996A38.867 38.867 0 0 0 248.998 448 38.867 38.867 0 0 0 288 487.002 38.867 38.867 0 0 0 327.002 448 38.867 38.867 0 0 0 288 408.998zM288 432a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconForkliftIcon })
);
