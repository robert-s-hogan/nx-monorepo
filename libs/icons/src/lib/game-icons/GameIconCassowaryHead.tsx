import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCassowaryHeadIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'cassowary-head'];
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
        d="M223.7 23.1c-.7-.02-1.3-.02-2 0-14.8.35-31.3 7.84-50.4 25.69C196.8 93.94 200.6 131 193.8 170c0 .1 0 0 .1.2.6.9 2 2.7 4.2 4.7 4.4 4.1 11.5 9.4 20.4 15 17.6 11.3 41.9 24.1 66 35.5 24.2 11.3 48.2 21.2 65.1 26.6 4.7 1.6 8.7 2.6 12.1 3.3-13.2-48.7-35.8-125.2-68-177.11-17-27.34-36.4-46.96-56.4-52.95-4.4-1.3-8.9-2.06-13.6-2.14zm-40.7 162c-4.9 4.2-12 10.7-20.3 19.1-14.9 15-30.7 34.6-34.9 47.5-12.5 39.2-14.9 65.3 10.7 119.2 3.4 7.2 6.5 13.8 9.2 20l33.8 39.3 17.1-26.6 38 40.8-13 12.2-22.4-24-17.7 27.6-20.6-24.1c3.1 17.4 2.1 34.6-2.5 58.6h140.2c-29.9-46.2-32.3-59.2-51.2-119-2.9-9-3.4-20.9 1.4-32.1-5-3.3-12.4-8.5-19.9-14.8-6.6-5.5-13.3-11.9-18.7-19-5.3-7.1-9.6-15.1-9.6-24.3 0-1 0-1.9.1-2.9-3.9-4.8-6.2-10.9-6.2-17.5 0-16.5 14.5-29.4 31.2-29.4 2.3 0 4.6.3 6.8.7 4.3-3.6 8.5-6.9 12.3-9.7-13.9-7.3-27-14.7-38-21.7-9.3-5.9-17.1-11.6-22.9-17-1-1-2-1.9-2.9-2.9zm81.8 50.7c-3.8 2.6-8.5 6-13.6 10.1 4.8 5.1 7.7 11.8 7.7 19.2 0 16.5-14.5 29.4-31.2 29.4-1.5 0-2.9-.1-4.3-.3.9 1.5 1.9 3.1 3.1 4.8 4.1 5.5 9.9 11.1 15.9 16.1 7.5 6.3 15 11.4 19.6 14.4 6.6-5 15.4-8.2 26.2-8 40.7.6 109.2 19.1 152.5 46.1.2-2.3-.3-5.6-1.9-9.9-3.4-8.8-11.4-20.4-21-32-17.3-20.6-39.2-40.6-50.5-51.4h-.6c-6.2-.4-13.5-2.3-22.6-5.2-18.1-5.9-42.5-15.9-67.2-27.5-4-1.9-8.1-3.9-12.1-5.8zm-37.1 17.8c-7.9 0-13.3 5.5-13.3 11.5 0 3.1 1.4 6 3.8 8.1a15.45 12.59 0 0 1-.1-1.8 15.45 12.59 0 0 1 15.4-12.6 15.45 12.59 0 0 1 6 1c-2.1-3.6-6.4-6.2-11.8-6.2zm-64.9 4.2l16.8 6.2c-6.1 16.3-6.3 16.9-6.3 29.4l-17.8.2c-.2-13.3 1.2-19.3 7.3-35.8zm198.4 43c13.7.1 23.2 5.1 31 8.4l-7 16.4c-8.8-3.7-14.7-6.9-24.2-6.9l.2-17.9z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCassowaryHeadIcon })
);
