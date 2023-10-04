import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconInfoIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'info'];
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
        d="M256 21C126.426 21 21 126.426 21 256s105.426 235 235 235 235-105.426 235-235S385.574 21 256 21zm0 36c110.118 0 199 88.882 199 199s-88.882 199-199 199S57 366.118 57 256 145.882 57 256 57zm-7.352 36.744c-8.227 0-15.317 2.976-21.27 8.928-5.776 5.952-8.665 12.955-8.665 21.008 0 8.227 2.89 15.23 8.666 21.006 5.95 5.776 13.04 8.666 21.268 8.666 8.228 0 15.23-2.89 21.006-8.666 5.777-5.777 8.666-12.78 8.666-21.006 0-8.053-2.976-15.056-8.927-21.008-5.777-5.952-12.692-8.928-20.745-8.928zm-62.757 82.453v28.096h46.215v186.13H185.89v27.833h140.22v-27.834h-45.69V176.197h-94.53z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconInfoIcon })
);
