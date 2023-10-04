import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconRaccoonHeadIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'raccoon-head'];
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
        d="M404.7 69.89c27.1 39.61 27.4 96.91 18.5 147.11-10.8-14.5-21.6-29.2-32.5-43.3-18.3-23.6-36.6-45.9-55.3-64 8-11.71 21.3-21.63 35.2-28.54 13-6.52 26.5-10.13 34.1-11.27zm-297.4 0c7.6 1.14 21.1 4.75 34.1 11.27 13.9 6.91 27.2 16.83 35.2 28.54-18.7 18.1-37 40.4-55.3 64-10.9 14.1-21.7 28.7-32.5 43.2-8.9-50.2-8.7-107.5 18.5-147.01zM324 162.8c15.1 0 30.1 3.3 42.8 9.7 3.2 4 6.4 8.1 9.6 12.2 38.3 49.8 76.7 107.1 116.8 143.9-12.1 4.8-24.4 11.4-36.9 19 0-14.7-5.8-30.1-14.9-44.7-13.8-22.3-35.7-44.1-60.9-62.9-20.1-15-38.3-22.1-54.2-22.8-2.3-.1-4.6-.1-6.8.1-17.5 1.2-31.3 10.5-39.9 22.4-8.6 11.9-12.7 26.3-12.2 39.6.5 10 3.8 20.1 10.8 26.9h-44.4c7-6.8 10.3-16.9 10.8-26.9.5-13.3-3.6-27.7-12.2-39.6-8.6-11.9-22.4-21.2-39.9-22.4-1.1-.1-2.2-.2-3.4-.2-1.1 0-2.3 0-3.4.1-15.9.7-34.1 7.8-54.2 22.8-25.2 18.8-47.2 40.6-61 62.9-9.1 14.6-14.9 30-14.9 44.7-12.5-7.7-24.7-14.2-36.8-19 40-36.8 78.4-94 116.8-143.9 3.2-4.1 6.4-8.2 9.6-12.2 12.7-6.4 27.7-9.7 42.8-9.7 23.5 0 46.8 7.9 61.6 22.8l6.4 6.3 6.4-6.3c14.8-14.9 38.1-22.8 61.6-22.8zm0 75.4c19.7 0 36.5 15.2 36.5 34.5s-16.8 34.5-36.5 34.5-36.5-15.2-36.5-34.5 16.8-34.5 36.5-34.5zm-136 0c19.7 0 36.5 15.2 36.5 34.5s-16.8 34.5-36.5 34.5-36.5-15.2-36.5-34.5 16.8-34.5 36.5-34.5zm136 18c-10.7 0-18.5 7.7-18.5 16.5s7.8 16.5 18.5 16.5 18.5-7.7 18.5-16.5-7.8-16.5-18.5-16.5zm-136 0c-10.7 0-18.5 7.7-18.5 16.5s7.8 16.5 18.5 16.5 18.5-7.7 18.5-16.5-7.8-16.5-18.5-16.5zm110.9 61.1c25.3 11.3 44.8 19.8 58.1 30.2 14.6 11.3 22.7 24.2 25.6 48.6-39.6 24.9-81.9 46-126.6 46-44.7 0-87-21.1-126.6-46 2.9-24.4 11-37.3 25.6-48.6 13.3-10.4 32.8-18.9 58.1-30.2.6 10.7 5.9 20.4 13.2 27.6 5.1 5.2 11.4 9.3 18.5 11.5-2.9 8.9-6.2 14.6-9.1 17.7-3.8 4.1-6.3 4.5-9.2 4.1-2.9-.3-6.3-2.3-8.8-5-2.5-2.7-3.7-6.2-3.7-7.1h-18c0 7.6 3.5 14 8.4 19.3 5 5.3 11.7 9.7 19.9 10.7s17.5-2.2 24.6-9.7c2.6-2.8 5-6.1 7.1-10 2.1 3.9 4.5 7.2 7.1 10 7.1 7.5 16.4 10.7 24.6 9.7 8.2-1 14.9-5.4 19.9-10.7 4.9-5.3 8.4-11.7 8.4-19.3h-18c0 .9-1.2 4.4-3.7 7.1-2.5 2.7-5.9 4.7-8.8 5-2.9.4-5.4 0-9.2-4.1-2.9-3.1-6.2-8.8-9.1-17.7 7.1-2.2 13.4-6.3 18.5-11.5 7.3-7.2 12.6-16.9 13.2-27.6zm-20.2 6.9c-1.4 2.8-3.3 5.6-5.7 8-5 5-11.5 8-17 8s-12-3-17-8c-2.4-2.4-4.3-5.2-5.7-8z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconRaccoonHeadIcon })
);
