
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTestTubeHeldIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'test-tube-held'];
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
        <path fill="currentColor" d="m345.1 41.52-4.3 16.1 88.8 23.78 4.3-16.1-88.8-23.78zM350.2 86l-42 157c27.3 6.5 44.1 17.1 52.4 29.2l45.8-171.1-20-5.4-31.7 118.4-16.1-4.3 31.7-118.4 15.8 4.2-35.9-9.6zm-162.6 35.5c-6.2.2-12.3 1.4-18.5 3.8-34.7 13.6-121.43 91.9-121.43 91.9l-1.1 171.9c49.49-9.8 98.73-11.5 119.53-67.9l38.8-24.2s75.3 40.5 118.6 8.7c23.8-17.3 2.8-39-64-52.7-114.2-23.5-93.3-50.3-93.3-50.3l27.1 8.6-18.6-35 31.6 29.7 7.3-29.7 13.3 17.7 66 24.9 15.2-55.3c-53.7-14.9-87.4-43-120.5-42.1zm214.3 81.6-14.8 55.4c31.5 16.8 71.8-30.1 14.8-55.4zm-17.6 74.8-14.1 57.2c38.3 13.5 82.4-34.3 14.1-57.2zm-39.2 52.2c-15.8 12.3-39 20.6-65.7 20.3L254.9 442c-4.1 15 5.1 31 20.6 35 15.5 4 31.5-5 35.6-20l34-126.9z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTestTubeHeldIcon);
    