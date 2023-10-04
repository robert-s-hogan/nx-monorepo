import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCobra1Icon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'cobra-1'];
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
        d="M185.705 51.72c-5.27 0-9.55 12.73-9.55 28.43s4.29 28.43 9.56 28.43c5.27 0 9.55-12.73 9.55-28.43s-4.29-28.43-9.56-28.43zm140.07 0c-5.27 0-9.51 12.73-9.51 28.43s4.23 28.42 9.51 28.42v.01c5.28 0 9.55-12.73 9.55-28.43s-4.28-28.43-9.55-28.43zm-82.74 37.75l13.72 23.76 13.71-23.76zm12.97 50.09c-.4.46-.905.924-1.32 1.32a128.63 128.63 0 0 1-59 35c-5.19 75.01 13 104.16 13 104.16s-24.57-15.91-37.35-100a128.391 128.391 0 0 1-53.602-7.52 306.7 306.7 0 0 0 19.001 52.25c12.19 26.08 43.29 55.18 52.75 84.51 24.78 76.7 2.85 151 66.51 151 63.66 0 41.772-74.3 66.522-151 9.46-29.34 40.55-58.43 52.75-84.51a306.679 306.679 0 0 0 19-52.25 128.392 128.392 0 0 1-44.32 7.84c-5.178-.001-10.35-.311-15.49-.93-12.75 84.63-37.44 100.63-37.44 100.63s18.5-29.65 12.85-106.09a128.768 128.768 0 0 1-52.6-33.09zm-6.61 123.06h18.4c0 23.34-7.41 37.62-12.82 48.05-4.83 9.32-6.9 13.72-5.09 20.19 2.51 9 6.8 14.09 11.8 20 13.85 16.4 22.86 31.79 12.52 80.62l-5.69-24-12.31 20.23c9.27-43.86 1-53.66-8.58-65-5.57-6.6-11.88-14.07-15.46-26.91-3.84-13.72 1.44-23.89 6.48-33.6 5.04-9.71 10.75-20.72 10.75-39.58z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCobra1Icon })
);
