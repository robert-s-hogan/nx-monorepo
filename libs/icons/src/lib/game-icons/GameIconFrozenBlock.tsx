import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFrozenBlockIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'frozen-block'];
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
        d="M258.625 30.75L25.345 126.5l.968.406v104.188l5.78 2.375 6.938 2.843 15.407 186.812 14.438-174.563 17.813 7.313v233.53h18.687v-198.25l13.063 120.095 13.5-123.813 22.312 201.125 21.22-196.218.093.03 11.125 115.22 10.25-106.438 57.968 23.78 3.53 1.44.377-.157 14.656 156.155 15.81-168.594 37.564-15.405v191.438h18.687V312.75l2.314-22.97 41.687-17.06 4.126 50.53v166.563h18.688V263.375l1.25-.5 11.78 105.97 12.938-116.095 8.688-3.563 20.97 188.157 22.967-206.125.282-.126V126.78l.686-.28-233.28-95.75zM472.53 134.47v84.06l-27.56 11.282h-.126v.063l-4.156 1.688L450.5 143.5l22.03-9.03zM77.19 147.78l13.187 5.407 9.406 86.688h-2.874L70.47 229.03l6.718-81.25zm304.125 24.126l6.625 81.25L350 268.72l8.875-87.626 22.438-9.188zm-237.188 3.344l20.97 8.625 8.436 87.438-38.155-15.657 8.75-80.406zm174.063 22.563l8.187 80.562-35.125 14.375 8.188-87.25 18.75-7.688zm-111.594 3.093l42.062 17.25 8.22 87.375-58.063-23.842 7.78-80.782z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFrozenBlockIcon })
);
