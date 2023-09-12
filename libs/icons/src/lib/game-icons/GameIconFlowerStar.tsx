
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconFlowerStarIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'flower-star'];
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
        <path fill="currentColor" d="M256 26c-33.207 66.414-47.193 94.485-42.045 128.49-20.405-27.686-50.142-37.647-120.586-61.129 23.481 70.444 33.435 100.189 61.121 120.594C120.485 208.807 92.414 222.793 26 256c66.414 33.207 94.485 47.193 128.49 42.045-27.686 20.405-37.64 50.142-61.12 120.586 70.44-23.48 100.18-33.437 120.585-61.121-5.148 34.005 8.838 62.076 42.045 128.49 33.207-66.414 47.193-94.485 42.045-128.49 20.405 27.684 50.152 37.64 120.594 61.12-23.482-70.443-33.443-100.18-61.13-120.585C391.516 303.193 419.587 289.207 486 256c-66.414-33.207-94.485-47.193-128.49-42.045 27.686-20.405 37.647-50.15 61.129-120.594-70.444 23.482-100.189 33.443-120.594 61.13C303.193 120.484 289.207 92.413 256 26zm0 189c22.537 0 41 18.463 41 41s-18.463 41-41 41-41-18.463-41-41 18.463-41 41-41zm0 18c-12.81 0-23 10.19-23 23s10.19 23 23 23 23-10.19 23-23-10.19-23-23-23z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconFlowerStarIcon);
    