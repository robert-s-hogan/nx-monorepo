import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPartyFlagsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'party-flags'];
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
        d="M461.963 22C342.73 99.984 194.385 135.387 18 130.719v18.004C207.74 153.643 367.48 112.724 493.783 22h-31.82zm25.865 35.443L403.7 103.686l88.307 61.007-4.178-107.25zm-109.508 57.48l-92.037 27.298 73.315 78.388 18.722-105.685zm-128.498 35.491l-94.967 14.057 61.54 87.937 33.427-101.994zM116.48 166.78l-95.956 2.918 50.895 94.496 45.06-97.414zM18 279.461v18.662c231.522 63.276 368.876 81.316 476 84.926V365.05c-106.436-3.598-242.956-21.615-476-85.59zm43.379 51.244l24.053 104.602 69.25-82.002-93.303-22.6zm151.05 37.49l29.944 103.069 64.488-85.797-94.431-17.272zm153.087 24.446l40.615 99.351 55.111-92.101-95.726-7.25z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPartyFlagsIcon })
);
