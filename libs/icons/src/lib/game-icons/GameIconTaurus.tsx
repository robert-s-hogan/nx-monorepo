import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTaurusIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'taurus'];
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
        d="M30.882 30.14S64.407 19.33 122.97 49.78C183.966 81.5 208.598 166.55 255.876 167.64c47.283-1.09 71.92-86.14 132.912-117.858 58.558-30.45 92.088-19.643 92.088-19.643v85.483s-38.062-2.453-58.934 13.507c-15.165 11.593-45.23 54.296-71.375 80.08 38.867 27.833 63.966 71.877 63.966 121.45 0 84.162-72.343 152.39-161.587 152.39-89.244 0-161.593-68.228-161.593-152.39 0-51.03 26.6-96.205 67.432-123.865-25.558-25.957-54.263-66.43-68.965-77.67-20.877-15.96-58.938-13.506-58.938-13.506V30.14zM179.45 330.49c0 40.01 32.98 72.44 73.664 72.44 40.684 0 73.67-32.435 73.67-72.44 0-40.004-32.98-72.44-73.67-72.44-40.688 0-73.664 32.436-73.664 72.44z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTaurusIcon })
);
