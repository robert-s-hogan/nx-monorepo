import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconClawSlashesIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'claw-slashes'];
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
        d="M182.338 22.55c152.455 20.22 254.7 176.264 228.928 258.163-34.76-89.215-143.516-189.588-300.207-196.15C255.855 103.772 355.365 245.5 342.92 329.856c-9.85.97-20.79.927-32.852-.24-41.436-84.32-146.004-172.382-292.437-178.513 142.546 18.907 241.2 156.557 232.36 241.316-15.664-.633-33.447-3.34-53.48-8.46 18.37 8.188 35.514 14.817 51.502 20.067-10.614 44.085-55.285 69.374-144.93 46.47C250 515.968 319.647 483.338 328.736 419.743c56.24 1.254 85.915-24.86 92.856-63.008 164.112-19.88 36.806-322.627-239.254-334.185zm132.808 318.083c7.97 2.704 15.666 5.077 23.07 7.11-3.122 7.893-7.546 14.993-13.35 21.095-2.393-9.222-5.635-18.663-9.72-28.205z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconClawSlashesIcon })
);
