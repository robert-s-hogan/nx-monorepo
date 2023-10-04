import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTotemMaskIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'totem-mask'];
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
        d="M106.46 23.033c2.08 10.67 4.08 21.402 6.003 32.166l130.844 50.507 8.45 99.207-10.57-.412c-2.3-.09-4.596-.204-6.894-.305-.093 15.334-4.31 29.364-11.71 40.114-7.48 10.872-18.847 18.684-32.013 18.684-13.165 0-24.532-7.812-32.013-18.683-7.48-10.87-11.72-25.094-11.72-40.63 0-3.075.173-6.095.497-9.05-5.585-1.162-11.164-2.445-16.736-3.903 3.28 41.083 4.11 81.548 1.45 120.343 11.51-2.824 23.72-6.647 35.786-11.263 37.015-14.163 72.507-36.846 82.965-54.967l7.804-13.524 8.228 13.27c16.416 26.47 50.783 48.472 86.188 61.314 13.355 4.845 26.907 8.298 39.513 10.41-4.18-39.71-5.44-81.82-3.894-124.22-5.47 1.543-10.94 2.947-16.41 4.242.214 2.412.334 4.86.334 7.348 0 15.536-4.235 29.76-11.716 40.63-7.48 10.872-18.85 18.684-32.014 18.684-13.165 0-24.533-7.812-32.014-18.683-7.02-10.2-11.182-23.35-11.67-37.77-1.925-.003-3.85-.014-5.775-.048l-9.994-.176 8.595-100.984 125.32-48.82c2.083-11.328 4.357-22.512 6.853-33.48-83.69 42.727-220.065 44.844-303.69 0zM465.85 52.2L295.61 118.52l-5.885 69.138c56.026-.614 112.07-14.596 168.47-42.89L465.85 52.2zM60.588 55.21l7.44 89.89c52.895 30.63 106.403 37.536 163.304 40.214l-5.654-66.38L60.588 55.21zm198.2 210.245c-18.392 21.52-50.817 39.002-84.276 51.805-19.57 7.488-39.467 13.08-57.237 15.904-11.18 1.777-21.32 2.436-30.474 1.617l1.116 6.074 49.338 83.714 29.125-99.502 47.747 111.332 44.336-129.91 50.516 134.207L354.573 326.2c-2.64-.87-5.28-1.772-7.926-2.73-33.565-12.176-66.77-31.528-87.86-58.015zm97.128 61.184l29.477 101.9 45.59-91.366c-21.453 2.39-47.974-1.73-75.067-10.535zm-96.592 35.186L216.11 488.44l-46.407-108.206-26.64 91.004-45.333-76.924 11.75 63.997c90.364 45.498 179.486 50.226 269.614 15.713l-26.62-92.03-43.988 110.45-49.162-130.617zm166.133 28.28L384.67 471.84c10.022-4.016 20.058-8.51 30.11-13.492l10.677-68.243z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTotemMaskIcon })
);
