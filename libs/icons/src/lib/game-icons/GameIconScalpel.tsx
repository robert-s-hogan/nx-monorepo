import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconScalpelIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'scalpel'];
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
        d="M486.594 19.438l-212.53 169.468c11.276 6.004 20.268 16.362 25.436 28.156 1.943 4.434 3.305 9.2 4 14.094 80.446 34.536 191.193-106.27 183.094-211.72zM252.03 202.125c-1.268.034-2.38.253-4.53.75-4.932 1.14-8.54 2.213-12.03 5L18.22 382.063v27.78l233.218-184.937 11.625 14.656L18.22 433.656v32.53l255.81-204.155c13.41-10.704 14.012-24.534 8.345-37.467-5.662-12.923-18.25-22.68-30.313-22.438h-.03z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconScalpelIcon })
);
