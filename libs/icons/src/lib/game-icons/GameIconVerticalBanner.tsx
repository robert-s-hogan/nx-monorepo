
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconVerticalBannerIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'vertical-banner'];
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
        <path fill="currentColor" d="M279 25v30h-46V25h46zm178 35.396c3.485 1.262 7.267 2.717 11.195 4.55 5.553 2.589 10.945 5.739 14.409 8.742C486.067 76.69 487 78.936 487 80c0 1.063-.933 3.31-4.396 6.313-3.464 3.002-8.856 6.152-14.409 8.742-3.928 1.832-7.71 3.287-11.195 4.549V60.396zm-402 0v39.208c-3.485-1.262-7.267-2.717-11.195-4.55-5.553-2.589-10.945-5.739-14.409-8.742C25.933 83.31 25 81.064 25 80c0-1.063.933-3.31 4.396-6.313 3.464-3.002 8.856-6.152 14.409-8.742 3.928-1.832 7.71-3.287 11.195-4.549zM439 73v14h-46V73h46zm-64 0v291.578L256 498.453 137 364.578V73h238zm-256 0v14H73V73h46zm210 23h-18v252.844l-55 68.75-55-68.75V96h-18v259.156l73 91.25 73-91.25V96z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconVerticalBannerIcon);
    