import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTargetPrizeIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'target-prize'];
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
        d="M256 24.99c-25 0-47.7 2.03-63.6 5.15-6.2 1.23-11 2.65-14.7 4.01 3.7 1.36 8.5 2.78 14.7 4.01 15.9 3.12 38.6 5.15 63.6 5.15s47.7-2.03 63.6-5.15c6.2-1.23 11-2.65 14.7-4.01-3.7-1.36-8.5-2.78-14.7-4.01-15.9-3.12-38.6-5.15-63.6-5.15zM155.2 30.3c-19.1 8.9-29.4 26.02-26.8 43.08 2 12.32 10.9 23.51 25 29.32 8.1 3.4 17.9 5.2 29.4 5.1 13.3 24.7 31.3 45.1 50.6 54.6v43.9c-17 10.3-28.3 31.7-39.4 53.7 38.8 9.9 85.3 9.4 123.9-.1-11-22-22.4-43.3-39.3-53.6v-43.9c19.3-9.5 37.3-29.9 50.6-54.6 11.5.1 21.3-1.7 29.4-5.1 14.1-5.81 23-17 25-29.32 2.6-17.06-7.7-34.18-26.8-43.08.4 1.2.6 2.48.6 3.85 0 4.35-2.3 7.91-4.7 10.15-2.3 2.24-4.9 3.73-7.8 5.08-5.8 2.7-13.1 4.72-21.9 6.44-17.5 3.46-41 5.49-67 5.49s-49.5-2.03-67-5.49c-8.8-1.72-16.1-3.74-21.9-6.44-2.9-1.35-5.5-2.84-7.8-5.08-2.4-2.24-4.7-5.8-4.7-10.15 0-1.37.2-2.65.6-3.85zm6.6 16.31c2.3 14.34 6.5 28.91 12.3 42.74-5.6-.55-10.1-1.71-13.8-3.24-9.4-3.9-13.2-9.63-14.1-15.51-1.2-7.93 3.3-18.15 15.6-23.99zm188.4 0c12.3 5.84 16.8 16.06 15.6 23.99-.9 5.88-4.7 11.61-14.1 15.51-3.7 1.53-8.2 2.69-13.8 3.24 5.8-13.83 10-28.4 12.3-42.74zM256 278L95.98 358 224 342l-32 144h128l-32-144 128 16-160-80z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTargetPrizeIcon })
);
