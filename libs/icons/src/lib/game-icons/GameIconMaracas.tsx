import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconMaracasIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'maracas'];
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
        d="M91.56 31.29c-5.95.08-12.02 1.34-18.35 4.04-12.65 5.39-20.44 14.03-25.61 25.25-5.17 11.21-7.36 25.08-7.39 39.42-.1 28.8 8.69 59.4 14.38 72.7 6.83 16 18.02 32.2 31.05 46.5l111.66-47.6c-1.3-19.4-5.2-38.6-12.1-54.7-5.6-13.3-21.7-40.8-42.4-60.63-10.4-9.91-21.9-17.92-33.6-21.95-5.8-2.02-11.69-3.13-17.64-3.03zM420.7 107c-11 .1-23 2.8-34.8 7.2-26.9 10.1-52.4 29.1-62.9 39.2-12.5 12-23.7 28.2-32.5 45.5l84 87.6c17.7-8.1 34.3-18.5 46.9-30.6 10.4-10.1 30.5-34.8 41.7-61.2 5.6-13.2 9-26.8 8.7-39.2-.4-12.3-4.2-23.3-13.7-33.3-9.5-9.9-20.3-14.1-32.7-15-1.5-.1-3.1-.2-4.7-.2zm-222.9 84l-98.52 42c3.92 3.6 7.82 7 11.82 10.2l85.9-36.7c.5-5.1.8-10.3.8-15.5zm84.7 25.5c-2 4.9-3.8 9.8-5.4 14.6l64.6 67.5c4.9-1.4 9.9-3 14.9-4.8zM194 227.4l-65.7 28c7.8 4.9 15.3 8.8 22 11.2 10.5 3.9 18.7 4.1 22.6 2.4 3.9-1.7 9.4-7.7 13.9-17.9 2.9-6.6 5.3-14.7 7.2-23.7zm77.7 24.1c-1.8 9-2.8 17.4-2.7 24.6.1 11.2 2.8 18.9 5.8 22 2.9 3 10.5 6.1 21.7 6.6 7.1.4 15.6-.2 24.6-1.6zm-75.6 20c-4.3 6.3-9.6 11.3-16.2 14.1-6.6 2.8-13.8 3.2-21.3 1.9 8.1 15.6 16.8 32.1 25.6 50.4 9.2-9.1 17.6-18 25.6-26.6-5-14-9.4-27.2-13.7-39.8zm56.3 19.7c-33.1 36.9-70.6 80.5-138.9 129.7-14.13 13.7-11.2 26.7-3.3 35 7.9 8.2 20.8 11.6 35.1-1.9 52-66.2 97.2-101.8 135.5-133.3-7.5-1.8-14-5-19-10.2-5-5.2-7.9-11.8-9.4-19.3zm-14.2 89.3c-8.4 7.6-16.9 15.7-25.7 24.5 6.3 17.6 12.5 36.8 18.2 58.2 7.9 18.1 21.2 20 31.7 15.5s18.2-15.3 10.6-33.5c-14.1-23.2-25.4-44.7-34.8-64.7z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconMaracasIcon })
);
