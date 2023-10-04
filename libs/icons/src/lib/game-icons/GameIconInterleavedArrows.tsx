import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconInterleavedArrowsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'interleaved-arrows'];
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
        d="M182.885 16.2l-1.73 57.015 51.257 47.226 8.063-23.036-57.59-81.205zm-68.537 65.073v.004l77.75 61.625 28.797-8.062-57.018-52.986-49.53-.58zM89.32 101.6l1.225 56.375 55.762 56.373 9.19-30.637L89.32 101.6zm159.496 33.992l-15.552 10.363c19.852 29.796 29.86 65.31 28.07 103.537l-.182.016-1.406 18.824c.02 0 .04-.003.06-.004-3.512 49.992 11.5 96.754 41.26 133.654l-30.218 16.368 62.177 19.548-38.877 19.432 153.995 32.77-98.457-122.86.132 55.44c-50.335-36.216-76.608-92.807-71.142-155.975l.078-.006.22-3.1c.025-.26.047-.517.075-.776 4.974-46.64-6.008-90.873-30.234-127.232zm-171.14 36.472l-57.6 2.454 87.012 61.275 23.898-9.19-53.31-54.54zm77.482 51.54l-10.05 15.757c28.25 18.023 61.034 28.177 95.874 29.265l1.395-18.648c-31.888-.83-61.58-10.016-87.22-26.372zm143.664 24.207l-1.312 18.602c52.536 1.886 99.042 26.41 130.82 68.754h-47.113L497.91 427.9l-31.62-145.66-19.546 39.588-18.7-59.478-15.747 29.07c-31.726-26.472-71.01-41.83-113.475-43.61z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconInterleavedArrowsIcon })
);
