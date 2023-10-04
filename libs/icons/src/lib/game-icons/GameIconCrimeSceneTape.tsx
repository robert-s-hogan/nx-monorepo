import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCrimeSceneTapeIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'crime-scene-tape'];
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
        d="M390.527 22.85l-72.185 24.5-20.711 38.71 72.185-24.501zm16.83 6.697L394.76 53.094l18.463-6.268zM121 41v54.324l30-10.181V71h41.664l88.385-30zm172.398 14.816l-72.185 24.502-20.711 38.711 72.184-24.502zM391 73.38L361 83.56V205.43l30 9.564zM196.268 88.785l-72.186 24.502-7.588 14.182 30.496 9.724 28.569-9.697zM343 89.67L175.865 146.4 343 199.69zM99.139 121.754l-.276.094.192.06zm-30.98 9.197l28.995 40.733 93.37 29.77-28.997-40.733zm121.948 38.883l28.997 40.732 93.37 29.772-28.995-40.733zM121 198.18v161.793l30-11.137v-141.09zm191.06 10.539l28.997 40.732 41.777 13.32 31.547-11.709-8.951-12.574zM169 213.484v128.67l116.621-43.293C281.521 294.4 279 288.468 279 282c0-13.7 11.3-25 25-25 .565 0 1.124.027 1.68.065zm279.635 44.063l-91.873 34.105-27.06 42.045 91.874-34.105zm-131.711 3.101c7.426 6.439 12.262 14.032 12.057 22.118L343 277.56v-8.598zM304 275c-3.973 0-7 3.027-7 7s3.027 7 7 7 7-3.027 7-7-3.027-7-7-7zm24.637 27.092l-91.873 34.105-27.06 42.047 91.872-34.105zM391 330.142l-30 11.137v83.834l30 6.024zM208.639 346.64l-83.713 31.076 55.945 11.232.707-.261zM343 347.96l-128.563 47.726L343 421.5zM80.54 387.162l30.355 36.695 88.02 17.672-30.356-36.695zm116.034 23.297l30.356 36.695 88.021 17.672-30.355-36.695zm116.035 23.297l30.356 36.695 88.02 17.672-30.356-36.695zM121 444.244V487h30v-36.732zm48 9.637V487h164.951zm259.645 3.172l20.35 24.6 3.958-19.72z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCrimeSceneTapeIcon })
);
