import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPrankGlassesIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'prank-glasses'];
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
        d="M478.7 419c-17.8 11-79.9 43-135.9 2-66.8 55-136.4 18-154.1 7l100.2-46.7c14.9 10.5 52.1 29.7 95.2-.4zM161.9 164.8c14.4-12.3 33.4-19.7 54.1-19.7 36.8 0 67.9 23.4 78.6 55.7h33.8c10.6-32.3 41.8-55.7 78.6-55.7 45.6 0 82.4 36 82.4 80.1 0 44.2-36.8 80.2-82.4 80.2-2.4 0-4.8-.1-7.1-.3 6.7 18.7 11.4 39 12.1 60.2l-31.8-12.9-5.7 4.5c-40.9 32.6-75.3.7-75.3.7l-6.2-5.8-43.9 20.4c-2.9-28.9 6.1-56.6 16.3-82.8-13.8 10-30.8 16-49.4 16-45.6 0-82.4-36-82.4-80.2 0-4.2.3-8.3.9-12.3L47.02 282l5.66 48.7-20.7 2.4-7-60.2zM407 284.6c33.9 0 61.6-26.5 61.6-59.4 0-32.8-27.7-59.3-61.6-59.3-29.9 0-55 20.6-60.5 47.9 11.6 14 29.7 38.3 43.9 68.6 5.3 1.4 10.8 2.2 16.6 2.2zm-252.6-59.4c0 32.9 27.7 59.4 61.6 59.4 33.9 0 61.6-26.5 61.6-59.4 0-32.8-27.7-59.3-61.6-59.3-13.8 0-26.6 4.4-36.9 11.8l-4.2 3.3c-12.6 10.9-20.5 26.6-20.5 44.2zm326.8-122.5s-72.6-48.8-146.2-.1l23.1 34.8c50.2-33.3 99.8-.1 99.8-.1zm-315.6 34.6s49.6-33.2 99.9.1l23-34.8c-73.5-48.7-146.1.1-146.1.1z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPrankGlassesIcon })
);
