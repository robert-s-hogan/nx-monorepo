import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconShoulderBagIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'shoulder-bag'];
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
        d="M256 18.75c14.4 0 27.4 5.89 38.2 15.27 10.8 9.38 19.7 22.17 27.5 37.08C337.2 101 348 139.6 355.8 178c11.6 56.7 16.5 113 18.3 138.8H356c-1.8-25.8-6.7-80.5-17.8-135.2-7.7-37.6-18.4-75.1-32.5-102.2-7.1-13.59-15-24.55-23.3-31.79-8.4-7.25-16.8-10.86-26.4-10.86-9.6 0-18 3.61-26.4 10.86-8.3 7.24-16.2 18.2-23.3 31.79-14.1 27.1-24.8 64.6-32.5 102.2-11.1 54.7-16 109.4-17.8 135.2h-18.1c1.8-25.8 6.7-82.1 18.3-138.8 7.8-38.4 18.6-77 34.1-106.9 7.8-14.91 16.7-27.7 27.5-37.08 10.8-9.38 23.8-15.27 38.2-15.27zM374.9 334.8c0 11.3-.1 22-.3 32.1-80.2 18.9-159.1 18.1-237.2-.1-.2-10.2-.3-20.7-.3-32zm-1 50.6c-2.1 38.4-8.7 68.1-29.1 94.9v.1l-.1.1c.1-.1-2.7 2.1-7.8 4-5.2 1.8-12.4 3.5-20.8 4.8-16.8 2.6-38.5 4-60.1 4s-43.3-1.4-60.1-4c-8.4-1.3-15.6-3-20.8-4.8-5.1-1.9-7.9-4.1-7.8-4l-.1-.1v-.1c-20.4-26.8-27-56.7-29.1-94.9 77.6 17.4 156.3 18.2 235.8 0z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconShoulderBagIcon })
);
