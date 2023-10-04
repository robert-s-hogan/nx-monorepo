import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconEvasionIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'evasion'];
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
        d="M315.4 20.34L228 70.5l146-32.28zM67.73 23l-24 16H212.3l-24-16zM73 57v30h16V57zm34 0v30h42V57zm60 0v30h16V57zm73.4 33.86l175.1 41.54-39.9-40.56zM57 105v16h142v-16zm169.1 7.9l50.1 57.8 49.5-3.2zM105 139v44h46v-44zm-89 59v33h480v-33zm0 51v247h36.68l11.99-10.8-25.34-28.1 40.21 14.8 15.27-13.7-14.04-16.5L107.5 413l-11.55-20.8-30.81-27.5 32.17 5.1 49.49-17.2-17.9-32.6 27.6 15.7 9.6-22.5 10.5 45.1 43.2 38.1-16.1 26.5 8.7 8.7 40.7-4.4-25.1 19.9 12.9 12.8-20.1 36.1h177.5l12.5-33.1-36.6-18.1c-14 12.8-24.1 28.3-44 36.9l-41.3-35 11.6-13.8 29.7 25.2c21.9-24 30-38.3 43.2-69.3l-17.4-4.6-30.4 21.6-.9-17.4 28.6-19.3 32.6.9c-4.6-7.3-5.9-17-3.5-26.2 3.8-14.9 16.2-25.2 29.2-24.5 1.5.1 3 .3 4.4.7 14.2 3.7 22.2 20.3 17.9 37.1-3.2 12.4-12.3 21.9-23.2 24.1l20.1 17.8 23.5-13.7 12.5 11.2-38.1 20.9-20.7-17.9-12.5 33 38.7 22-16.5 41.5H496V249z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconEvasionIcon })
);
