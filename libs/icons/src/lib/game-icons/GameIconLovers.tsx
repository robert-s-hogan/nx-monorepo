import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLoversIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'lovers'];
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
        d="M132.255 18.093c-32.842 0-59.592 33.923-59.592 75.935 0 21.274 7.079 40.468 18.092 54.284C22.623 158.879 7.903 253.733 24.1 339.874h23.563L46.63 234.53l18.688-.185 1.25 126.685 8.75 132.877h46.875v-172.29c-15.257-18.713-25.615-39.351-26.424-64.825l-.004-.1v-.1c-.154-15.988 6.478-35.643 19.219-52.566 12.741-16.922 32.481-30.98 57.783-31.29 17.252-.212 35.458 5.013 51.338 14.771-12.131-20.214-29.245-34.177-51.26-38.32 11.507-13.88 18.971-33.345 18.971-55.157.097-36.903-24.805-76.041-59.562-75.937zm247.841 0c-32.842 0-59.591 33.923-59.591 75.935 0 21.274 7.078 40.468 18.091 54.284-25.296 3.923-43.223 19.473-54.945 41.875 16.803-11.476 36.697-17.682 55.465-17.452 25.302.311 45.042 14.369 57.783 31.291 12.741 16.923 19.373 36.578 19.219 52.567v.1l-.004.1c-.826 26.007-11.608 46.974-27.393 65.997v171.113h44.315l11.5-154.029h.03l1.062-105.531 18.687.185-1.062 105.346h24.53c18.363-88.46-4.724-178.95-67.095-190.687 11.507-13.88 18.97-33.345 18.97-55.157.098-36.903-24.805-76.041-59.562-75.937zM172.99 190.733c-18.837.232-33.281 10.381-43.625 24.12-10.326 13.715-15.675 31.13-15.594 41.506 1.226 36.63 26.557 61.833 61.219 92.044 26.758 23.322 58.19 48.519 80.617 83.38l.357-.637.336.601c22.427-34.843 53.847-60.03 80.596-83.344 34.662-30.211 59.993-55.414 61.219-92.044.081-10.376-5.268-27.791-15.594-41.506-10.344-13.739-24.788-23.888-43.625-24.12-28.453-.349-63.84 20.288-74.414 52.022l-8.539 25.625-8.54-25.625c-10.573-31.734-45.96-52.37-74.413-52.021zm-32.11 150.989v152.181h44.315l7.893-105.714c-9.94-9.023-20.098-17.651-29.924-26.215-7.726-6.734-15.242-13.43-22.283-20.252zm229.157.93c-6.762 6.5-13.94 12.894-21.315 19.322-10.636 9.27-21.66 18.622-32.375 28.463l6.815 103.47h46.875z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLoversIcon })
);
