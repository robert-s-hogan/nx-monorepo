import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBarbedArrowIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'barbed-arrow'];
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
        d="M21.97 18.22C33.98 35.186 46.79 52.53 60.25 70.187l-20.5 41.156L77.5 92.53c12.847 16.405 26.235 33.033 40.094 49.814L94.03 189.656l44.564-22.22c15.17 17.934 30.83 36.032 46.906 54.158l-28.47 57.156 55.157-27.47c16.596 18.27 33.554 36.568 50.813 54.782l-27.28 54.75 53.968-26.875c21.59 22.316 43.56 44.45 65.75 66.282-38.372 1.44-74.363-2.4-107.125-10.72 65.27 60.235 151.623 99.225 246.593 103.688-4.313-95.196-43.473-181.33-103.687-246.594 7.904 31.405 11.808 65.622 10.874 102.125-5.587-5.622-11.185-11.248-16.844-16.908-15.622-15.62-31.41-31.093-47.28-46.406l26.655-53.5-54.313 27.063c-18.653-17.625-37.395-34.933-56.125-51.876L279.5 156.28l-52.75 26.282c-18.68-16.527-37.304-32.64-55.78-48.218l21.436-43.063-45.75 22.782C129.6 100.008 112.72 86.45 96.062 73.44l18.282-36.688-40 19.938c-17.8-13.548-35.308-26.4-52.375-38.47z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBarbedArrowIcon })
);
