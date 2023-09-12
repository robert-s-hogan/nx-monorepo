
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSpadesIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'spades'];
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
        <path fill="currentColor" d="M458.915 307.705c0 62.63-54 91.32-91.34 91.34-41.64 0-73.1-18.86-91.83-34.26 2.47 50.95 14.53 87.35 68.65 116h-176.79c54.12-28.65 66.18-65.05 68.65-116-18.73 15.39-50.2 34.28-91.83 34.26-37.29 0-91.34-28.71-91.34-91.34 0-114.47 80.64-83.32 202.91-276.49 122.28 193.17 202.92 162.03 202.92 276.49z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSpadesIcon);
    