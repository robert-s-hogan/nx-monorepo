import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconStoneThroneIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'stone-throne'];
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
        d="M255.563 21.125L162.5 53.188v216.75H180.063v35.093H333V269.94h17.564l-.002-216.594-95-32.22zm-143.22 9.156v239.657h31.47V30.28h-31.47zm256.907 0v239.657h31.47V30.28h-31.47zM203.687 59.157l30.938 33.875 22.188-33.28 22.218 33.28 28.595-31.53-11.688 63.656h-80l-12.25-66zM77.844 288.626v34.28h83.53v-34.28h-83.53zm273.844 0v34.28h83.53v-34.28h-83.53zm-171.625 35.093v17.874h-17.408v15.22l187.75-.002v-15.218H333V323.72H180.062zM95.25 341.593v150.47l48.72-.002V341.595H95.25zm273.844 0v150.47l48.72-.002-.002-150.468h-48.718zM162.656 375.5v97.156h187.75V375.5h-187.75z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconStoneThroneIcon })
);
