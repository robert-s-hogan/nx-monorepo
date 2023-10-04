import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconNurseMaleIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'nurse-male'];
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
        d="M256 20.86c-44.7 0-89.4 10.95-134.5 32.63.4 3.87 1 8.76 2.1 14.96 1.7 9.77 4.2 21.59 7.1 33.35 3 11.8 6.4 23.5 10 33 2.8 7.6 5.8 13 8 16.2h214.6c2.2-3.2 5.2-8.6 8-16.2 3.6-9.5 7-21.2 10-33 2.9-11.76 5.4-23.58 7.1-33.35 1.1-6.2 1.7-11.09 2.1-14.96-45.1-21.68-89.8-32.63-134.5-32.63zM238 40h36v30h30v36h-30v30h-36v-30h-30V70h30V40zm-95.1 129c-3.5 10.4-6.2 21.4-7.9 32.9 30.6 1.8 60.7-4.9 85.8-14.3 15.1-5.6 28.5-12.4 38.9-18.6H142.9zm168.3 0c11.6 9.8 24.4 18.7 36.8 24.9 10.4 5.2 20.3 8.4 29.2 9.1-1.7-11.9-4.4-23.3-8-34h-58zm-23.5 3.1c-12.2 9.7-33.2 22.1-60.5 32.3-8.2 3.1-17 5.9-26.1 8.3 12.5 2.8 21.9 14 21.9 27.3 0 15.4-12.6 28-28 28s-28-12.6-28-28c0-9.2 4.5-17.4 11.4-22.5-14.5 2.3-29.7 3.3-45.2 2.3-.3 4-.4 8.1-.4 12.2 0 89 56.4 159 123.2 159 66.8 0 123.2-70 123.2-159 0-3.6-.1-7.2-.3-10.7-12.9-.5-26.2-4.9-38.9-11.2-18.8-9.5-36.9-23.5-52.3-38zM317 212c15.4 0 28 12.6 28 28s-12.6 28-28 28-28-12.6-28-28 12.6-28 28-28zm-202 10.1c-.9.7-1.8 1.4-2.6 2.3-4.6 4.5-7.4 10.6-7.4 15.6 0 13.4 4.9 20.6 12.5 26.6-1.8-11.2-2.7-22.8-2.7-34.6 0-3.3.1-6.6.2-9.9zm282 0c.1 3.3.2 6.6.2 9.9 0 11.8-.9 23.4-2.7 34.6 7.6-6 12.5-13.2 12.5-26.6 0-5-2.8-11.1-7.4-15.6-.8-.9-1.7-1.6-2.6-2.3zM195 230c-5.6 0-10 4.4-10 10s4.4 10 10 10 10-4.4 10-10-4.4-10-10-10zm122 0c-5.6 0-10 4.4-10 10s4.4 10 10 10 10-4.4 10-10-4.4-10-10-10zm-87.4 51s4.7 3.6 10.6 7.3c6 3.7 13.9 6.7 15.8 6.7 1.9 0 9.8-3 15.8-6.7 5.9-3.7 10.6-7.3 10.6-7.3l11.2 14s-5.4 4.4-12.4 8.7C274.1 308 266 313 256 313s-18.1-5-25.2-9.3c-7-4.3-12.4-8.7-12.4-8.7l11.2-14zm-31.2 32.6C212.2 327.5 234 335 256 335s43.8-7.5 57.6-21.4l12.8 12.8C308.2 344.5 282 353 256 353c-26 0-52.2-8.5-70.4-26.6l12.8-12.8zm-44.6 48.1c-13.2 3.3-26.5 7-39.2 10.9-25.63 7.9-49.29 16.8-65.98 25.4-8.35 4.3-14.95 8.6-18.96 12.1-4.02 3.6-4.66 6-4.66 5.9v71h205.8c-47-41.8-63.3-84.6-77-125.3zm204.4 0c-13.7 40.7-30 83.5-77 125.3H359v-39h18v39h14v-39h18v39h78v-71c0 .1-.6-2.3-4.7-5.9-4-3.5-10.6-7.8-18.9-12.1-16.7-8.6-40.4-17.5-66-25.4-12.7-3.9-26-7.6-39.2-10.9zm-178.5 19.4c13.4 34.9 32 68.7 76.3 103.5 44.3-34.8 62.9-68.6 76.3-103.5-21.8 17.6-48 27.9-76.3 27.9-28.3 0-54.5-10.3-76.3-27.9z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconNurseMaleIcon })
);
