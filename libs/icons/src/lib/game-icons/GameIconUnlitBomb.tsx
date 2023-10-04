import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconUnlitBombIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'unlit-bomb'];
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
        d="M135.25 38.156c-16.082.46-32.345 7.235-46.47 17.407-17.216 12.4-31.534 30.2-37.31 50.687-5.78 20.488-1.95 44.032 16.155 63.406 14.573 15.595 19.996 29.328 20.563 40.5.566 11.173-3.554 20.304-10.376 27.406-13.643 14.206-37.278 17.995-50.5 6.094l-12.5 13.906c22.224 20.005 56.61 13.645 76.47-7.03 9.93-10.34 16.43-24.836 15.593-41.313-.836-16.478-8.83-34.407-25.594-52.345C67.18 141.782 65.16 126.6 69.47 111.312 73.78 96.025 85.484 80.97 99.72 70.72c14.233-10.253 30.704-15.365 43.218-13.44 9.566 1.474 17.565 6.055 23.062 17.44l15.938-9.19c-8.362-15.432-21.594-24.476-36.157-26.718-2.42-.372-4.866-.596-7.31-.656-1.07-.026-2.148-.03-3.22 0zM243.5 51.563l-120.125 69.374 24.906 43.157c15.03-18.11 33.446-33.898 55-46.344 20.615-11.903 42.444-19.803 64.595-23.938L243.5 51.563zm60.03 57.406c-1.026.01-2.065.034-3.092.06-29.894.803-60.05 8.877-87.813 24.907-88.84 51.298-119.255 164.55-68.03 253.282 51.222 88.73 164.505 119.013 253.343 67.717 88.837-51.295 119.223-164.55 68-253.28-34.666-60.05-97.713-93.346-162.407-92.688z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconUnlitBombIcon })
);
