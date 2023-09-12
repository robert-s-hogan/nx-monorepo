
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconLibertyWingIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'liberty-wing'];
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
        <path fill="currentColor" d="M487 37.1C396.4 53.23 292 95.28 207.5 140 163 163.6 124 187.8 95.39 209.2 81.08 220 69.36 230 60.93 238.6c-8.43 8.7-13.38 16.3-14.65 20.3-9.04 28.7-3.42 57.7 1.73 84.7 9.55 50.4-3.23 88.9-22.98 126.3 25.24-5.7 45.36-19.8 57-47 8.47-19.8 9.13-37 11.43-57.6 2.3-20.6 6.45-44.2 22.44-73.2l.2-.4.2-.4c8.8-12.6 26.2-22.2 50-33.4 23.7-11.2 53.6-23 86-35.1 63.8-23.8 137.2-48.7 190.1-71.3 20-30.1 34-74.24 44.6-114.4zm-55 138.2c-51.7 21-116.6 43.1-173.5 64.3-32.2 12-61.8 23.7-84.6 34.5-22.6 10.7-38.5 21.6-42.6 27.2-6.8 12.3-11.1 23.2-14 33.3 83.4-6.5 195.3-31.8 271.3-66.6 27.4-29.7 36.9-59.7 43.4-92.7zm-58 118.8c-79 32.2-182 53.3-260.8 58.6-.9 5-1.5 9.8-2 14.6-.4 3.5-.7 7.1-1.1 10.6 72.4 7.5 136.3 4 206.2-6.5 32.6-22.5 49.8-49.6 57.7-77.3zm-78.4 98.2c-62.3 8.1-121.6 10.2-187.6 3.4-.7 4.5-1.6 9-2.7 13.6 35.9 19.2 98.1 25.8 140.7 24.6 30.2-12.4 41.5-24.8 49.6-41.6zM99.78 426.7c-1.15 2.1-3.14 6.7-4.21 8.9 14.03 20.2 48.73 32.2 88.43 39.3 21.2-8 28.3-15.5 36.5-23-39.7-1.1-86.7-7.7-120.7-25.2z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconLibertyWingIcon);
    