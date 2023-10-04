import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLaserPrecisionIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'laser-precision'];
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
        d="M20.127 52.803v58.986L250.46 245.153c26.367-28.823 70.087-36.533 105.313-16.195 35.29 20.374 50.465 62.207 38.567 99.503l101.648 58.855-64.728-74.65 35.638-37.352-57.27-7.687 84.72-86.92-125.71 33.186 12.995-120.208-66.578 96.363-27.448-80.593-16.353 88.77L20.127 52.803zm0 105.12l-.008.018.007.005v-.02zm0 .022l-.002 87.582 155.344 89.95-89.94 33.287h135.493l-63.658 99.87 116.22-70.083 15.77 85.852 38.543-80.01 63.66 87.018-5.853-87.047 90.54 17.268-102.4-59.198c-26.546 26.964-68.89 33.744-103.183 13.945-34.322-19.816-49.62-59.928-39.49-96.424L20.127 157.945zm316.6 119.442c-.938-.003-1.874.027-2.805.092-12.42.86-24.164 7.707-30.9 19.375-10.78 18.67-4.455 42.27 14.214 53.047 18.67 10.78 42.27 4.455 53.047-14.214 10.78-18.67 4.454-42.27-14.215-53.047-6.125-3.536-12.78-5.23-19.34-5.253z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLaserPrecisionIcon })
);
