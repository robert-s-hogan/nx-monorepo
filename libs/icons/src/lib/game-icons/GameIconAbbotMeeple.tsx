
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAbbotMeepleIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'abbot-meeple'];
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
        <path fill="currentColor" d="M256 16.1l-82.7 82.72 35 69.98a66.18 66.18 0 0 0-18.6 45.8 66.18 66.18 0 0 0 10.4 35.3c-42.8 5.3-126.12 21.2-126.12 47.5 0 16.8 30.02 37.8 68.12 54.5L73.98 462.8c0 33.1 33.02 33.1 66.22 33.1h231.5c33.1 0 66.3 0 66.3-33.1l-68.2-110.9c38.1-16.7 68.2-37.7 68.2-54.5 0-26.3-83.5-42.2-126.1-47.5a66.18 66.18 0 0 0 10.2-35.3 66.18 66.18 0 0 0-18.4-45.8l35-69.98z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAbbotMeepleIcon);
    