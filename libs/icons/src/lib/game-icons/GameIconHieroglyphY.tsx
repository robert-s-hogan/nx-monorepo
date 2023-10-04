import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconHieroglyphYIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'hieroglyph-y'];
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
        d="M152.506 24.547l-15.324 7.662c29.403 42.845 44.929 106.006 49.513 178.545 4.912 77.703-3.03 166.28-22.285 252.137-1.945 8.672-.072 13.881 3.268 17.76 3.34 3.878 8.874 6.427 15.068 6.76 12.39.663 26.028-5.922 27.918-27.282 13.286-150.175 33.16-296.846-58.158-435.582zm248.867 0l-15.324 7.662c29.403 42.845 44.929 106.006 49.514 178.545 4.91 77.703-3.032 166.28-22.286 252.137-1.945 8.672-.072 13.881 3.268 17.76 3.34 3.878 8.874 6.427 15.068 6.76 12.39.663 26.029-5.922 27.918-27.282 13.286-150.175 33.16-296.846-58.158-435.582zM121.115 40.645a613.725 613.725 0 0 0-8.963 18.287l28.29 17.207c-5.651-13.31-12.097-25.216-19.327-35.494zm248.867 0a613.724 613.724 0 0 0-8.962 18.287l28.289 17.207c-5.651-13.31-12.097-25.216-19.327-35.494zM104.674 75.449a711.47 711.47 0 0 0-9.192 22.069l63.516 39.81c-2.495-11.965-5.403-23.383-8.73-34.15l-45.594-27.729zm248.867 0a711.463 711.463 0 0 0-9.191 22.069l63.515 39.81c-2.495-11.965-5.403-23.383-8.73-34.15L353.54 75.449zM88.916 114.646a823.4 823.4 0 0 0-9.545 27.313 957.03 957.03 0 0 0 9.135 5.523c11.292 6.743 26.088 15.378 40.775 23.883a9091.556 9091.556 0 0 0 37.979 21.87 543.287 543.287 0 0 0-3.938-31.954l-74.406-46.635zm248.867 0a823.4 823.4 0 0 0-9.545 27.313 957.036 957.036 0 0 0 9.135 5.523c11.292 6.743 26.088 15.378 40.775 23.883a9092.289 9092.289 0 0 0 37.979 21.87 543.287 543.287 0 0 0-3.938-31.954l-74.406-46.635zM73.748 159.61a924.93 924.93 0 0 0-7.695 26.52l103.998 61.506a704.434 704.434 0 0 0-1.145-32.719 9334.197 9334.197 0 0 1-48.646-27.975c-14.723-8.526-29.558-17.184-40.983-24.005a1149.394 1149.394 0 0 1-5.529-3.327zm248.867 0a924.93 924.93 0 0 0-7.695 26.52l103.998 61.506a704.434 704.434 0 0 0-1.145-32.719 9334.525 9334.525 0 0 1-48.646-27.975c-14.723-8.526-29.558-17.184-40.982-24.005a1149.4 1149.4 0 0 1-5.53-3.327zM61.277 204.22a993.155 993.155 0 0 0-5.402 22.383l113.07 73.388a836.729 836.729 0 0 0 1.067-31.463L61.277 204.22zm248.868 0a993.155 993.155 0 0 0-5.403 22.383l113.07 73.388a836.729 836.729 0 0 0 1.067-31.463L310.145 204.22zm-258.387 41.17a1020.314 1020.314 0 0 0-5.756 29.705l119.533 68.92c.797-7.846 1.49-15.66 2.08-23.43L51.758 245.389zm248.867 0a1020.31 1020.31 0 0 0-5.756 29.705l119.533 68.92c.797-7.846 1.49-15.66 2.08-23.43l-115.857-75.195zm-257.82 48.638c-.65 4.084-1.28 8.154-1.87 12.186-1.77 12.106 64.935 55.99 120.141 74.619a969.753 969.753 0 0 0 2.28-17.297L42.804 294.027zm248.867 0c-.65 4.084-1.28 8.154-1.87 12.186-1.77 12.106 64.936 55.99 120.141 74.619a969.753 969.753 0 0 0 2.28-17.297l-120.551-69.508z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconHieroglyphYIcon })
);
