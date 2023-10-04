import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconShadowGraspIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'shadow-grasp'];
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
        d="M221.268 19.824c-9.866.172-19.968 2.14-30.002 6.63L65.386 67.983l-.44 7.108c-5.165 83.462-6.107 155.855-44.696 211.004v33.226c58.64-62.168 59.955-145.976 65.28-235.832l72.384-23.88c-21.245 23.445-34.98 43.238-42.084 59.808-2.855 6.66-4.755 12.936-5.37 18.902-7.816 25.16-5.503 51.296 15.24 74.905-3.255-15.89-3.477-31.222-1.53-45.828 2.583 1.532 5.388 2.703 8.293 3.44 19.373 4.906 44.5-1.94 76.35-17.253 30.25-14.542 66.117-37.706 105.01-69.775l48.368 32.73c-29.567-2.373-57.21 2.11-80.665 12.113-18.437 7.865-34.347 19.29-46.357 33.426-24.973 26.092-33.82 71.752-28.268 98.403 2.466-10.895 6.392-22.255 11.496-33.578l143.338-40.074 46.852 41.906c-30.122-7.788-58.994-11.142-84.867-8.238-39.39 4.42-72.503 24.934-86.783 64.244l-5.185 14.274 136.463-1.49 26.174 57.138c-42.183-25.606-84.56-34.873-125.693-34.37-51.737.635-101.458 16.077-148.695 31.68l-2.484.82-1.81 1.892c-11.985 12.504-27.58 37.417-41.985 66.17-11.847 23.65-22.493 49.252-27.418 71.986H68c4.805-18.81 14.066-41.677 24.53-62.563 13.107-26.165 28.38-49.616 36.9-59.23 46.044-15.156 92.8-29.148 139.525-29.72 45.873-.563 91.752 11.28 139.047 48.245 15.232 20.38 26.606 41.606 31.72 64.203 4.928-23.655 5.312-52.454-11.784-76.38L381.65 276.343l-118.1 1.29c13.015-22.177 34.103-33.042 62.514-36.232 32.693-3.67 74.36 4.298 117.655 20.55 21.03 16.204 38.378 34.313 49.58 55.6-1.527-26.99-10.2-58.732-39.917-76.972l-86.215-77.11-130.076 36.366c8.267-22.522 26.764-40.777 52.687-51.834 28.765-12.27 66.23-15.26 106.263-4.094 24.284 10.177 45.53 23.124 61.742 40.658-6.674-20.26-18.418-42.217-39.49-55.462L312.527 57.53l-6.082 5.124c-40.176 33.84-76.992 57.666-106.746 71.97-29.754 14.306-52.98 18.12-62.073 15.817-4.546-1.15-5.186-2.007-5.928-4.67-.743-2.66-.484-8.857 3.464-18.067 7.5-17.498 27.28-44.476 62.05-78.553 25.34-10.698 50.48-17.074 75.28-16.107-14.85-7.49-32.616-13.543-51.226-13.22z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconShadowGraspIcon })
);
