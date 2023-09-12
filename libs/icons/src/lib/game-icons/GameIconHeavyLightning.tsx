
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHeavyLightningIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'heavy-lightning'];
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
        <path fill="currentColor" d="M20.517 14.64v112.715l44.386 28.033-44.97 78.26 96.948 49.056-9.343 32.705 78.843 35.04-32.122 96.947 174.623 46.14-112.714-69.5 22.778-50.226 257.55 113.885-282.08-203.82 29.2-90.525 47.89 52.562 83.515-40.88-44.386 87.016 164.693 108.628-106.292-126.148 22.778-40.296 74.754 56.648-84.68-151.26-71.837 27.45L227.263 14.64H20.52zm77.09 161.19l42.633 26.865-14.6 50.81-52.56-34.458 24.528-43.217z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHeavyLightningIcon);
    