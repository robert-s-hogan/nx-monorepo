import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFlowerPotIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'flower-pot'];
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
        d="M267.375 14.688c-17.09 6.94-30.576 17.288-38.75 29.593l-14.813-27.593c-9.017 49.344-12.52 95.085 32 109.563-10.734 36.94-17.187 73.9-20.687 110.813l-20.563-38.344c-2.848-14.713-9.618-30.698-17.343-47l-17.376 74.124c-7.214-22.468-16.496-44.677-28.47-66.47 24.46-43.217 16.134-70.568-31.093-79.28-.515 3.04-.56 9.344-.56 9.344l-19.876-8.75L87.5 100.53l-9.344-4.655c-5.433 42.254-.12 74.946 46.625 72.094 3.705 6.717 7.128 13.47 10.314 20.28L29.22 156.312c31.263 45.247 64.173 82.76 112.53 47.094 10.985 26.656 18.485 53.944 23.75 81.72l-64.78-40.188c12.872 36.068 28.203 67.286 66.936 52.437 1.237 7.446 2.306 14.926 3.28 22.438h18.876c-2.757-21.95-6.533-43.82-11.906-65.5 8.208-4.095 14.35-8.853 18.75-14.188 3.693 11.197 11.61 19.643 26.438 23.594-1.097 18.71-1.506 37.414-1.438 56.092h18.688c-.014-4.07-.003-8.12.03-12.187 41.888-6.813 39.48-42.478 32.407-81.188l-31.967 59.625c.765-23.7 2.492-47.326 5.593-70.906 52.515 5.043 61.144-38.783 65.125-87.78l-61.81 65.843c3.47-20.563 8.06-41.09 14-61.564 37.544 4.596 76.884-35.765 75.28-70l-12.438 7.72c-1.053-11.96-6.674-25.51-17.125-40.69-7.535 5.354-14.003 12.573-19.843 20.44L285.5 31.03l-11.688 14.595c-.32-10.47-2.17-20.77-6.437-30.938zm182.22 99.25c-4.994.008-10.98.86-18.25 2.906-13.336 3.754-27.52 12.25-22.376 37.625-24.488 13.127-45.408 31.122-62.25 53.155h-.19c.03.045.067.08.095.125-.8 1.05-1.593 2.09-2.375 3.156l23.063-76.344c-45.938 31.743-83.94 65.165-45.438 114.75-9.69 21.296-16.536 44.94-20.313 70.5h38.032c24.53-7.376 29.6-36.436 32.187-68.25l-48.155 51.282c6.766-30.55 18.424-57.235 34.406-79.47 36.727 42.145 77.18 14.898 118.033-19.81l-104.594 3.28c13.094-14.284 28.35-26.198 45.56-35.5 11.388 14.74 28.402 14.172 40.595 7.812 25.338-13.216 17.442-27.84 38.28-45.906-20.892 5.264-19.352-19.358-46.31-19.313zM152.936 338.5l26.032 154.594h143.593L348.969 338.5H152.936z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFlowerPotIcon })
);
