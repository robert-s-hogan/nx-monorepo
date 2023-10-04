import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconScorpioIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'scorpio'];
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
        d="M372.366 466.713c-13.312 0-25.02-1.402-35.324-3.99-14.15-5.02-26.633-10.96-41.876-31.902-1.445-1.97-2.812-4.034-4.086-6.137l-.86-1.436c-14.137-24.323-17.38-56.392-19.015-86.38l-.215-7.95V98.292c0-7.428-.946-15.08-4.172-21.978-2.494-4.202-5.793-4.516-8.357-3.24-3.298 1.644-7.4 6.822-8.06 17.2.947 72.702-1.59 176.022-2.636 246.594H169.86V98.296c0-7.428-.938-15.08-4.168-21.978-2.585-4.35-6.043-4.595-8.805-3-3.535 2.048-7.703 8.117-7.703 19.808.61 79.303-1.5 164.812-2.684 243.74H68.6V98.3c0-21.373-8.852-39.73-36.375-39.837l-8.42-.033C41.222 38.587 58.55 30.06 86.564 30.06c18.047 0 34.916 7.15 46.576 19.317l1.894-1.712 2.215-1.905c16.768-12.93 35.994-15.695 50.566-15.695 18.022 0 34.86 7.127 46.52 19.256l1.824-1.65 2.215-1.906c16.783-12.93 35.996-15.694 50.58-15.694 33.037 0 61.923 23.91 62.555 58.412.163 8.843.25 19.037.267 30.172 0 62.654-2.787 237.685-.714 250.206l1.002 5.544c.52 2.576 1.07 5.028 1.673 7.38 9.78 37.704 23.914 46.357 49.574 45.798 11.458-1.032 21.664-5.28 29.604-9.802l-16.503-29.712 72.843 2.37-29.02 77.574c-.22-.87-6.215-11.94-13.716-25.587-6.774 8.882-25.53 24.288-74.154 24.288z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconScorpioIcon })
);
