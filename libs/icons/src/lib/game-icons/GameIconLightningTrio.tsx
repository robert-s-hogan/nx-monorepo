import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLightningTrioIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'lightning-trio'];
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
        d="M292.53 20.5l19 40.594L66.314 28.75 362.03 158.125l-18.967-40.594 149.218 15.282L292.53 20.5zm-252 23.375L318.314 413.97 312.906 348l184.97 146.5L294 186.656l5.406 65.97L40.53 43.875zM20.907 76.22l36.5 316.405L83.03 351.75l68.095 139.344-9.594-241.125-25.624 40.843-95-214.594z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLightningTrioIcon })
);
