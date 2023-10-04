import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconKneeBandageIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'knee-bandage'];
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
        d="M122.7 21.11c17.4 39.04 44.6 77.48 75.7 113.69 24.1-31 63.7-52.84 107-72.49-8.9-14.35-18.4-28.29-28.2-41.2H122.7zm192 56.8c-30.8 13.97-59 28.89-80.2 46.19 12.6-3.1 26.6-5.8 40.8-7.8 15.4-2.2 30.8-3.7 44.8-3.5 4.5.1 8.9.4 13.2.9-5.5-11.9-11.8-23.9-18.6-35.79zm.5 53.39c-11.6 0-24.5 1-37.4 2.8-25.2 3.5-50.8 10-66.4 15.5 4.9 5.4 9.9 10.8 14.9 16.2 31.2-15.2 64.2-29.1 104.1-33.8-4.7-.4-9.8-.6-15.2-.7zm31.9 17.4c-41.4 2-74.9 15-107.7 30.8 3.5 3.5 7 7.1 10.6 10.6 1.7-.4 3.5-.8 5.4-1.1 10.4-1.9 23.5-3.2 37.5-3.9 7-.4 14.2-.6 21.3-.6 14.7 0 29.2.9 41.7 3.2-1.1-11.6-4.1-24.8-8.8-39zm-37.9 53.9c-5.2 0-10.4.2-15.4.4-13.3.7-25.9 2.1-35.2 3.7-.3.1-.5.1-.8.2l-3.3 2.4c-5.4 4-10.1 8.8-14.3 14.4 38.8-2.1 78.6-9.2 107.3-19-11.1-1.5-24.7-2.2-38.3-2.1zm32.8 23c-28.3 8.5-62.6 14-96.7 16 28.1 11.2 57.2 10.4 84.8 4.4 3.9-6.8 7.9-13.6 11.9-20.4zm-116.3 26.6c-6 16.6-10.1 36-13.8 57-7.6 43.6-13.5 92.6-36.7 133-6.7 18.7-10.5 34.3-9.1 40.4.7 3.1 1.4 4.2 5.1 5.8 3.7 1.5 11 2.6 22.2 1.7H356.5c2.7-5.3 5.1-9.2 5.2-9.7 0-.4.4 0-1.1-1.7-1.4-1.7-5.1-4.7-11.8-8.3-17.2-9.3-30.5-13.4-46.2-17.7-15.7-4.3-33.7-8.7-58.5-18.6l-9.5-3.8 4.9-9c25.2-45.1 50.2-100.8 79.5-155-30.1 4.3-62.5 2.1-93.3-14.1z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconKneeBandageIcon })
);
