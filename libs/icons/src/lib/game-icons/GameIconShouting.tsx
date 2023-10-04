import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconShoutingIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'shouting'];
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
        d="M256.813 34.094c-32.67 0-62.826 19.624-85.375 53.125-22.55 33.5-36.844 80.558-36.844 132.686s14.294 99.187 36.844 132.688c22.55 33.5 52.705 53.125 85.375 53.125s62.825-19.626 85.375-53.126c22.55-33.5 36.875-80.56 36.875-132.688 0-52.128-14.326-99.187-36.875-132.687-22.55-33.502-52.706-53.126-85.375-53.126zM64.405 127.47c-37.863 55.188-52.23 125.55-33.562 195.218 23.816 88.89 95.022 152.122 179.25 170.25C145.894 460.577 90.12 390.486 65.874 300c-16.337-60.975-15.608-121.328-1.468-172.53zm384.813 0c14.14 51.202 14.836 111.555-1.5 172.53-24.246 90.486-79.988 160.578-144.19 192.938 84.23-18.128 155.403-81.36 179.22-170.25 18.668-69.668 4.332-140.03-33.53-195.22zM118.5 167.78c-27.588 40.212-38.04 91.49-24.438 142.25 17.355 64.767 69.225 110.823 130.594 124.033C177.88 410.485 137.26 359.43 119.594 293.5c-11.905-44.428-11.397-88.41-1.094-125.72zm276.594 0c10.303 37.31 10.81 81.292-1.094 125.72-17.666 65.93-58.285 116.985-105.063 140.563 61.37-13.21 113.24-59.266 130.594-124.032 13.603-50.76 3.152-102.038-24.436-142.25zm-197.813 2.095c20.065-.2 38.86 8.59 52 25.313l-14.718 11.53c-16.02-20.384-38.817-24.964-64.625-10.312l-9.218-16.25c12.02-6.824 24.523-10.16 36.56-10.28zm117.157.53c.625-.01 1.25-.005 1.875 0 12.04.122 24.543 3.49 36.563 10.314l-9.22 16.25c-25.806-14.653-48.603-10.103-64.624 10.28l-14.686-11.53c12.73-16.2 30.74-24.965 50.094-25.314zm-57.625 66.69c42.196 0 76.375 34.21 76.375 76.405 0 42.193-34.18 76.375-76.375 76.375s-76.406-34.18-76.406-76.375 34.21-76.406 76.406-76.406z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconShoutingIcon })
);
