
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconReturnArrowIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'return-arrow'];
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
        <path fill="currentColor" d="M19.828 18.256l-.002.015c249.642 36.995 371.904 169.983 397.32 278.01-2.094 5.977-4.496 11.044-7.068 14.968-17.29 26.383-62.522 40.075-101.654 28.596 5.984-19.75 10.132-39.834 12.07-59.12-95.46 8.177-212.544 8.42-301.207-22.642 41.727 95.317 99.325 164.465 164.983 230.08 18.296-2.164 35.807-11.35 51.837-25.37 85.218 34.667 188.066-2.555 226.748-60.68 46.922-70.5 74.07-317.52-167.462-383.856H232.81c160.326 54.874 195.73 167.74 191.573 239.03-37.15-93.627-137.68-191.855-312.38-239.03H19.83z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconReturnArrowIcon);
    