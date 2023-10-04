import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconIdeaIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'idea'];
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
        d="M256.016 17.172c-103.018 0-188.532 105.858-188.532 238.812 0 55.877 15.122 106.973 40.282 147.438 96.796 34.218 203.558 38.207 295.187 2.062 25.932-40.785 41.563-92.667 41.563-149.5 0-132.953-85.483-238.81-188.498-238.812zm1.752 18.75c80.747 0 146.03 65.252 146.03 146s-65.283 146.03-146.03 146.03c-80.75 0-146-65.282-146-146.03s65.25-146 146-146zm.484 25.562c-42.402 0-76.92 28.05-76.92 70.264 0 23.897 8.254 35.09 17.447 49.672 6.13 9.725 12.446 20.9 15.988 36.953h86.46c3.524-16.437 9.903-27.82 16.086-37.64 9.207-14.622 17.448-25.615 17.448-48.983 0-42.242-34.107-70.264-76.51-70.264zm-40.87 176.555v30.368h81.33v-30.37zm11.18 48.976v18h58.97v-18zm-57.36 47.218c18.365 0 33.157 14.84 33.157 33.5s-14.793 33.532-33.157 33.532c-18.364 0-33.125-14.872-33.125-33.532 0-18.66 14.76-33.5 33.123-33.5zm165.292.307c18.26 0 33.06 14.803 33.06 33.062 0 18.26-14.8 33.062-33.06 33.062s-33.06-14.803-33.06-33.062c0-18.26 14.8-33.06 33.06-33.06zm-208.447 96.694c11.517 13.484 24.36 25.148 38.22 34.688l-7.095-26.375c-10.68-2.355-21.077-5.124-31.125-8.313zm254.594 1.532a361.784 361.784 0 0 1-27.406 7.062l-6.437 23.97c12.174-8.753 23.526-19.176 33.844-31.03zm-203.03 10.75l9.593 35.78c11.34 5.466 23.184 9.572 35.406 12.188l-5.063-43.125c-13.51-1.05-26.868-2.657-39.936-4.844zm155.22.216l-.002.002a450.38 450.38 0 0 1-30.935 3.97l-4.815 40.812c9.134-2.722 18.01-6.314 26.596-10.66zm-49.91 5.346c-16.24.828-31.392.948-46.467.375l5.313 44.846c4.052.332 8.135.528 12.25.528a149.5 149.5 0 0 0 23.718-1.904z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconIdeaIcon })
);
