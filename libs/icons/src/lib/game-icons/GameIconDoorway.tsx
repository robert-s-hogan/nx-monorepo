import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDoorwayIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'doorway'];
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
        d="M208.7 22.36l22.4 77.23c8.9-1.66 18.1-2.49 27.6-2.49 8.5 0 16.8.68 24.9 2.02l22.2-76.76zm103.1 46.26l-10 34.78c15.2 4.8 29.1 12.3 40.8 22.7l25.5-23.8c-16-14.79-35.1-26.35-56.3-33.68zm-108.9.86c-21 7.67-39.9 19.61-55.6 34.72l25.5 23.8c.1-.1.2-.3.4-.4 11.4-10.6 24.9-18.3 39.8-23.4zM97.56 83.35L59.71 139l86.09 30.1c3.7-10 8.6-19.1 14.5-27.1zm318.24 0l-60.3 56.35c6.4 8.2 11.7 17.6 15.7 28.1l82.4-28.8zM268 116v317.5h93.4V218.6c0-35.3-11.5-60.4-29.8-77.3-16.2-15-38.3-23.6-63.6-25.3zm-18.6 0c-25.2 1.7-47.3 10.3-63.6 25.3-18.2 16.8-29.7 42-29.7 77.3v214.9h93.3zm163 57.3l-35.8 12.5c2.2 10.2 3.4 21.1 3.4 32.8v9.3h38.9v-9.3c0-15.8-2.3-31-6.5-45.3zM105 174.7c-3.9 13.9-6.05 28.6-6.05 43.9v9.3h38.55v-9.3c0-11.2 1.1-21.7 3.1-31.4zm-39.3 71.8v56.2h71.8v-56.2zm314.3 0v56.2h66v-56.2zM98.95 321.3v37.5h38.55v-37.5zm281.05 0v37.5h38.9v-37.5zM56.16 377.4v56.1h81.34v-56.1zm323.84 0v56.1h75.8v-56.1zm-233.3 74.7l-39.6 37.5h297.4l-33-37.5z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDoorwayIcon })
);
