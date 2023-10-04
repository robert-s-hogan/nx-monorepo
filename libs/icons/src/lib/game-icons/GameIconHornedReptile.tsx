import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconHornedReptileIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'horned-reptile'];
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
        d="M21.98 21.35C63.71 95.32 121.5 181.9 128.4 271.3l39.4 92 62.8 78.5c5.8 5.8 15.5 9.2 25.4 9.2 9.9 0 19.6-3.4 25.4-9.2l62.8-78.5 39.4-92c6.9-89.4 64.7-175.97 106.4-249.95-89.8 46.36-136.4 81.85-177.6 189.85l-16.8-6.4c13-34.1 26.9-61.5 42.5-84.6l-23-59.74C289.1 73.48 273 81 256 81s-33.1-7.52-59.1-20.54l-23 59.74c15.6 23.1 29.5 50.5 42.5 84.6l-16.8 6.4c-41.2-108-87.8-143.49-177.62-189.85zM136.9 228.2l21.5 21.4c16.2 16.3 26.4 28.5 36 38 9.5 9.6 18.4 16.8 33.6 24.3l5 2.5v.3c13 4 13.8 69.8 7 85.3-4.1-15.6-11.9-28.9-23.4-41.6-3.7-1.9-9.7-4.9-16.6-9-10.9-6.3-23.3-14.1-31-23.8-8.9-11.1-14.6-27.4-18.9-41.6-4.4-14.2-6.9-26.1-6.9-26.1l-6.3-29.7zm238.2 0l-6.3 29.7s-2.5 11.9-6.9 26.1c-4.3 14.2-10 30.5-18.9 41.6-7.7 9.7-20.1 17.5-31 23.8-6.9 4.1-12.9 7.2-16.6 9-11.5 12.7-19.3 26-23.4 41.6-6.8-15.5-6-81.3 7-85.3v-.3l5-2.5c15.2-7.5 24.1-14.7 33.6-24.3 9.6-9.5 19.8-21.7 36-38l21.5-21.4zM208 312a12 12 0 0 0-12 12 12 12 0 0 0 12 12 12 12 0 0 0 12-12 12 12 0 0 0-12-12zm96 0a12 12 0 0 0-12 12 12 12 0 0 0 12 12 12 12 0 0 0 12-12 12 12 0 0 0-12-12zm-151 61.7v23.1l29.5 36.9c.1-6.7.3-12.8.5-18l.2-4.3-30.2-37.7zm206 0l-30.2 37.7.2 4.3c.2 5.2.4 11.3.5 18l29.5-36.9v-23.1zm-158.4 62.7c-.2 12.2-.1 25.2.7 37.6.5 8.6 1.5 16.3 2.7 22.6 1.7-4.2 3.5-8.8 5.2-13.8 3.6-10.9 6.2-22.7 7.2-29.9l-5.1-6.4-10.7-10.1zm110.8 0l-10.7 10.1-5.1 6.4c1 7.2 3.6 19 7.2 29.9 1.7 5 3.5 9.6 5.2 13.8 1.2-6.3 2.2-14 2.7-22.6.8-12.4.9-25.4.7-37.6zm-78.5 28.1c-1.3 6.4-3.2 13.3-5.4 20.2 9.9 7.1 19.4 10.3 28.5 10.3 9.1 0 18.6-3.2 28.5-10.3-2.2-6.9-4.1-13.8-5.4-20.2-7.3 3.1-15.2 4.5-23.1 4.5-7.9 0-15.8-1.4-23.1-4.5z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconHornedReptileIcon })
);
