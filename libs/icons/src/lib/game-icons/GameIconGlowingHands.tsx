import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconGlowingHandsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'glowing-hands'];
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
        d="M104.748 18.654l49.537 95.77c-2.842 2.11-5.612 4.31-8.322 6.578L96.35 93.346l27.603 49.515c-23.207 27.374-38.42 61.737-42.035 99.488l-53.672 15.25 53.29 15.142c2.714 38.4 17.42 73.486 40.384 101.55l-9.27 16.628-93.978 89.217v13.795h12.61l93.935-89.17 16.94-9.446c28.21 24.968 64.26 41.267 104 44.72l14.052 49.456 13.972-49.174c20.024-1.333 39.16-5.918 56.877-13.24l32.15 66.854h20.735l-36.006-74.87c11.583-6.262 22.403-13.756 32.29-22.298l44.143 24.607-24.654-44.227c24.54-28.775 40.23-65.33 42.833-105.455l49.588-14.09-49.947-14.192c-.628-6.983-1.64-13.856-3.037-20.588l54.793-20.605v-19.967l-59.577 22.404c-7.712-24.122-20.35-46.036-36.725-64.574l26.164-46.935-47.45 26.452c-4.984-4.07-10.19-7.883-15.598-11.412l61.673-89.526h-22.693l-55.18 80.1C323.59 87.98 300.23 81.204 275.492 79.38L260.21 25.597 244.84 79.678c-27.16 2.56-52.57 11.12-74.897 24.343L125.79 18.655h-21.042zm80.846 148.838l32.418 66.22c2.915 2.22 5.857 4.2 8.96 5.774l8.485-39.52 18.272 3.923-11.437 53.253c-.877 6.204-2.08 11.73-3.57 16.632l-.207.963-.088-.02c-10.842 34.21-36.004 37.086-61.21 26.79l-74.59-18.977 4.606-18.112 53.29 13.56c.475-2.618 1.07-5.195 1.798-7.718l-59.506-32.723 9.006-16.377 57.885 31.832c1.276-2.172 2.645-4.256 4.115-6.226l-46.256-45.905L140.73 187.6l46.487 46.13c2.515-1.71 5.16-3.137 7.898-4.283L168.81 175.71l16.784-8.218zm153.21 0l16.784 8.217-26.307 53.735c2.74 1.146 5.384 2.574 7.9 4.284l46.486-46.132 13.164 13.263-46.258 45.906c1.47 1.97 2.84 4.054 4.117 6.226l57.884-31.832 9.006 16.377-59.506 32.723c.727 2.523 1.323 5.1 1.797 7.717l53.288-13.56 4.61 18.114-74.584 18.976c-30.147 12.315-60.23 5.795-65.83-50.63L270.69 204l18.224-4.145 8.96 39.39c2.934-1.535 5.736-3.42 8.51-5.53l32.42-66.223z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconGlowingHandsIcon })
);
