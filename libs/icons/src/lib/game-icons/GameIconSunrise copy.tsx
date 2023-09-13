
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSunrise copyIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'sunrise copy'];
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
        <path fill="currentColor" d="M259.375 16.25c-132.32 0-239.78 107.46-239.78 239.78s107.46 239.783 239.78 239.783 239.78-107.462 239.78-239.782-107.46-239.78-239.78-239.78zm33.5 20.406c26.563 4.015 51.57 12.708 74.156 25.25L308.907 209.03c-14.573-7.215-30.96-11.344-48.312-11.53l32.28-160.844zm-67.72.094l23.97 161.22c-17.2 1.56-33.28 6.986-47.313 15.436l-51-151c22.616-12.698 47.696-21.54 74.344-25.656zm193.25 64.5c17.683 18.164 32.28 39.32 42.94 62.688l-107.658 85.468c-8.9-14.076-20.863-26.014-34.968-34.875l99.686-113.28zm-319.092 1.063L192.5 219.686c-13.318 9.978-24.317 22.88-32.063 37.75L56.5 166c10.527-23.725 25.082-45.226 42.813-63.688zm378.75 115.906c2.105 12.286 3.218 24.92 3.218 37.81 0 11.49-.882 22.768-2.56 33.783l-107.876 16.062c-.463-17.028-4.757-33.097-12-47.375l119.22-40.28zM40.25 221.093l115.844 45.75c-4.918 12.077-7.81 25.224-8.188 39l-107.844-16.03c-1.678-11.016-2.562-22.295-2.562-33.783 0-11.89.954-23.554 2.75-34.936zm130.563 89.53h177.125L467 334.532c-31.674 83.843-112.62 143.376-207.625 143.376-95.018 0-175.968-59.548-207.625-143.406l119.063-23.875z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSunrise copyIcon);
    