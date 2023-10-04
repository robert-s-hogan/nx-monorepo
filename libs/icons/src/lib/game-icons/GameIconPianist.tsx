import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPianistIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'pianist'];
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
        d="M332 53.97v16.62h123V53.97zM179.2 64.88c-16.3-.11-30.3 17.89-31.6 40.72-1.3 23.4 11.2 43.1 27.9 44.1s31.4-17.3 32.7-40.7c1.3-23.4-11.2-43.14-27.9-44.09h-1.1zm161.1 20.77V472.4h106.3V85.65zM121.2 142.4C70.8 192.1 73.37 311.5 93.64 343l101.06 7 17.6 37.4-11.3-83V302l-34.9-10.2c-1.2-6.9-2.3-13.6-3.2-20.3l-17.1 2.5-22.9-71.4 11.9-3.8 19.7 61.3 51.1-7.5c4.6-6.6 12.1-10.8 20.7-10.8h25.6l-4.6-5.8-65.6-5.9-9.4-60.7zm175.4 41.1-4.9 15.9 11.3 3.5-16.4 50.1h-52.4c-5.1 0-9.9 2-13.5 5.6-3.6 3.5-5.6 6.4-5.6 11.4h104v-17h-14.9l17.3-53c.7-2.2.5-4.5-.5-6.5-1-1.9-2.8-3.4-5-4.1zM215.1 283v14.6h14.5c2.2 9.7 8.1 43.5 8.1 126.4h16.6c0-82.9 5.9-116.7 8.1-126.4h56.7V283zM49.82 359.1v24.1H174.9v-24.1zM60.35 397l.78 9s3.97 46 3.97 67h16.66c0-16 3.38-46 5.04-59h51.4c1.6 13 5 43 5 59h16.7c0-21 3.9-67 3.9-67l.8-9zm164.75 40.7-10 34.8h104v-34.8z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPianistIcon })
);
