import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconNeckBiteIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'neck-bite'];
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
        d="M18 18v269.635c12.326-4.654 24.576-9.755 36.59-15.332 20.283-16.343 31.497-28.505 37.603-43.502 6.494-15.947 7.643-36.665 5.246-70.93l17.955-1.26c2.457 35.128 1.698 58.774-6.532 78.982-1.432 3.518-3.09 6.877-4.96 10.137.01-.006.02-.01.027-.017-6.666 16.806-47.957 57.937-85.932 84.416V494H494v-24.465c-57.7-4.972-120.788-12.223-178.53-37.746-71.53-31.618-133.716-92.173-162.952-207.93-1.824-7.22-.89-14.784.8-24.182 1.69-9.398 4.476-20.38 7.883-32.582 6.815-24.404 16.128-53.64 24.136-82.99 6.222-22.803 11.618-45.683 14.496-66.106H18zm253.326 43.703c-5.677.675-14.48 24.16-8.38 30.938 17.84 19.823 73.65 32.397 76.005 24.965 2.244-7.074-44.703-36.343-66.014-55.367-.168-.15-.344-.264-.522-.35-.345-.17-.71-.23-1.088-.185zm214.418 70.44c-28.44 2.68-83.598-1.59-85.988 5.435-2.51 7.38 49.885 30.35 76.004 24.967 9.524-1.963 16.673-29.287 10.615-30.38-.194-.035-.406-.043-.63-.022zm-207.848 69.11c-12.725 12.637-22.49 43.11-20.156 60.743l30.303-40.517 5.107 35.407 20.225-10.147 10.146 20.227 20.226-10.15 10.15 20.228 25.262-25.332.07 50.596c11.704-12.976 23.372-42.82 20.157-60.744-43.176-3.936-83.91-16.537-121.49-40.314zm-22.308 67.296c-12.334 12.812-16.927 26.04-14.172 43.76 32.817 31.52 75.394 45.256 121.73 39.577 13.217-12.527 15.9-26.378 14.168-43.766l-24.437 23.605-10.316-20.178-20.164 10.27-10.27-20.167-20.16 10.27-10.27-20.162-20.116 10.285-5.99-33.494h-.002zM128 272c4.836-.035 10.04 1.717 14.506 4.88 9.482 6.715 13.138 17.85 8.166 24.868-.158.21-.324.41-.496.61-4.204 30.237-4.278 40.477.77 70.716 2.155 20.262-6.275 19.11-6.946 19.842 0 0-14.647-.792-11.053-19.842 4.267-29.007 4.585-37.817 1.24-66.443-3.362-.732-6.7-2.225-9.685-4.33-9.482-6.715-13.138-17.848-8.166-24.868 2.433-3.435 6.64-5.394 11.664-5.43V272zm66.66 87.72c4.836-.033 10.04 1.716 14.506 4.88 9.482 6.715 13.138 17.85 8.166 24.87-.158.208-.324.41-.496.608-4.204 30.24-4.278 38.478.77 68.717 2.786 20.262-1.643 26.247-8.67 26.162-7.028-.084-12.924-7.112-9.33-26.162 4.267-29.007 4.586-35.817 1.242-64.443-3.363-.734-6.7-2.227-9.686-4.332-9.482-6.716-13.138-17.85-8.166-24.87 2.433-3.435 6.64-5.392 11.664-5.43z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconNeckBiteIcon })
);
