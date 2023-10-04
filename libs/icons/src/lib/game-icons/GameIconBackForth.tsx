import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBackForthIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'back-forth'];
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
        d="M241.844 28.625l-21.188 5.063L33.25 78.53l-9.594 2.282 2.813 9.47 54.718 184.03 6.156 20.782 10.875-18.75 36.624-63.125 39.344 22.655 9.375-16.188-47.47-27.312L128 187.72l-4.656 8.06-30.406 52.47-45.75-153.844 156.625-37.47-30.344 52.345-4.69 8.126 8.126 4.656L332.75 211.75l-17.594 30.344 16.22 9.312 22.25-38.375 4.687-8.124-8.125-4.656-155.844-89.688 36.594-63.093 10.906-18.845zm-28.25 176.47l-57.438 99.31 155.22 89.5 8.093 4.658-4.69 8.093-44.06 76.25 218.81-52.5-63.874-215.47-44.094 76.25-4.656 8.064-8.094-4.656-155.218-89.5z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBackForthIcon })
);
