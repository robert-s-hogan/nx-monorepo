import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconWoodenPeglegIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'wooden-pegleg'];
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
        d="M71.934 18c.485 15.14 1.357 31.058 2.935 42.4 2.76 19.85 10.513 50.143 16.017 70.364 9.138-4.04 18.895-7.028 28.937-9.192-3.463-16.14-9.658-46.268-11.994-65.9-1.27-10.676-2.216-24.19-2.935-37.672zm69.086 0c.67 12.48 1.505 24.57 2.558 33.418 2.073 17.426 8.91 50.5 12.115 65.57 5.652-.31 11.272-.473 16.797-.488 2.06-.006 4.095.017 6.125.045 2.3-14.427 8.78-55.99 10.604-78.28.457-5.6.81-12.688 1.094-20.265zm85.36 0c-.317 8.4-.73 16.463-1.28 23.2-1.866 22.8-7.498 59.604-10.334 77.415a461.44 461.44 0 0 1 25.1 3.2c4.21-17.332 9.348-38.773 12.53-53.102C255.408 55.13 259.4 35.73 262.995 18zm81.985 0c9.414 41.476 25.243 91.922 57.447 117.125 10.246 7.392 26.79 9.957 42.98 7.24 16.187-2.717 34.53-8.897 39.427-20.806 13.3-32.353 19.886-70.087 17.676-103.56zM87.575 152.754c-6.472 4.746-11.16 10.35-14.432 16.88-5.926 11.832-7.48 27.542-4.606 48.225 2.366 17.027 7.872 37.395 15.828 60.722 7.33-11.772 20.21-22.684 37.87-29.53-6.93-31.903-6.845-63.815-6.495-95.718l.55-.014c6.325 32.274 12.75 64.58 24.93 98.68 23.19-6.48 49.524-10.395 73.227-10.764 20.597-.32 39.06 1.51 52.38 8.166 1.47-44.267 2.522-74.153-5.61-90.3-4.44-8.81-10.85-16.326-24.03-19.067-40.296-8.377-107.204-7.592-149.61 12.72zm353.43-2.473c-18.843 9.395-40.083 13.222-59.482 10.044l3.844 18.006c26.837 2.207 32.874 1.026 57.71-9.348zm4.124 37.216c-17.018 6.656-25.32 9.495-38.1 9.81l9.654 55.043-16.24-55.08c-3.32-.095-6.963-.287-11.157-.586l51.604 245.08c5.43.883 11.167.885 16.81-.028a53.786 53.786 0 0 0 3.484-.69l-9.192-98.6 14.744 97a51.322 51.322 0 0 0 6.71-2.866zm-225.823 71.707c1.492-.373-3.103-.003-4.67.022-25.09.39-53.942 5.062-77.625 12.496l-1.82-7.23-8.29 1.592a75.133 75.133 0 0 0-9.902 4.725c7.086 25.256 9.957 46.182 6.322 72.728 8.09-6.685 16.802-9.395 25.666-9.195 17.48.393 35.54 16.062 50.535 30.674-29.688-14.594-56.878-18.71-79.046-1.87a196.7 196.7 0 0 1-5.13 18.25 35.53 35.53 0 0 1 7.62-.726c21.365.34 40.238 19.874 53.717 42.283-26.104-23.325-51.962-35.416-78.067-23.84l-.162.044c-1.58.443-52.92 20.927-67.807 43.828-13.01 20.014-22.782 50.122 2.073 50.122h172.81c13.715 0 23.896-5.363 29.476-18.743-22.274 7.332-44.18 8.164-65.985 7.185 25.95-7.275 52.874-13.347 70.656-30.63 4.894-73.38 3.61-132.378-2.992-190.61a162.725 162.725 0 0 0-17.377-1.102zm268.263 189.93c-8.098 5.324-17.417 8.823-26.998 10.373-9.543 1.544-19.444 1.167-28.775-1.305.67 1.996 1.025 3.502 1.82 5.605 4.764 12.6 12.888 25.522 17.563 27.982 7.55 3.972 22.58 1.542 28.48-4.603 3.915-4.08 7.464-18.818 7.973-32.21.085-2.23-.063-3.752-.063-5.84z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconWoodenPeglegIcon })
);
