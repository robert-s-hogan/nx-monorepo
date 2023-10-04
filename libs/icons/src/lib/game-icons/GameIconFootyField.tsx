import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFootyFieldIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'footy-field'];
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
        d="M256 56.05C125.4 56.05 17.95 144.7 17.95 256c0 111.3 107.45 199.9 238.05 199.9 130.6 0 238-88.6 238-199.9 0-111.3-107.4-199.95-238-199.95zm0 17.9c52.1 0 99.7 14.89 137.2 39.65-37 46.8-56.1 94.4-56.1 142.4s19.1 95.6 56.1 142.4c-37.5 24.8-85.1 39.7-137.2 39.7-52.1 0-99.7-14.9-137.2-39.7 37-46.8 56.1-94.4 56.1-142.4s-19.1-95.6-56.1-142.4c37.5-24.76 85.1-39.65 137.2-39.65zm151.7 50.15c35.4 27.8 59.5 65.3 66.4 107h-35v49.8h35c-6.9 41.7-31 79.2-66.4 107-35.6-44.7-52.8-88.5-52.8-131.9 0-43.4 17.2-87.2 52.8-131.9zm-303.4 0c35.6 44.7 52.8 88.5 52.8 131.9 0 43.4-17.2 87.2-52.8 131.9-35.35-27.8-59.44-65.3-66.38-107h35.03v-49.8H37.92c6.94-41.7 31.03-79.2 66.38-107zm86.7 66.8V321h130.1V190.9H191zm18 17.9h94.2V303H209v-94.2zm47 23.2c-13.1 0-24 10.9-24 24s10.9 24 24 24 24-10.9 24-24-10.9-24-24-24zM36.03 248.9h19.02v14.2H36.03c-.11-2.4-.18-4.7-.18-7.1 0-2.4.07-4.7.18-7.1zm420.87 0H476c.1 2.4.2 4.7.2 7.1 0 2.4-.1 4.7-.2 7.1h-19.1v-14.2zm-200.9 1c3.5 0 6.1 2.6 6.1 6.1 0 3.5-2.6 6.1-6.1 6.1-3.5 0-6.1-2.6-6.1-6.1 0-3.5 2.6-6.1 6.1-6.1z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFootyFieldIcon })
);
