import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconAmbulanceIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'ambulance'];
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
        d="M143.55 44.06l1.403 87.88-37.092-29.74L128 153l-60.94 4.07 62.434 29.87h7.02l16-48h76.972l16 48h8.01l65.065-19.204-56.537-14.177L287 83.94l-49.953 46.595-3.512-54.168-46.047 49.252-43.94-81.56zm21.936 112.88l-10 30h71.028l-10-30h-51.028zM24 204.94v158h16.906l38.864-97.155 35.164 105.494 24.337-24.34H303v18H146.73l-25.06 25.058c15.133 6.527 26.447 20.33 29.498 36.94H326v-222H24zm197 23h36v30h30v36h-30v30h-36v-30h-30v-36h30v-30zm125 5.044V378.94h142v-46h-94.625l-15.777-94.672c-11.227-2.4-22.004-4.065-31.598-5.284zm50.637 10.037l3.26 19.568c28.086 8.33 51.377 27.818 67.593 52.35h17.844c-9.74-30.257-32.768-48.962-60.08-61.463-9.295-4.255-18.974-7.67-28.617-10.454zM78.23 318.095L53.094 380.94H24v46h28.832c4.202-22.882 24.097-40.426 48.023-40.97L78.23 318.093zM346 396.94v30h14.832c2.212-12.046 8.77-22.612 17.982-30H346zm95.186 0c9.21 7.388 15.77 17.954 17.982 30H488v-30h-46.814zm-339.186 7c-17.78 0-32 14.22-32 32s14.22 32 32 32 32-14.22 32-32-14.22-32-32-32zm308 0c-17.78 0-32 14.22-32 32s14.22 32 32 32 32-14.22 32-32-14.22-32-32-32z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconAmbulanceIcon })
);
