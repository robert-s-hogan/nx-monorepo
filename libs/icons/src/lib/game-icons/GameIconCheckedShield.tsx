import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCheckedShieldIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'checked-shield'];
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
        d="M48.906 19.656v10.782c0 103.173 10.53 206.07 41.313 289.53 30.78 83.463 82.763 148.094 164.53 170.563l2.188.626 2.25-.5c89.686-19.12 142.322-84.028 171.187-168.344 28.865-84.315 35.406-188.656 35.406-291.875v-10.78l-10.655 1.53C323.26 39.954 191.452 40 59.595 21.188l-10.69-1.53zM67.75 41.03c63.242 8.536 126.495 12.792 189.75 12.782v184.532h174.78c-4.905 27.572-11.31 53.747-19.592 77.937-27.348 79.884-73.757 137.33-155.157 155.564-.008-.003-.02.003-.03 0v-233.5H86.53c-12.87-60.99-18.277-128.81-18.78-197.313z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCheckedShieldIcon })
);
