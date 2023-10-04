import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTrebuchetIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'trebuchet'];
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
        d="M51.984 50.486l-7.968 16.14 11.396 5.626H55V237.85l.977-1.93 7.957-15.647 8.06 15.594c.342.66.667 1.317 1.006 1.977V80.934l216.248 106.742c-.157 1.276-.248 2.575-.248 3.896 0 17.228 13.773 31 31 31 8.558 0 16.26-3.4 21.85-8.93l83.277 41.106-26.832 32.133L454.508 416H480V304l-35.002-41.918 6.986-14.152-101.597-50.15c.4-2.003.613-4.078.613-6.208 0-17.227-13.773-31.002-31-31.002-9.404 0-17.772 4.11-23.44 10.64L51.985 50.487zM282.78 223.34L249.73 279H224v18h15.04L132.386 476.615l-100.375-.11-.02 18 122.53.134 4.376.005L479.99 495l.02-18-18.576-.02L352.99 227.722c-8.722 7.97-20.312 12.847-32.99 12.847-3.074 0-6.08-.3-9-.847V279h-24.05l23.392-39.396c-10.927-2.207-20.56-8.08-27.56-16.264zM329 252.793L340.402 279H329v-26.207zm-265.016 7.172C53.41 280.85 42.212 301.81 27.3 320.367c13.75 18.88 26.382 26.917 36.938 26.996 10.568.08 22.95-7.66 36.49-26.86-15.842-19.27-26.55-40.147-36.744-60.538zM276.26 297H311v179.813l-141.422-.157L276.26 297zm52.74 0h19.232L384 379.21V416h16.006l26.514 60.94-97.52-.106V297z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTrebuchetIcon })
);
