import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDiagramIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'diagram'];
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
        d="M146.24 120.334c-23.036 0-52.223 9.79-76.38 31.71-22.6 20.513-40.276 52.013-42.4 94.956H22v18h36v-18H45.48c2.032-38.054 17.27-64.194 36.48-81.627 20.686-18.774 46.56-27.04 64.28-27.04s43.56 8.264 64.233 27.038c15.496 14.073 28.41 33.83 33.908 60.94 3.676-1.484 7.677-2.31 11.86-2.31 2.078 0 4.11.208 6.082.594-6.12-31.684-21.29-55.785-39.748-72.547-24.138-21.92-53.298-31.713-76.334-31.713zm-9 40.088V247H130v18h36v-18h-10.76v-86.578h-18zm119 81.578c-7.838 0-14 6.16-14 14s6.162 14 14 14c7.84 0 14-6.16 14-14s-6.16-14-14-14zM76 247v18h36v-18H76zm108 0v18h36v-18h-36zm108 0v18h36v-18h-36zm54 0v18h11.24v86.078h18V265H382v-18h-36zm54 0v18h36v-18h-36zm54 0v18h13c-2.032 38.053-17.27 64.192-36.48 81.625-20.686 18.774-46.56 27.04-64.28 27.04-17.718 0-43.56-8.263-64.232-27.038-15.496-14.073-28.41-33.827-33.908-60.938-3.676 1.484-7.677 2.31-11.86 2.31-2.078 0-4.11-.208-6.082-.594 6.12 31.683 21.292 55.785 39.75 72.547 24.138 21.92 53.297 31.713 76.332 31.713 23.036 0 52.224-9.79 76.38-31.71 22.6-20.513 40.276-52.014 42.4-94.956H490v-18h-36z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDiagramIcon })
);
