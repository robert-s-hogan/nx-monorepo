import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPorcupineIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'porcupine'];
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
        d="M130.6 18.9C149.8 97.7 274.9 175 274.9 175s-120.2-52.7-248.17-52.7v8.3c60.48 2.4 163.77 20.5 243.87 89.9-138.3-.7-217.4 52.2-217.4 52.2s169.6-47 250.1-8.7c0 0-126.1 7.8-155.9 142 67.9-122.1 156.5-115.4 156.5-115.4C118.4 357.7 250.7 463 250.7 463c-18.5-32-14.3-62 5.1-83.3-24.2 78.3 53 100.3 53 100.3-20.7-23-27.2-46-19.5-69 10.2 69 83.3 73 83.3 73l-31.4-33c46.9 32 91.8 26 91.8 26l-11.4-22 34.8 19c-9.6-72-127.7-57-127.9-127.8l19.9 16c31.1-40.4 72.9-42.3 119.9-44.5l14.4-57.6c-13.8 1.1-20.9.5-21-2.4 0-2.8 6.6-7.8 20.4-15.7-21.2-11.1-109.5-63.7-114.6-168 0 0-17.2 46.3 4.6 98.7-59.8-46.7-86.6-76.6-108.7-143.8 1.4 77.6 41.7 125.6 41.7 125.6S176.4 89.9 130.6 18.9zM330 167.8c8.3-.2 17.1 2.3 25.6 8.3 4.8 3.4 7.6 9 7.5 14.9-.2 5.9-3.2 11.3-8.1 14.6-11.7-17.9-27-20.3-35.7-12.8-8.6 7.3-7.6 21.7 9.1 34.8L315.5 244c-14.9-11.7-21.1-24.5-22.2-35.7-1.3-12.7 3.8-23.9 12.4-31.3 6.4-5.5 15-9 24.3-9.2zm-217.4 9.5c-24.98.1-53.86 4.5-85.93 16.3v9.5c44.83-15.4 89.03-2.3 89.03-2.3-52.93 12.1-80.4 52.8-80.4 52.8 57.55-37.3 118.4-54.2 179.1-49.6 0 0-38.1-27.1-101.8-26.7zm270.6 54.8c3.2-.1 6.5.3 10 1.1 13.8 3.2 23.6 12.2 21.8 20-1.8 7.8-14.5 11.5-28.3 8.3-13.8-3.2-23.6-12.1-21.8-19.9 1.4-5.9 8.8-9.4 18.3-9.5zm-188.3 42.7c-78.2-.1-166.29 37.4-166.29 37.4l86.89-4.1-82.74 61v9.3l84.54-43.3s-24.99 62-81.72 125.3C148.5 386 112.1 325.9 214.5 275.7c-6.4-.6-13-.9-19.6-.9z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPorcupineIcon })
);
