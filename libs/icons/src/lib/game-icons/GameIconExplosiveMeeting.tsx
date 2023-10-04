import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconExplosiveMeetingIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'explosive-meeting'];
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
        d="M313.732 3.545l-60.166 157.62-58.42-48.454 9.838 78.962c-47.68-32.87-93.904-83.845-135.062-172.408H18.57v119.3c41.344 41.93 97.152 66.44 156.826 90.963L23.976 287.33l132.655 9.65-55.253 85.65 116.94-57.478L224.8 462.93l66.706-144.633 65.75 84.558-5.15-83.675c51.68 38.82 96.87 92.806 126.013 175.474h15.84v-149.33c-33.083-36.708-68.22-57.787-104.755-73.648l66.895-29.57-91.668-15.907 113.02-117.993-152.67 47.258-11.05-151.92zM258.6 198.807c5.412-.05 11.044.265 16.832.992 23.154 2.905 44.133 11.763 58.836 23.202 14.702 11.44 22.656 25.008 22.656 37.295 0 12.287-7.196 22.387-21.276 29.807-14.08 7.42-34.734 11.078-57.886 8.17-23.154-2.905-44.132-11.76-58.834-23.198-14.703-11.44-22.658-25.007-22.658-37.295 0-.665.03-1.32.072-1.973l42.642 11.113-8.52 12.11 87.563 13.265-38.8-26.672 15.82-14.785-68.963-26.606c9.236-3.335 20.317-5.312 32.516-5.425z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconExplosiveMeetingIcon })
);
