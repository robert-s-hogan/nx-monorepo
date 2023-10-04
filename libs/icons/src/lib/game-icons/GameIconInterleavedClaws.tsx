import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconInterleavedClawsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'interleaved-claws'];
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
        d="M60.113 18.73c33.985 13.337 68.53 30.25 96.555 51.81 21.406 16.47 39.11 35.722 49.24 58.485 7.67 17.234 10.745 36.477 7.817 57.092 28.568-7.727 58.908-10.21 88.316-6.37 25.235-66.077 3.016-128.26-32.253-161.017H196.67c44.027 40.57 53.718 85.142 40.033 138.98-8.817-62.917-32.8-110.574-79.9-138.98h-96.69zM20.76 58.28l.002 101.304c34.77 67.286 88.72 100.505 202.74 77.37-98.08 43.995-156.795 28.454-202.74-29.65v35.284c40.106 43.683 107.55 54.225 173.36 33.24 46.354-14.782 99.558-18.094 148.493-2.453 20.852 6.665 40.87 16.884 59.074 31.05 40.147 34.647 66.92 91.697 87.636 146.92 10.54-98.417-29.362-207.134-81.44-274.095 3.06 24.236 1.91 43.957-3.76 59.748-12.584-22.802-30.257-40.22-48.317-57.232 1.14 11.13 1.802 22.258-4.8 33.418-43.45-20.59-96.113-21.04-142.612-6.002-28.31 9.156-54.575 7.03-77.34-3.098-22.764-10.13-42.018-27.836-58.486-49.242-21.56-28.027-38.476-62.574-51.812-96.56zm251.502 223.554c-24.807.243-49.535 4.487-72.463 11.8-.03.008-.057.015-.085.024 1.79 16.373 5.68 32.39 11.842 47.457-11.416 12.546-23.812 12.986-36.264 12.787 18.202 16.29 36.797 32.14 61.137 41.55-10.027 14.25-23.763 18.616-37.74 22.353 20.99 10.185 42.16 20.005 65.175 26.004-14.65 9.27-32.843 16.01-53.595 20.92 78.16 32.975 193.5 43.38 285.835 7.727-30.718-2.99-61.58-7.668-90.123-15.762-106.234-25.83-181.07-88.907-157.263-158.675 6.55 34.33 22.78 59.386 45.704 80.666-6.714-12.456-11.762-25.485-15.223-38.815-4.94-19.033-6.754-38.616-5.884-58.036-.35.002-.703-.003-1.054 0z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconInterleavedClawsIcon })
);
