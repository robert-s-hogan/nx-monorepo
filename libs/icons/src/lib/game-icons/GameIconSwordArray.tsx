import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSwordArrayIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'sword-array'];
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
        d="M202.094 28.5c-9.125 0-16.344 7.19-16.344 16.313 0 9.122 7.218 16.312 16.344 16.312 3.927 0 7.488-1.337 10.28-3.58l58.84 21.394-10.92 30.025 17.563 6.387 4.83-13.276 159.887 58.135 51.908-9.948-32.734-40.9L301.256 51.01l4.826-13.274-17.562-6.386-10.92 30.027-60.053-21.836c-2.154-6.47-8.18-11.04-15.453-11.04zm92.775 40.072l124.017 45.092 10.935 13.477-14.93 3.122L289.07 84.514l5.8-15.942zM163.405 99.5c-9.125 0-16.312 7.19-16.312 16.313 0 9.122 7.186 16.343 16.312 16.343 1.84 0 3.597-.305 5.237-.85l-.303.432 52.8 36.946-18.32 26.175 15.313 10.714 8.1-11.574 139.39 97.533 52.715 3.822-21.033-47.976-139.92-97.9 8.1-11.574-15.31-10.715-18.32 26.18-52.187-36.515c.02-.346.05-.69.05-1.043 0-9.126-7.186-16.312-16.312-16.312zm-52.72 64c-9.123 0-16.342 7.19-16.342 16.313 0 9.122 7.217 16.312 16.344 16.312.925 0 1.823-.092 2.703-.234l36.99 44.05-24.472 20.546 12.018 14.315 10.82-9.083L258.56 396.494l49.637 16.738-8.435-52.173-109.4-130.285 10.818-9.08-12.016-14.314-24.47 20.544-37.96-45.2c.165-.945.266-1.914.266-2.91 0-9.128-7.186-16.314-16.313-16.314zm135.986 1.29l107.217 75.02 7.008 15.706-15.388-.864-108.563-75.964 9.725-13.897zM42.812 207.44c-9.124 0-16.312 7.19-16.312 16.312 0 7.827 5.297 14.238 12.563 15.906l24.083 51.602L34.19 304.77l7.904 16.933 12.804-5.974 72.22 154.74 43.616 29.014 5.358-52.58-71.95-154.154 12.797-5.973-7.903-16.935-28.955 13.512-23.603-50.57c1.69-2.58 2.676-5.675 2.676-9.034 0-9.126-7.217-16.313-16.343-16.313zm133.24 35.355l84.104 100.162 2.61 16.38-15.207-5.005-84.5-100.63 12.99-10.907zm-88.845 57.86l54.842 117.5-1.763 16.913-13.057-8.546-55.398-118.694 15.375-7.174z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSwordArrayIcon })
);
