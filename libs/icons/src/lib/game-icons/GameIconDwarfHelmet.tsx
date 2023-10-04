import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDwarfHelmetIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'dwarf-helmet'];
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
        d="M240.028 26v221.481L257.065 256l17.037-8.519V26h-34.074zM222.99 60.074c-80.22 0-136.297 56.077-136.297 136.296h119.26l17.037 17.037V60.074zm66.018 0v153.333l17.037-17.037h119.26c0-80.219-56.077-136.296-136.297-136.296zM69.657 213.407v34.074h50.047l-33.01-34.074H69.657zm41.528 0l34.074 34.074h34.074l-34.074-34.074h-34.074zm58.565 0l34.074 34.074h19.167v-8.518l-25.556-25.556H169.75zm144.815 0l-25.556 25.556v8.518h19.167l34.074-34.074h-27.685zm52.176 0l-34.074 34.074h34.074l34.074-34.074H366.74zm58.565 0l-33.01 34.074h50.047v-34.074h-17.037zM86.694 264.52v34.074l120.325 60.694 5.68-36.497-100.449-41.234-8.519-17.037H86.694zm321.575 0l-8.519 17.037-100.448 41.234 5.68 36.497 120.324-60.694v-34.074h-17.037zm-168.241 2.13L222.99 366.74l34.074 17.037 34.074-17.037-17.037-100.093-17.037 8.519-17.037-8.519zM78.176 314.564l-46.852 41.528v59.63l61.76-93.704-14.908-7.454zm355.648 0l-14.907 7.454 61.759 93.703v-59.63l-46.852-41.527zm-324.768 15.972L40.907 432.759l64.954 44.722 58.565-119.259-55.37-27.685zm293.888 0l-55.37 27.685 58.565 119.26 64.954-44.723-68.149-102.222zm-222.546 35.139L120.768 486h89.445l12.778-51.111h25.555v-36.204l-68.148-33.01zm151.204 0l-68.148 33.01v36.203h25.555L301.787 486h89.444l-59.63-120.324z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDwarfHelmetIcon })
);
