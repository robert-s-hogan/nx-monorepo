import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconHeronIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'heron'];
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
        d="M297.7 41.63c-38.7-.31-81.2 20.46-91.4 76.47 15.6-32.84 69.1-96.71 138.9-48.63l-13.3 4.54c-55-28.99-85 47.59-36.1 70.69 46.9 22.2 41.9 45.6-10.9 20.4 91.9 68.9-71.8 192.1-71.8 192.1 33.4-7.5 69.1-24.6 110.2-64.7l-8.8 25.9c73.7-36.7 69-123.3 69-123.3l6.9 34.1C431.9 115.1 277 122.6 308 83.57c52.6 30.63 124.1 24.03 124.1 24.03l-74-43.09c-12.3-13.81-35.6-22.68-60.4-22.88zM244.1 173.3c-65-.7-174.02 75.6-165.45 254.5 0 0 32.35-29.8 60.25-91.2l-11.6 56.7c204.1-136.6 183.9-219.3 116.8-220zm10.1 187.3c-5.5 2.6-11.1 4.9-16.8 7.1l-1.9 56.3h.2c4.5 18.8 10 38.1 12.1 58h15.3c-6.6-19.9-12-38.1-16.2-59 0 0 6.1-52.3 7.3-62.4zm-45.7 17c-5.4 1.7-10.6 3.1-15.6 4.4 4.3 33.4 7.8 69.1 7.8 100h14.1c-5.3-37-5.8-67.5-6.3-104.4z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconHeronIcon })
);
