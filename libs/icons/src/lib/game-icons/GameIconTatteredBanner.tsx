import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTatteredBannerIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'tattered-banner'];
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
        d="M93.313 19.406c-11.24 0-20.157 8.916-20.157 20.157 0 6.968 3.436 13.022 8.72 16.624L35.218 494.25H54l46.438-435.875c7.637-2.84 13-10.1 13-18.813 0-11.237-8.886-20.156-20.126-20.156zm23.906 52.688l-21.157 198.78 92.624 19.532 64.157-194L117.22 72.094zm137.593 78.28L190.625 344.44l58.28 11.03-3.81-57.874 27.03 29.906 18.594-7.844 11.31 45.875 82.69 15.626-34.033-68.437 29.844-12.658 23.033 32.563 42.5.188 1.875 17.875 39-24.375-35.813-8.532-7.938-29.655-45.78-2.406 3.28-30.845-35.437-19.406 15.03-31.095 28.064-21.344v-.093l-153.53-32.562zm189.875 9.44l2.125 34.53-51.22 23.312 71.782 4.375 16.22-15.718L462.904 172l-18.217-12.188zm-4.47 84.874l35.126 45.625 18.47-25.625-53.595-20zm-98.468 8.25l24.813 1.406 5.218 23.75-50.155 9.062 20.125-34.22zm-4.03 76.687l11.967 19.22-37.062 2.217 5.094-15.906 20-5.53zm79.874 16.5l-17.53 29.188 39.717 32.718 40.876-11.092-40.28-19.875-22.782-30.938z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTatteredBannerIcon })
);
