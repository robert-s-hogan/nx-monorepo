
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHeartTowerIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'heart-tower'];
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
        <path fill="currentColor" d="M67.813 23.03v111.126l61.156 75.813v188.655H89.624l-28.72 92.813h389.158l-28.72-92.813H382V209.97l61.156-75.814V23.03H378.72v52.407h-39.19V23.032h-65.124v52.407h-38.53V23.032H170.75v52.407h-38.5V23.032H67.812zm132.343 143.907c20.707-.04 41.94 10.97 55.156 35.782 32.476-55.953 118.296-42.723 116.094 26.218-2.067 64.67-89.716 86.23-116.094 154.906-27.862-68.683-117.91-86.106-115.75-154.906 1.203-38.326 30.33-61.943 60.594-62zm113.78 20.657c-5.106 0-9.948 1.022-14.373 2.844 12.334 1.777 25.138 10.802 33.28 24.906 7.318 12.674 9.206 26.573 6.157 37.656 7.633-6.842 12.406-16.793 12.406-27.938 0-20.81-16.657-37.468-37.47-37.468z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHeartTowerIcon);
    