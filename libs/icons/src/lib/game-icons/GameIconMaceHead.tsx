import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconMaceHeadIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'mace-head'];
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
        d="M220.53 17l-17.06 78.28c16.922-5.973 35.088-9.273 54-9.436L220.53 17zm229.345 72.906L316.595 147c-3.795 39.747 34.37 73.846 69.06 72.875l64.22-129.97zM258.937 104.5c-32.528 0-62.575 10.45-87 28.156l25.407 4.375h5.25l2.437 5.595c23.25 53.012-17.348 112.788-68.374 118.438l-5 .562-3.22-3.875-17-20.438c-.525 5.093-.78 10.267-.78 15.5 0 82.018 66.28 148.313 148.28 148.313 4.25 0 8.47-.182 12.627-.53l-33.75-26.533-3.97-3.125.438-5c3.68-43.274 44.822-80.43 90.126-80.656 10.455-.05 21.14 1.866 31.625 6.126l4.69 1.875.967 4.97 10.094 50.844c22.1-25.897 35.44-59.5 35.44-96.28 0-9.856-.957-19.47-2.783-28.783l-4.468 9.032-2.22 4.5-5 .625c-50.94 6.367-104.295-42.347-94-99.312l1.906-4.97 3.594-1.968 24.03-10.28C307.597 110.71 284.007 104.5 258.94 104.5zm-212.28 25.625l92.687 111.5c33.964-7.128 63.11-49.168 50.187-86.938L46.657 130.125zm45.312 122.063L17.093 295.03l85.437 16.22c-6.812-18.196-10.56-37.885-10.56-58.438 0-.208-.002-.416 0-.625zm333.5 12.5c-1.457 20.667-6.685 40.294-15 58.218L496.593 315l-71.125-50.313zm-101.158 39.53c-33.81.786-65.258 28.287-70.656 58.532l120.625 94.813-29.874-150.344c-6.665-2.114-13.417-3.156-20.094-3zM179.188 399.5l8.594 93.156 52.25-73.937c-21.83-2.47-42.38-9.143-60.843-19.22z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconMaceHeadIcon })
);
