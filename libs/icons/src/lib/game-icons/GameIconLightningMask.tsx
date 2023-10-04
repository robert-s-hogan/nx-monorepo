import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLightningMaskIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'lightning-mask'];
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
        d="M296.143 24.635l27.94 159.8-49.653-16.142 25.6 107.592-126.403-159.588 70.084 17.467-52.423-84.344c-13.778 10.68-26.45 24.165-37.666 40.045-30.15 42.69-49.177 102.418-49.177 168.57 0 66.152 19.028 125.877 49.178 168.57 30.152 42.69 70.825 68.102 115.228 68.102 44.403 0 85.074-25.412 115.224-68.103 30.15-42.692 49.178-102.417 49.178-168.57 0-66.15-19.027-125.878-49.178-168.57-23.847-33.765-54.278-56.706-87.93-64.83zM173.3 272.37c25.405.304 52.936 13.05 63.348 36.84-18.842 24.168-94.967 22.145-104.984-21.202 8.96-10.222 23.545-15.32 39.184-15.63.814-.015 1.63-.02 2.45-.01zm191.23 0c.82-.01 1.636-.007 2.45.01 15.64.308 30.223 5.406 39.184 15.628-10.017 43.347-86.142 45.37-104.984 21.203 10.412-23.79 37.943-36.536 63.35-36.84zm-98.41 92.653c1.604.016 3.213.052 4.82.106 41.875 1.414 111.476 12.976 89.94 64.24-11.586-20.46-47.418-35.624-89.94-35.624-42.52 0-77.675 15.24-89.352 35.625-12.623-46.682 34.766-64.838 84.53-64.347z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLightningMaskIcon })
);
