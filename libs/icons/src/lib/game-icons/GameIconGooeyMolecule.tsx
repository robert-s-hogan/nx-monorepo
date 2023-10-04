import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconGooeyMoleculeIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'gooey-molecule'];
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
        d="M115.248 15.242c-6.71.062-13.772 2.19-21.44 5.856-16.522 7.9-22.95 30.435-5.84 54.898 27.473 39.282 51.255 33.15 86.434 73 7.825 8.864 13.88 34.267 5.84 42.05-10.477 10.145-33.53 10.34-74.754-16.353-25.01-16.193-22.335-44.923-43.802-58.984-13.122-8.598-36.792-8.48-44.385 5.253-7.592 13.734-1.066 39.194 13.434 48.475 19.786 12.66 37.92 2.57 64.243 19.27 65.212 41.377 71.546 91.154 9.343 147.175-26.21 23.603-48.852 11.47-75.338 30.37-16.913 12.066-16.822 33.317-9.343 43.8 7.313 10.252 23.652 23.224 41.465 10.513 27.766-19.81 29.837-46.434 57.233-67.164 15.618-11.818 35.334-7.048 45.555 5.256 12.872 15.5 6.642 70.79-22.78 134.908C172.84 448.53 203.8 404.843 230.47 384.94c29.958-22.36 55.635 18.38 71.833 56.376-4.353-44.678-14.81-87.855 25.113-73.896 8.857 3.097 20.136 11.22 30.953 19.855 38.628 30.837 26.928 63.923 56.066 94.612 15.505 16.332 44.323 20.74 56.648 8.76 12.325-11.976 12.08-35.586-4.672-51.393-27.728-26.168-66.728-37.086-92.275-64.242-49.604-52.724 55.685-50.42 119.138-44.967-85.866-25.572-130.043-45.688-140.746-70.082-6.116-13.934-.508-45.57 26.28-61.322 40.682-23.923 51.81-9.098 91.106-27.45 24.732-11.546 29.933-38.4 22.777-53.73-7-14.99-26.512-32.02-52.562-19.855-41.783 19.51-34.94 63.352-74.753 85.266-37.618 20.708-54.327-32.963-43.217-157.1-24.59 109.814-39.16 140.04-77.09 145.42-11.75 1.668-40.537-9.848-50.81-28.032-25.562-45.252-16.246-65.546-44.97-106.29-10.194-14.462-20.86-21.225-32.704-21.608v-.002c-.444-.015-.89-.02-1.338-.016zm129.318 173.996c8.76 0 17.52 3.34 24.202 10.024 4.848 4.848 7.93 10.79 9.257 17.03-3.76-.48-7.692.713-10.58 3.6-4.953 4.954-4.953 12.987 0 17.94 4.954 4.953 12.984 4.953 17.938 0 4.37-4.37 4.878-11.134 1.537-16.068 9.924-4.267 21.866-2.356 29.97 5.748 10.62 10.62 10.62 27.836 0 38.455-4.044 4.044-9.045 6.544-14.275 7.508 16.35 20.97 14.897 51.312-4.386 70.595-20.874 20.872-54.715 20.87-75.587-.002-12.096-12.095-17.166-28.544-15.243-44.302-9.945 5.362-22.618 3.848-31.017-4.55-10.253-10.254-10.253-26.877 0-37.13 10.253-10.253 26.876-10.253 37.13 0 3.61 3.612 5.945 8.015 7.012 12.65.682-.764 1.384-1.518 2.118-2.252 2.03-2.03 4.19-3.848 6.44-5.48.793 1.74 1.886 3.377 3.317 4.808 3.807 3.807 9.016 5.333 13.963 4.618-2.76 7.186-2.212 15.347 1.645 22.144-5.824-1.045-12.046.67-16.547 5.172-7.304 7.305-7.304 19.148 0 26.453 7.306 7.304 19.15 7.304 26.454 0 5.37-5.372 6.777-13.192 4.25-19.862 9.095 3.12 19.575 1.058 26.832-6.2 10.15-10.148 10.148-26.603-.002-36.753-7.753-7.753-19.183-9.577-28.674-5.485.49-4.744-1.077-9.66-4.713-13.295-6.408-6.408-16.798-6.408-23.207 0-2.47 2.47-3.976 5.53-4.543 8.727-2.683-1.5-5.208-3.388-7.49-5.67-13.365-13.365-13.365-35.035 0-48.4 6.683-6.683 15.44-10.024 24.2-10.024z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconGooeyMoleculeIcon })
);
