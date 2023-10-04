import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBullIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'bull'];
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
        d="M68.596 28.182c-86.767 50.67-51.027 136.884 123.35 136.884l2.835-70.433c-71.07 14-169.105 15.57-126.184-66.45zm378.455 0c42.92 82.022-55.114 80.45-126.185 66.45l2.836 70.434c174.378 0 210.117-86.213 123.35-136.884zM174.206 220.768c-3.798.104-7.758.785-11.816 2.087-1.887 29.822 11.63 50.308 48.516 39.88-.462-26.26-16.194-42.53-36.7-41.967zm167.213 0c-20.507-.563-36.24 15.707-36.7 41.966 36.886 10.43 50.404-10.057 48.518-39.88-4.058-1.3-8.02-1.982-11.818-2.086zm-53.123 162.7l-10.793 15.266c15.535 10.978 19.19 32.196 8.21 47.73C274.736 462 253.533 465.64 238 454.663c-15.535-10.978-19.19-32.193-8.21-47.728 2.03-2.875 4.483-5.42 7.288-7.543l-11.263-14.894c-4.34 3.283-8.153 7.203-11.292 11.645-16.805 23.784-11.098 56.982 12.685 73.788 23.784 16.806 56.956 11.098 73.762-12.686 16.806-23.783 11.11-56.967-12.672-73.773z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBullIcon })
);
