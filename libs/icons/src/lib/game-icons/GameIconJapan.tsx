import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconJapanIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'japan'];
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
        d="M336.375 22.123c.747 27.58 3.127 51.431-1.747 70.892h-20.54c-12.376 22.876-11.185 40.564-2.362 55.333l16.002-8.366c2.867-9.458-28.632-22.734 14.187-27.753 5.796 2.848 20.874 9.41 39.09 17.227 3.817-34.507 26.088-36.795 47.47-45.863l-14.343-29.667c-35.396 14.004-55.536-16.018-77.757-31.803zm4.879 127.87c-11.753 1.278-18.274 7.788-23.853 15.24-5.893 21.864-.11 43.726 1.325 65.59l-37.102 61.617c-21.8 17.135-20.912-.866-23.666-11.705-18.465 18.51-15.916 40.93-24.037 60.733l-68.241 5.963-54.99 45.715 32.795 13.25 6.294-13.913 48.365-19.875 19.215.661 1.986 21.202 14.576 17.227 33.127-29.815-8.613-17.889c16.54-9.194 16.06 3.64 23.19 6.626l16.998-6.808 7.994-14.583 6.718 12.634 13.5-23.52 13.34 13.01 15.654-25.787 13.13-123.6zM190.857 382.877l-11.263 12.258-14.576-1.325-15.405 20.208 14.742 20.868 33.127-18.55 15.9-20.54c-4.955-8.08-11.457-14.096-22.525-12.92zm-77.518 20.208c-10.171 4.3-20.488 7.123-29.813 19.877l24.514 20.538c-9.749 12.92-6.887 25.838-7.62 38.758l16.895 7.62 15.239-11.263c-2.385-18.249 3.108-35.186 11.263-51.68l-6.626-13.25z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconJapanIcon })
);
