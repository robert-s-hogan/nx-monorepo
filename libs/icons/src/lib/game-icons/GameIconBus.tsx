
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBusIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'bus'];
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
        <path fill="currentColor" d="M47 145c-10 0-23 12.4-23 24.9v134.3l52.49 7.5C84.97 297 100.9 287 119 287c21 0 39 13.3 45.9 32h188.2c6.9-18.7 24.9-32 45.9-32s39 13.3 45.9 32H488v-77.2L456.5 145zm-9 14h405.6l25.6 82H296v64h-98v-64H38zm18 18v46h62v-46zm80 0v46h62v-46zm80 0v110h22V177zm40 0v110h22V177zm40 0v46h62v-46zm86.6 0v46h62.2l-14.4-46zM119 305c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31zm280 0c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31zm-280 23a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8zm280 0a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBusIcon);
    