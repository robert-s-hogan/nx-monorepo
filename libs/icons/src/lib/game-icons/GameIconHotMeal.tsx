import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconHotMealIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'hot-meal'];
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
        d="M267.895 20.495s-12.96 6.614-25.907 16.354c-6.473 4.87-13.025 10.52-18.205 17.027-5.18 6.506-9.402 14.232-8.76 23.266.714 10.04 7.52 17.517 14.78 22 7.259 4.482 15.502 7.194 23.265 9.869 7.764 2.675 15.05 5.313 19.672 8.168 4.623 2.854 6.052 4.703 6.283 7.963.027.37-.418 2.346-2.613 5.103-2.195 2.757-5.726 5.93-9.42 8.71-7.388 5.557-15.095 9.54-15.095 9.54l8.21 16.016s8.826-4.494 17.706-11.174c4.44-3.34 8.976-7.227 12.681-11.88 3.705-4.655 6.993-10.44 6.485-17.593-.714-10.04-7.52-17.517-14.78-22-7.259-4.483-15.502-7.194-23.265-9.869-7.764-2.675-15.05-5.313-19.672-8.168-4.623-2.855-6.052-4.703-6.283-7.963-.16-2.252 1.217-6.168 4.886-10.777 3.67-4.61 9.218-9.549 14.946-13.858 11.454-8.617 23.296-14.718 23.296-14.718zm-128 48s-12.96 6.614-25.907 16.354c-6.473 4.87-13.025 10.52-18.205 17.027-5.18 6.506-9.402 14.232-8.76 23.266.714 10.04 7.52 17.517 14.78 22 7.259 4.482 15.502 7.194 23.265 9.869 7.764 2.675 15.05 5.313 19.672 8.168 4.623 2.854 6.052 4.703 6.283 7.963.027.37-.418 2.346-2.613 5.103-2.195 2.757-5.726 5.93-9.42 8.71-7.388 5.557-15.095 9.54-15.095 9.54l8.21 16.016s8.826-4.494 17.706-11.174c4.44-3.34 8.976-7.227 12.681-11.881 3.705-4.654 6.993-10.44 6.485-17.592-.714-10.04-7.52-17.517-14.78-22-7.259-4.483-15.502-7.194-23.265-9.869-7.764-2.675-15.05-5.313-19.672-8.168-4.623-2.855-6.052-4.703-6.283-7.963-.16-2.252 1.217-6.168 4.886-10.777 3.67-4.61 9.218-9.549 14.946-13.858 11.454-8.617 23.296-14.718 23.296-14.718zm256 0s-12.96 6.614-25.907 16.354c-6.473 4.87-13.025 10.52-18.205 17.027-5.18 6.506-9.402 14.232-8.76 23.266.714 10.04 7.52 17.517 14.78 22 7.259 4.482 15.502 7.194 23.265 9.869 7.764 2.675 15.05 5.313 19.672 8.168 4.623 2.854 6.052 4.703 6.283 7.963.027.37-.418 2.346-2.613 5.103-2.195 2.757-5.726 5.93-9.42 8.71-7.388 5.557-15.095 9.54-15.095 9.54l8.21 16.016s8.826-4.494 17.706-11.174c4.44-3.34 8.976-7.227 12.681-11.881 3.705-4.654 6.993-10.44 6.485-17.592-.714-10.04-7.52-17.517-14.78-22-7.259-4.483-15.502-7.194-23.265-9.869-7.764-2.675-15.05-5.313-19.672-8.168-4.623-2.855-6.052-4.703-6.283-7.963-.16-2.252 1.217-6.168 4.886-10.777 3.67-4.61 9.218-9.549 14.946-13.858 11.454-8.617 23.296-14.718 23.296-14.718zM256 187.501c-13 0-21.792 5.914-28.512 15.994-2.782 4.173-5.027 9.1-6.715 14.465 11.32-1.607 23.07-2.455 35.227-2.455 12.157 0 23.906.848 35.227 2.455-1.688-5.365-3.933-10.292-6.715-14.465-6.72-10.08-15.512-15.994-28.512-15.994zm0 46c-119.427 0-193.752 86.039-198.54 174.004h397.08C449.751 319.54 375.426 233.5 256 233.5zM22.363 412.14L9.637 424.866C27.757 442.987 48 443.501 64 443.501h384c16 0 36.242-.514 54.363-18.635l-12.726-12.726C475.757 426.019 464 425.505 448 425.505H64c-16 0-27.758.514-41.637-13.365zm90.451 49.361l20.002 30.004h246.368l20.002-30.004z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconHotMealIcon })
);
