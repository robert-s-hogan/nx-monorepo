import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconArabicDoorIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'arabic-door'];
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
        d="M256 20c-44 0-85.11 36.98-113.305 82.525-24.87 40.175-39.3 90.822-22.535 135.27L94 250.875V455h36V273.125l39.436-19.719-10-16.668c-19.098-31.828-9.936-76.81 13.869-115.263C197.11 83.02 236 56 256 56c20 0 58.89 27.02 82.695 65.475 23.805 38.454 32.967 83.435 13.87 115.263l-10 16.668L382 273.125V455h36V250.875l-26.16-13.08c16.766-44.448 2.334-95.095-22.535-135.27C341.11 56.98 300 20 256 20zm9 54.436V492h101V283.016l-46.443-23.225c12.021-19.222 28.122-39.043 27.336-62.879-2.362-49.393-33.647-94.935-76.024-119.818-1.873-.956-3.843-1.884-5.869-2.658zm-18 .384c-24.927 9.489-42.887 31.542-58.365 52.46-17.346 26.324-28.65 59.052-20.375 90.476 4.108 12.904 10.876 22.771 17.332 36.484 3.424 6.379 2.441 4.667-21.881 19.918L146 283.016V492h101zM167 358h18c0 5.75 1.834 8.923 4.479 11.273C192.123 371.624 196 373 200 373c4 0 7.877-1.376 10.521-3.727C213.166 366.923 215 363.75 215 358h18c0 10.25-4.166 19.077-10.521 24.727C216.123 388.376 208 391 200 391s-16.123-2.624-22.479-8.273C171.166 377.077 167 368.25 167 358zm112 0h18c0 5.75 1.834 8.923 4.479 11.273C304.123 371.624 308 373 312 373c4 0 7.877-1.376 10.521-3.727C325.166 366.923 327 363.75 327 358h18c0 10.25-4.166 19.077-10.521 24.727C328.123 388.376 320 391 312 391s-16.123-2.624-22.479-8.273C283.166 377.077 279 368.25 279 358zM94 473v19h36v-19zm288 0v19h36v-19z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconArabicDoorIcon })
);
