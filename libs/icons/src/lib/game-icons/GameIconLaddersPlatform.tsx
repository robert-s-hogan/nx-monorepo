
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconLaddersPlatformIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'ladders-platform'];
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
        <path fill="currentColor" d="M375 16v199h18v-14h46v14h18V16h-18v39h-46V16h-18zm18 57h46v46h-46V73zm0 64h46v46h-46v-46zM25 233v46h462v-46H25zm30 64v199h18v-39h46v39h18V297h-18v14H73v-14H55zm18 32h46v46H73v-46zm0 64h46v46H73v-46z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconLaddersPlatformIcon);
    