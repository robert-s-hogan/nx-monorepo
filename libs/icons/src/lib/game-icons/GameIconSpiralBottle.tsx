
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSpiralBottleIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'spiral-bottle'];
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
        <path fill="currentColor" d="M190.594 21.25l17.375 62.563h98.56l17.376-62.563H190.594zm22.594 81.25l.03.125h-23.124c-23.79 0-22.498 45.594 0 45.594h21v59.06c-67.386 19.787-116.438 81.935-116.438 155.782 0 53.72 25.992 101.45 66.188 131.094h192.562c40.198-29.645 66.78-77.375 66.78-131.094.002-54.742-27.18-103.04-68.748-132.437-.024-.017-.04-.046-.063-.063-55.29-29.194-128.52-4.296-164.53 57.907-31.025 53.588-17.075 119.058 28.56 145.592 31.835 18.51 76.706 9.554 96.94-27.406 4.657-8.508 5.398-21.25 2-33.594-3.4-12.343-10.81-23.887-19.783-30.218-11.484-8.102-34.814-8.012-48 1.344l-10.812-15.25c20.517-14.558 49.846-15.307 69.594-1.375v.03c13.488 9.52 22.6 24.56 27 40.532 4.398 15.973 4.204 33.257-3.594 47.5-25.225 46.078-81.985 58.277-122.72 34.594-55.635-32.35-70.914-109.68-35.343-171.126 19.487-33.662 49.063-57.925 81.75-70.22h50.97V148.22h19.437c25.968 0 24.433-45.595 0-45.595H301.28l.033-.125h-88.125z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSpiralBottleIcon);
    