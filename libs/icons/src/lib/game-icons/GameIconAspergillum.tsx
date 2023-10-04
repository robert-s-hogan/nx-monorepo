import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconAspergillumIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'aspergillum'];
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
        d="M475.7 23.5l-16.5 16.45c2.3 1.93 4.5 3.96 6.7 6.11 2.1 2.15 4.2 4.37 6.1 6.66l16.5-16.48zm-84 9.73c-19.5 0-39 6.51-55 19.54l-17.9-17.94L306 47.55 464.4 206l12.8-12.8-18-18c27.9-34.3 25.9-84.46-6-116.41-17.1-17.04-39.3-25.56-61.5-25.56zm.1 22.51a8 8 0 0 1 5.5 2.34 8 8 0 0 1 0 11.32 8 8 0 0 1-11.3 0 8 8 0 0 1 0-11.32 8 8 0 0 1 5.8-2.34zm43.9 12.59a8 8 0 0 1 5.6 2.34 8 8 0 0 1 0 11.31 8 8 0 0 1-11.3 0 8 8 0 0 1 0-11.31 8 8 0 0 1 5.7-2.34zM314.9 79.09c-13.9 25.71-13.8 56.81.1 82.51l-36.6 36.6-7.7-7.8-12.8 12.8 50.9 50.9 12.8-12.8-7.8-7.8 36.6-36.6c25.7 13.9 56.7 13.9 82.4.1zm133.3 33.21a8 8 0 0 1 .1 0 8 8 0 0 1 5.6 2.4 8 8 0 0 1 0 11.3 8 8 0 0 1-11.4 0 8 8 0 0 1 0-11.3 8 8 0 0 1 5.7-2.4zM254 224.6L100.7 359.8l51.5 51.5L287.4 258zM87.16 371.8L69.89 387c-3.53 3.6-5.82 9.8-5.82 16.3 0 5.2 1.47 10.2 3.85 13.7-3.23-1.3-6.55-2.2-9.87-2.7-9.4-1.3-19.3.9-26.3 7.9s-9.26 16.9-7.92 26.3c1.34 9.3 6.01 18.5 13.58 26.1 7.56 7.5 16.75 12.2 26.02 13.5 9.4 1.4 19.3-.9 26.3-7.9s9.26-16.9 7.92-26.3c-.48-3.3-1.4-6.6-2.72-9.8 3.61 2.4 8.67 3.9 13.77 3.9 6.5 0 12.7-2.3 16.3-5.8l15.2-17.3zm-35.18 60.1c1.08 0 2.26 0 3.53.2 4.95.8 10.89 3.6 15.84 8.5 4.95 5 7.77 10.9 8.48 15.9.71 5.1-.42 8.6-2.83 11-2.4 2.4-5.94 3.5-11.03 2.8-4.95-.7-10.89-3.5-15.84-8.5-4.95-4.9-7.77-10.8-8.48-15.8-.71-5.1.42-8.6 2.83-11 1.8-1.8 4.24-2.9 7.5-3.1z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconAspergillumIcon })
);
