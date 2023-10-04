import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPreviousButtonIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'previous-button'];
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
        d="M427.6 106c15.6.1 27.7 13.8 25.7 29.3-16 124-16 117.4 0 241.4 2.5 19.8-17.4 35-35.8 27.3l-267-111.1v98.8c0 7.9-8.9 14.2-20 14.3H78.49c-11.1-.1-20-6.4-20-14.3V120.2c.1-7.8 9-14.1 20-14.2h52.01c11 .1 19.9 6.4 20 14.2v98.9l267-111.1c3.2-1.3 6.6-2 10.1-2z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPreviousButtonIcon })
);
