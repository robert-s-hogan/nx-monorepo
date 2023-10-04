import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconOilDrumIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'oil-drum'];
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
        d="M411 68.31v.7c0 25.9-53.6 46.99-155 46.99-106.5 0-155-21.09-155-46.99v-1.2c0-15 16.7-26.9 49.7-35.3 28.2-7.2 65.6-11.1 105.3-11.1 39.6 0 77 3.9 105.3 11.1 33 8.4 49.7 20.3 49.7 35.3zm-177-.5c0-4.2-13.2-7.5-29.4-7.5-16.3 0-29.5 3.3-29.5 7.5 0 4.1 13.2 7.5 29.5 7.5 16.2 0 29.4-3.4 29.4-7.5zm167.6 97.89v-60.2c-8.7 6.6-21.9 12.2-39.6 16.7-28.5 7.3-66.1 11.2-106 11.2-39.9 0-77.5-4-106-11.2-17.7-4.5-30.9-10-39.6-16.7v60.2c-6.3 5.3-9.4 11.2-9.4 17.7v1.1c0 25.9 48.5 46.9 155 46.9 101.4 0 155-21 155-46.9v-1.1c0-6.5-3.1-12.4-9.4-17.7zm0 128.9v-73.5c-8.7 6.6-21.9 12.2-39.6 16.7-28.5 7.2-66.1 11.2-106 11.2-39.9 0-77.5-4-106-11.2-17.7-4.5-30.9-10.1-39.6-16.7v73.5c-6.3 5.3-9.4 11.2-9.4 17.7v.9c0 25.9 48.5 46.9 155 46.9 101.4 0 155-21 155-46.9v-.9c0-6.6-3.1-12.5-9.4-17.7zm8.9 145.4c-1.1-4.9-4-9.4-8.9-13.5V350c-8.7 6.6-21.9 12.2-39.6 16.7-28.5 7.2-66.1 11.2-106 11.2-39.9 0-77.5-4-106-11.2-17.7-4.5-30.9-10.1-39.6-16.7v76.5c-4.9 4.1-7.8 8.6-8.9 13.5-.3 1.2-.5 2.5-.5 3.7v.5c0 5.7 2.3 10.9 7 15.6 17 18 64.8 30.8 148 30.8 60.2 0 103.6-7.4 128.9-18.9 17.3-7.5 26.1-16.6 26.1-27.5v-.5c0-1.2-.2-2.5-.5-3.7z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconOilDrumIcon })
);
