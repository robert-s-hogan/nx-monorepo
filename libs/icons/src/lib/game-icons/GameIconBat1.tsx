
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBat1Icon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'bat-1'];
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
        <path fill="currentColor" d="M362.005 149.115s-7 55.77-79 83.36v-24.69c-2.76-1-4.63 7.88-7.26 9.15h-39.49c-2.63-1.27-4.5-10.11-7.26-9.15v24.69c-72-27.59-79-83.36-79-83.36-60.71 67.68-121.41 80-121.41 80 102.53-16.11 101.36 44.89 101.36 44.89 69.71-11.91 65.64 36.31 65.64 36.31 60.63-6.9 60.41 52.57 60.41 52.57s-.22-59.47 60.41-52.57c0 0-4.07-48.22 65.64-36.31 0 0-1.16-61 101.37-44.88.02.01-60.69-12.33-121.41-80.01z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBat1Icon);
    