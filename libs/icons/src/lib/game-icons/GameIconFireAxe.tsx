
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconFireAxeIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'fire-axe'];
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
        <path fill="currentColor" d="M145.75 19.78L107.906 116l43.03 31.938 48.814-96.97-54-31.187zm77.094 26.907L152.47 186.5l86.468 49.938 88.53-129.344-104.624-60.406zm112.187 82.376L262.376 235.28c17.46 28.874 29.09 63.707 35.375 103.126 56.317-31.27 107.836-85.753 135.28-152.75l-98-56.594zm114.345 66.03c-30.433 72.7-86.892 130.64-148.938 163.063 2.02 18.153 3.012 37.162 3 56.906 71.107-23.5 159.603-92.374 187.907-195.75l-41.97-24.218zm-289.094 17.5c-39.7 79.313-78.154 159.572-137.905 237.157v44.78H66.72c41.425-87.972 93.64-170.09 145.53-251.936l-51.97-30z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconFireAxeIcon);
    