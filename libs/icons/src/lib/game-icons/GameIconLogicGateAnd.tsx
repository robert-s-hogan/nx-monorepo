import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLogicGateAndIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'logic-gate-and'];
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
        d="M105 105v302h151c148 0 148-302 0-302H105zm-89 46v18h71v-18H16zm368.8 96c.2 6 .2 12 0 18H496v-18H384.8zM16 343v18h71v-18H16z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLogicGateAndIcon })
);
