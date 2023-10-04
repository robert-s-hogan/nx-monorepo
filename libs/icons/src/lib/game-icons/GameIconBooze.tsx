import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBoozeIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'booze'];
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
        d="M67.5 34v59h64V34h-64zm-1.75 77c-14.22 25.4-13.64 56.2 1.75 87-16 0-48 16-48 32v224c0 32 160 32 160 0V230c0-16-32-32-48-32 15.5-31 16-61.9 1.5-87H65.75zM99.5 245c10.7 0 20.5 3.2 28 8.8 7.6 5.7 13 14.3 13 24.2h23v112h-128V278h23c0-9.9 5.42-18.5 12.97-24.2 7.55-5.6 17.37-8.8 28.03-8.8zm169 79c-32 0-64 4-64 12l16 128c16 16 80 16 96 0l16-128c0-8-32-12-64-12zm160 0c-32 0-64 4-64 12l16 128c16 16 80 16 96 0l16-128c0-8-32-12-64-12zm0 55.5c5.7 0 11.4.8 16.5 2.4.2 19 .3 39.8.3 39.8l12.2-33.2c4 3.4 6.6 8 7 13.5l-4 46c0 16-64 16-64 0l-4-46c1-15 18.5-22.5 36-22.5zm-160 30c5.8 0 11.5.9 16.6 2.7.1 12 .2 25.5.2 25.5l7.8-21.4c5.4 3.7 8.9 8.9 9.4 15.7l-2 16c0 16-64 16-64 0l-2-16c1-15 17.5-22.5 34-22.5z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBoozeIcon })
);
