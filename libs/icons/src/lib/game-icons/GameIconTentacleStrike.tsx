import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTentacleStrikeIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'tentacle-strike'];
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
        d="M13.31 21.65v223.883c44.806 47.182 105.238 54.52 173.526 65.305-4.484-22.66-8.26-45.048-13.395-66.047C95.66 215.198 36.983 167.26 41.956 21.653H29.637l.002-.002H13.31zm48.004.002c-.87 28.147.438 60.87 6.055 84.123 60.46 15.992 92.433 50.085 110.003 90.62 18.113 41.79 22.444 89.817 32.848 134.57s26.214 85.67 65.755 115.918c32.98 25.23 83.547 43.427 163.11 48.273-71.23-32.09-114.32-67.862-139.99-105.904-30.973-45.903-35.99-94.26-36.73-139.97-.74-45.712 2.363-89.093-9.908-127.223C240.3 84.28 213.76 50.507 150.29 21.65H61.313zm10.54 104.756c13.443 44.624 44.905 62.1 85.302 70.71-15.182-31.505-38.977-56.41-85.302-70.71zm202.08 3.1c6.505 26.962 7.097 54.743 7.064 82.596 69.97 10.56 141.545 36.41 188.527 130.34-9.777-145.698-101.31-192.293-195.59-212.936zm8.51 150.13c1.51 18.56 4.51 36.906 10.474 54.967 65.22 21.79 133.59 62.777 199.88 152.42-41.53-135.21-125.783-179.167-210.355-207.386z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTentacleStrikeIcon })
);
