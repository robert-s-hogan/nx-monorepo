import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTexasIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'texas'];
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
        d="M156.3 41.88V222.6l-130.57 3c35.98 40.7 60.88 78.7 123.07 126 36.4-48.2 78.8-54.7 144.7 100.5l66.8 18c.7-49.4-15.2-97.8 126-155.3l-11.3-93-3-60.7-211.9-39.8V41.88z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTexasIcon })
);
