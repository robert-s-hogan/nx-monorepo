import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconHospitalIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'hospital'];
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
        d="M256 25c39.3 0 71 31.68 71 71 0 39.3-31.7 71-71 71s-71-31.7-71-71c0-39.32 31.7-71 71-71zm18 23h-36v30h-30v36h30v30h36v-30h30V78h-30zm101 89v350h-78v-80h-82v80h-78V137h40.1c2.5 5 5.6 9.6 9 14H151v50h50v-35.1c8.8 6.9 19 12.3 30 15.5V201h50v-19.6c11-3.2 21.2-8.6 30-15.5V201h50v-50h-35.1c3.4-4.4 6.5-9 9-14zm-32 32v14h-14v-14zm-160 0v14h-14v-14zm288 32v286h-78V201zm-352 0v286H41V201zm338 14h-50v82h50v-73zm-96 0h-50v82h50v-73zm-80 0h-50v82h50v-73zm-80 0h-50v82h50v-73zm-96 0H55v82h50v-73zm334 18v46h-14v-46zm-96 0v46h-14v-46zm-80 0v46h-14v-46zm-80 0v46h-14v-46zm-96 0v46H73v-46zm370 78h-50v82h50v-73zm-96 0h-50v82h50v-73zm-80 0h-50v82h50v-73zm-80 0h-50v82h50v-73zm-96 0H55v82h50v-73zm334 18v46h-14v-46zm-96 0v46h-14v-46zm-80 0v46h-14v-46zm-80 0v46h-14v-46zm-96 0v46H73v-46zm370 78h-50v50h50v-41zm-96 0h-50v50h50v-41zm-160 0h-50v50h50v-41zm-96 0H55v50h50v-41zm334 18v14h-14v-14zm-96 0v14h-14v-14zm-64 0v62h-46v-62zm-96 0v14h-14v-14zm-96 0v14H73v-14z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconHospitalIcon })
);
