import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSpiderAltIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'spider-alt'];
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
        d="M255.9 20.45c-54.1 0-98 93.45-98 146.85 0 31 14.9 58.6 37.9 76.3 5.9-6.9 12.2-12.9 19-17.7 13.7-7.9 27.8-13.9 41.1-14.1 14.4 0 28.4 5 41.2 14.1 6.7 4.8 13.1 10.8 19 17.7 23-17.7 37.8-45.3 37.8-76.3 0-53.4-43.9-146.85-98-146.85zm236.9 14.27L419.3 208.1 329.2 262c3.2 5.2 6 10.6 8.6 16.2l96.1-57.4 58.9-139.03V34.72zm-473.72 0v47.05L78.01 220.8 174.1 278c2.6-5.6 5.5-11 8.6-16.2l-90.13-53.7zM255.9 227.8c-10.7 0-21.3 3.6-31.8 11.1-10.8 8.9-19.9 19-26.1 28.6-14.9 23.5-24 54.4-24 81.5 0 26.6 8.4 47.2 24 61 14 12.4 33.8 19.3 57.9 19.3s43.9-6.9 58-19.3c15.5-13.8 24-34.4 24-61 0-27.1-9.1-58-24.1-81.5-7.8-12.3-16.6-21.9-26-28.6-10.5-6.2-21.5-10.9-31.9-11.1zM19.08 238.5v23.4l64.42 51.2 76.6 10.6c1-6 2.3-12 3.9-18l-73-10.1-71.92-57.1zm473.72 0l-71.9 57.1-73.1 10.2c1.7 5.9 3 11.9 4 18l76.6-10.7 64.4-51.2v-23.4zM353.7 355.1c-.3 6.4-1 12.5-2.2 18.3l69 15.1 72.3 58.1v-23.5l-64.1-51.6c-25-5.5-50-10.9-75-16.4zm-195.6.1l-74.92 16.3-64.11 51.6v23.5l72.24-58.1 69.09-15c-1.1-6.4-2-12.8-2.3-18.3zm44.4 6.6c5.6 0 10.1 4.5 10.1 10.1 0 5.5-4.5 10-10.1 10s-10.1-4.5-10.1-10c0-5.6 4.5-10.1 10.1-10.1zm107.1 0c5.6 0 10.1 4.5 10.1 10.1 0 5.5-4.5 10-10.1 10s-10.1-4.5-10.1-10c0-5.6 4.5-10.1 10.1-10.1zm-74.8 11.3c9.3 0 16.9 7.6 16.9 16.8 0 9.3-7.6 16.9-16.9 16.9-9.4 0-16.9-7.6-16.9-16.9 0-9.2 7.5-16.8 16.9-16.8zm42.5 0c9.4 0 16.9 7.6 16.9 16.8 0 9.3-7.5 16.9-16.9 16.9-9.3 0-16.9-7.6-16.9-16.9 0-9.2 7.6-16.8 16.9-16.8zm64.4 27.3c-3 5.4-6.6 10.5-10.7 15.1l51.1 27.1 27.5 51h20.9L395.6 429c-18-9.5-35.9-19.1-53.9-28.6zm-171.5.1l-54 28.5-34.82 64.7h20.82l27.5-51.1 51.2-27c-4.1-5-8-10.3-10.7-15.1zm30.2 25.3c-4.4.1-9.5 2.3-14.9 7.7-3.8 7.8-5.9 16.5-5.9 25.7 0 16.5 6.8 31.4 17.8 42.5v-4c0-20.8 7.7-39.3 19.6-50.8 0-10.8-6.7-21.2-16.5-21.1zm111.1 0c-9.8-.1-16.6 10.3-16.6 21.1 11.9 11.5 19.6 30 19.6 50.8v4c11-11.1 17.8-26 17.8-42.5 0-9.2-2.1-17.9-5.9-25.7-5.4-5.4-10.5-7.6-14.9-7.7zm-70.3 14.1c-1.6.1-3.4.9-5.3 2.8-1.4 2.8-2.1 5.9-2.1 9.2 0 5.9 2.4 11.3 6.4 15.3-.1-.5-.1-1-.1-1.5 0-7.4 2.8-14.1 7.1-18.2-.9-3.9-2.7-7.5-6-7.6zm29.7 0c-3.6 0-6 3.7-6 7.6 4.3 4.1 7.1 10.8 7.1 18.2 0 .5 0 1-.1 1.5 4-4 6.4-9.4 6.4-15.3 0-3.3-.7-6.4-2.1-9.2-1.6-1.3-3.5-2.7-5.3-2.8z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSpiderAltIcon })
);
