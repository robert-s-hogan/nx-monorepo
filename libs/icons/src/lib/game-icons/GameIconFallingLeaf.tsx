import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFallingLeafIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'falling-leaf'];
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
        d="M427.313 26.188c-4.8.012-9.63 1.264-14.032 3.406 9.05 78.836 5.48 143.09-43.217 231.844 63.85-73.5 80.035-178.61 74.75-228.344-5.21-4.886-11.33-6.922-17.5-6.907zm-91.032 48.75c-98.73 2.416-95.504 294.125-310.155 346.812C229.537 547.755 623.41 365.046 450.03 152.812c-.923 2.79-1.863 5.586-2.81 8.407 10.803 52.818 6.81 110.217-20.44 172.874 3.956-40.244 3.315-78.758-2.905-115.656-7.34 14.28-16.703 28.132-26.28 42.062 1.357 40.016-6.12 82.247-25.72 127.313 3.143-32.007 2.588-62.875-.563-92.875-12.835 14.593-27.163 28.624-43.218 41.468-3.802 25.377-10.96 51.658-22.78 78.844 2.12-21.604 2.46-42.944 1.748-63.656C271.472 375.8 229.21 395.157 178 405.906c43.122-24.2 77.516-49.167 105.688-74.75-18.532-3.86-37.607-6.38-56.657-8.156 25.186-6.363 50.08-8.858 74.19-8.188 17.226-17.617 31.62-35.325 43.217-53.718-32.133-5.78-64.654-7.476-97.53-5.28 37.746-18.268 75.352-24.643 112.718-22.19 9.655-19.872 16.26-40.42 21.03-61.31-28.417-2.687-59.37 4.05-94.624 12.842 31.834-29.16 66.23-41.838 100.44-45.562 1.778-14.472 2.736-28.956 2.905-43.906-19.706-14.02-36.318-20.438-50.75-20.75-.79-.018-1.566-.02-2.344 0z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFallingLeafIcon })
);
