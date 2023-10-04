import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconShardSwordIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'shard-sword'];
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
        d="M496.514 14.453l-97.79 45.47-71.57 71.567-26.558-33.377-31.772 91.705-74.644 74.645-26.56-33.375-29.968 86.504 20.053 20.05L413.415 81.93l13.216 13.215L170.92 350.86l20.756 20.755 75.763-75.765 83.155-28.807-30.266-24.084 80.082-80.083 83.158-28.81-31.148-24.786 44.096-94.827zM43.57 266.525l-.002 39.75 23.793-.334 137.732 137.734-.336 23.79h39.754l-.28-39.538h-22.673L83.11 289.48v-22.675l-39.54-.28zm71.434 113.49l-88.166 88.167 17.738 17.74 88.168-88.168-17.74-17.738z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconShardSwordIcon })
);
