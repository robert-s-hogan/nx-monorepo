import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTrackedRobotIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'tracked-robot'];
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
        d="M231.377 25l-6 30H240v18h-18.223l-4.347 21.736L229.562 119H247V96h18v23h17.438l12.132-24.264L290.223 73H272V55h14.623l-6-30h-49.246zM104.32 71.486l-13.459 39.092H151V86.551l-46.68-15.065zm303.36 0L361 86.551v24.027h60.139l-13.46-39.092zM170.055 105l14.54 130.87L211.728 263h88.546l27.131-27.13L341.945 105h-32.382l-16 32h-75.125l-16-32h-32.383zm-69.334 14.027l-10.994 29.035 41.06 9.54 10.992-29.036-41.058-9.539zm269.504 9.55l10.988 29.025 41.06-9.54-7.378-19.486h-44.67zM100.3 168.996l8.933 59.187 29.666-4.479-7.156-47.404-31.443-7.305zm311.398 0l-31.443 7.304-7.156 47.404 29.666 4.479 8.933-59.188zM192 183h128v18H192v-18zm-54.092 59.057l-24.369 3.68c1.584 7.409 4.132 13.435 7.977 19.396 3.659 5.672 9.14 11.725 15.767 18.353-1.142-13.144-1.698-27.58.625-41.43zm236.184 0c2.323 13.85 1.767 28.285.625 41.43 6.626-6.63 12.108-12.682 15.767-18.354 3.845-5.96 6.393-11.987 7.977-19.397l-24.37-3.68zM217 281v51.273L243.727 359h24.546L295 332.273V281h-78zM99.768 313L89 323.947V327h62v-3.273L140.273 313H99.768zm272 0L361 323.947V327h62v-3.273L412.273 313h-40.505zM89 345v14h62v-14H89zm272 0v14h62v-14h-62zm-153 3.727l-7 7V405l27.117-36.156L208 348.727zm96 0l-20.117 20.117L311 405v-49.273l-7-7zM169 361v62h14v-62h-14zm160 0v62h14v-62h-14zM89 377v14h62v-14H89zm272 0v14h62v-14h-62zM89 409v14h62v-14H89zm272 0v14h62v-14h-62zM89 441v14h62v-14H89zm272 0v14h62v-14h-62zM89 473v14h62v-14H89zm272 0v14h62v-14h-62z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTrackedRobotIcon })
);
