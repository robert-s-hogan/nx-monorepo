
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconFocusedLightningIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'focused-lightning'];
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
        <path fill="currentColor" d="M19.594 18.125V104.5l210.094 181.78-84.97 178.22 230.938-92.188-39.875 117.032 94.47-35.813 67.594 44.533-34.594-106.344-59.75 27.5 76.75-168.25-198.03 99.093 76.5-122.75L238.186 18.125H121.813L312.406 244.72 218.47 393.75l58.28-142.813L43.72 18.125H19.593z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconFocusedLightningIcon);
    