import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTreeSwingIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'tree-swing'];
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
        d="M327.467 19.992c.748 14.94 2.317 51.268 2.59 98.76 3.474-.286 6.557-.381 9.72 1.08 18.04 8.345 27.243 29.326 27.026 50.506-.217 21.18-11.283 44.136-36.104 54.307a41.62 41.62 0 0 1-2.486.923c-3.408 80.504-12.307 166.37-33.754 225.5-6.876 15.831-17.029 29.217-26.828 40.94l55.27.422c20.676-12.19 32.041-27.395 36.32-46.407l17.558 3.954c-3.67 16.312-11.99 30.662-24.511 42.677l143.052 1.094c-5.13-14.524-16.16-46.501-20.357-70.217C451.89 293.171 450.15 45 450.025 19.992zM18.279 38.984l.881 18.725c17.856 12.047 32.035 23.91 45.969 35.527 12.887-11.156 2.404-29.725-5.82-39.091-13.668-5.346-27.335-10.467-41.03-15.16zM86.723 65.13c4.77 14.56 3.347 29.656-7.477 39.746 24.105 19.479 50.832 38.151 97.1 55.635 13.836-22.588 12.08-43.852-3.338-60.739-29.03-10.9-57.703-22.997-86.285-34.642zm-31.721 42.988V400h17.996V122.723c-6.187-4.856-12.114-9.73-17.996-14.606zm145.264 1.434c3.253 8.283 4.54 16.754 3.982 25.043-.765 11.35-4.673 22.135-10.545 32.095 16.926 5.691 36.192 11.248 58.451 16.655l2.604.633 1.834 1.953c9.223 9.826 22.535 17.206 35.469 21.006 12.933 3.8 25.473 3.655 31.814 1.056 18.024-7.385 24.773-22.363 24.932-37.84.152-14.822-7.069-28.554-15.479-33.306-45.88-1.699-89.948-12.607-133.062-27.295zm-33.264 66.476V400h17.996V182.605a502.784 502.784 0 0 1-17.996-6.578zM32 419.002v17.996h176v-17.996z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTreeSwingIcon })
);
