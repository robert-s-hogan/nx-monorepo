import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSwordBrandishIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'sword-brandish'];
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
        d="M122.1 17.52L186.6 161l104.5-44.9-44.5-98.58h-51.1l35.8 80.75-16.4 7.23-39-87.98zm265.2 77.75L110.4 215.2l12 28.2 278.1-119.8zm-69.7 98.53l-23.9 11.5c12.8 5.4 26 13.7 38.3 15.6 18.1-13.1-4.9-30.5-14.4-27.1zm-60.7 11.1l-36.2 16.7c-11.9 18.4-14.8 46-18.2 69.7 20.6 30.1 30.5 62.4 39.5 94 17.9-3.7 32.2-6.8 48.7-11.5-24.4-38.7-42.2-78.4-53.6-118.9 0 0 5.6-10.5 8.4-15.8 11.9 7.3 24.9 12.4 36.6 9.9 10-4.1 21.5-7.9 27.7-16.6-17.6-6.9-37.1-17.5-52.9-27.5zm92.6 26.6c-10.8 5.8-23 11.2-31.9 18.9-5.3 4.7-12.1 8.8-20.5 12.3 1.1 7.3-.1 19.6 8.1 18.8 20.5-6.2 40.5-15 59.7-28.4-.1-9.2-8-24.1-15.4-21.6zm-90.2 34.2c11.3 34.8 27.6 69 49.3 102.6 4.7-1.6 9.3-3.3 13.5-5-7.3-6.2-11.7-15.9-12-25.3-16.6-4.1-20.8-29.4-17.2-41.6-9.5-7-13.6-18.1-14.2-28.7-7.2.7-13.6-.1-19.4-2zm103.3 10.4c-13.6 8.1-27.6 14.3-41.6 19.2l-9 4.4c-4.4 4.6-4.5 15.6 1 20.3 9.7 3.5 50.1-21.2 57.7-27.9 1.3-5.8-3.5-14.9-8.1-16zm-178.1 21.2L19.1 335.8V495c95.7-25.3 146.9-47.1 209.7-90.2-10.8-38-20.5-74.8-44.3-107.5zm187.8 16.9c-13.6 10.2-27.2 16.2-42.9 21.4-.4 6.7 2.5 18.1 12.1 16 19.9-4.3 36.3-17.5 36.6-24.6.2-3.7-2-10.5-5.8-12.8zm-7.5 48.6c-14.3 8.2-31.5 15.9-46.7 21.4l18.7 31.8 39.3-18.8zm22.2 49.1L342.9 433l3.1 21.9c15.1.5 46.6-11.3 55.4-26.1v-.1z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSwordBrandishIcon })
);
