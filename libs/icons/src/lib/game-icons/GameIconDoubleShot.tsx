import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDoubleShotIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'double-shot'];
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
        d="M414.834 18.08c-29.377.15-59.012 16.6-73.164 58.87-18.758 56.028 67.407 137.784 33.57 221.206l48.215 41.87c35.646-92.954-52.048-200.4-34.2-251.44 12.36-35.35 35.672-38.21 56.05-26.44 19.942 11.51 30.406 30.664 17.974 54.99 33.043-12.62 37.255-51.444 9.52-77.197-3.96-3.68-9.02-7.016-14.277-10.05-12.984-7.496-28.3-11.89-43.69-11.81zm-80.77 32.01L65.937 62.16l-12.52 268.254c6.35-3.422 12.764-6.356 19.128-8.965L83.81 80.063l240.33-10.82c2.91-6.817 6.27-13.176 9.924-19.154zM104.686 87.955l324.392 330.04c-4.34 4.466-8.884 8.73-13.62 12.8L91.132 100.825l-.268.267L389.03 450.41c-14.866 9.56-31 17.84-48.122 25.12l116.04 19.41-7.018-44.188 44.187 7.02L474.71 341.73c-5.74 17.768-13.425 33.603-22.753 47.803L104.687 87.955zm-6.608 248.54c-.862-.012-1.718-.007-2.57.015-5.58.14-10.955.986-16.106 2.71-64.408 21.564-68.868 79.083-47.06 116.854 24.26 42.03 72.824 42.517 87.244 4.76-24.33 12.43-43.474 1.958-54.99-17.98-11.763-20.378-8.91-43.69 26.435-56.045 50.177-17.548 154.964 66.773 248.366 34.237l-40.757-47.75c-73.316 27.468-146.275-36.113-200.562-36.803z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDoubleShotIcon })
);
