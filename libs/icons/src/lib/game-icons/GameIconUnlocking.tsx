import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconUnlockingIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'unlocking'];
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
        d="M78.53 157.188c-23.843 0-43.93 21.364-50.28 50.593-4.216 5.54-6.75 12.435-6.75 19.876 0 7.506 2.56 14.467 6.844 20.03 6.475 28.963 26.485 50.064 50.187 50.064 24.293 0 44.72-22.173 50.657-52.25H234.97v65.594h19.31v-44.22h18.69v44.22h20.092V286h18.688v25.094h15.125V245.5h17.97v-33.47h-215.19c-5.248-31.382-26.14-54.843-51.124-54.843zM424.44 169.28c-31.78 0-57.813 26.036-57.813 57.814 0 17.65 7.836 33.673 20.47 44.312l-25.22 72.938-4.28 12.406h133.123l-4.314-12.406-25.187-72.938c12.63-10.64 20.467-26.662 20.467-44.312 0-31.642-25.47-57.813-57.25-57.813zm0 18.69c21.617 0 38.562 17.372 38.562 39.124 0 14.002-7.057 26.117-17.875 33l-6.22 3.97 2.408 6.967 23.156 67.033H383.81L407 271.03l2.406-6.967-6.22-3.97c-10.817-6.882-17.873-18.997-17.873-33 0-21.615 17.507-39.124 39.125-39.124zm-369.97 25.405c8.003 0 14.313 6.28 14.313 14.28 0 8.003-6.31 14.282-14.31 14.282-8.003 0-14.282-6.28-14.282-14.28 0-8.003 6.28-14.282 14.28-14.282z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconUnlockingIcon })
);
