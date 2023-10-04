import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTec9Icon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'tec-9'];
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
        d="M467.98 127.16v24h25v-24zm-358.39-38H54.98V76.84zM28.12 333l59.06 9.16a10.57 10.57 0 0 0 11.75-7.21l26.88-77.79h78.17v6h81v-47.83l18.08-17.93 14.92-.53v-40.71h-252l-36.22-23.42-7.74 4.53v45.31a10.29 10.29 0 0 0 10.21 10.58h22.63c9.3 0 24.77 19 10.4 37.74-12.28 16.06-34.71 63.93-45.28 87.1a10.69 10.69 0 0 0 8.14 15zm103.25-91.84l14.74-42h57.87v42zm143.44-126.45a7.9 7.9 0 1 1-7.9 7.9 7.9 7.9 0 0 1 7.9-7.9zm.17 320.45h-51v-156h51zM38.33 119.34l-7.35-4.53v-9.65h227.19a37.84 37.84 0 0 0-4.52 6h-81a11 11 0 1 0 0 22h81a21 21 0 0 0 5.35 7H70.69zm295.65 37.45v16.37h118v-68H291.45c4.47 5 7.26 10.36 7.26 17.08a23.18 23.18 0 0 1-8.15 17.92h43.42zm99.27-18.34a6.46 6.46 0 1 1 6.46 6.46 6.46 6.46 0 0 1-6.46-6.46zm-12.92 19.38a6.46 6.46 0 1 1 6.46 6.46 6.46 6.46 0 0 1-6.47-6.46zm0-36.66a6.46 6.46 0 1 1 6.46 6.46 6.46 6.46 0 0 1-6.47-6.47zm-13.51 17.27a6.46 6.46 0 1 1 6.46 6.46 6.46 6.46 0 0 1-6.46-6.45zm-12.92 19.38a6.46 6.46 0 1 1 6.46 6.46 6.46 6.46 0 0 1-6.47-6.45zm0-36.66a6.46 6.46 0 1 1 6.46 6.46 6.46 6.46 0 0 1-6.47-6.46zm-13.51 17.27a6.46 6.46 0 1 1 6.46 6.46 6.46 6.46 0 0 1-6.46-6.44zm-12.92 19.38a6.46 6.46 0 1 1 6.46 6.46 6.46 6.46 0 0 1-6.46-6.44zm0-36.66a6.46 6.46 0 1 1 6.46 6.46 6.46 6.46 0 0 1-6.46-6.45zm-13.49 17.3a6.46 6.46 0 1 1 6.46 6.46 6.46 6.46 0 0 1-6.46-6.46zm-12.92 19.38a6.46 6.46 0 1 1 6.46 6.46 6.46 6.46 0 0 1-6.48-6.46zm0-36.66a6.46 6.46 0 1 1 6.46 6.46 6.46 6.46 0 0 1-6.48-6.47zm-181.13 91h-3l-2.38 3.91s4.64 14 13.94 15.35c-9.45-9.44-8.58-19.27-8.58-19.27z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTec9Icon })
);
