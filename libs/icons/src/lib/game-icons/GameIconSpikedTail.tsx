
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSpikedTailIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'spiked-tail'];
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
        <path fill="currentColor" d="M19.297 16.27v113.06L266.15 263.12 132.357 16.27H19.297zm134.318 0l158.947 293.263L19.298 150.586v35.9l39.24 24.815 25.9 162.188 18.735-133.963 82.383 52.094 21.43 134.204 15.503-110.85 75.72 47.88 17.263 108.095 12.49-89.282 61.923 39.158 12.6 78.914 9.117-65.18 70.68 44.694-45.186-71.46 66.656-9.32-80.7-12.888-38.847-61.434 90.758-12.693-109.88-17.548-47.57-75.228 112.326-15.71-135.992-21.716-51.783-81.89 135.432-18.94-163.965-26.184-24.013-37.974h-35.9zm223.877 64.158l.006.002v-.002h-.006z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSpikedTailIcon);
    