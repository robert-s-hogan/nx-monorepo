import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconMilitaryAmbulanceIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'military-ambulance'];
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
        d="M23.386 142.898V274.27h242.691V142.898zm258.959 1.397c-.156 48.746-.098 96.793-.098 145.914H179.556a53.33 53.33 0 0 1 21.62 30.86v29.736h196.352v-32.707c3.503-10.956 18.466-26.48 27.844-33.139h50.346v-41.148h-110.39v-28.295h-7.17v37.103h-52v-51.44c.078-1.439.036-3.089.036-4.597h60.092v-21.248h-24.45zm-186.73 11.72c26.848 0 48.806 21.958 48.806 48.807 0 26.85-21.958 48.807-48.807 48.807-26.849 0-48.804-21.958-48.804-48.807 0-26.849 21.955-48.806 48.804-48.806zm-8.268 13.854V195.355H61.858v17.198h25.489v25.488h17.195v-25.488h25.488v-17.198h-25.488V169.87zm-47.83 120.37c.156 14.386.105 4.07.507 32.359h57.944l4-11.819a53.36 53.36 0 0 1 17.728-20.54zm109.931 4.161c-21.985 0-40 18.016-40 40 0 21.985 18.015 40 40 40s40-18.015 40-40c0-21.984-18.015-40-40-40zm299.166.262c-21.985 0-40 18.015-40 40 0 10.15 3.846 19.448 10.143 26.524 7.343 8.25 18.022 13.476 29.857 13.476 21.985 0 40-18.015 40-40s-18.015-40-40-40zM149.448 312.4c12.257 0 22 9.744 22 22 0 12.257-9.743 22-22 22s-22-9.743-22-22c0-12.256 9.743-22 22-22zm299.166.262c12.257 0 22 9.743 22 22s-9.743 22-22 22-22-9.743-22-22 9.743-22 22-22zm-298.978 8.656c-11.449 0-17.182 13.84-9.088 21.936 8.094 8.095 21.936 2.365 21.937-9.084-.006-7.093-5.757-12.84-12.85-12.84zm298.406.014c-10.766-.003-17.007 13.839-8.912 21.934 8.095 8.094 21.936 2.363 21.935-9.086 0-7.093-3.747-12.845-13.023-12.848z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconMilitaryAmbulanceIcon })
);
