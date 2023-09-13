
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSunRadiationsIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'sun-radiations'];
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
        <path fill="currentColor" d="M168.236 12.088l-94.404.004c10.896 8.36 17.928 21.505 17.928 36.3 0 25.262-20.48 45.74-45.74 45.74-15.066 0-28.43-7.287-36.762-18.528v98.755l5.29 41.3 17.313-100.47 26.728 82.066 2.236-67.27 35.838 31.01-12.25-54.86 54.086 28.135-36.762-46.575 53.04-2.56-45.45-22.887 56.268-12.486-47.965-8.153 50.606-29.522zm33.598 6.31l-33.938 17.928 102.02-5.318-105.445 36.53 107.22 23.17-111.36 10.636 109.586 46.105-108.754-14.188 94.57 75.656-90.785-42.2 46.455 75.3-92.21-85.588 56.154 134.648-72.7-94.57 13.004 108.758-42.086-93.037L60.09 338.362l-26.008-136.06-15.727 47.63v106.682L38.22 309.99 58.91 464.26 82.55 289.303l86.296 203.326-24.825-201.552L258.687 437.66l-70.926-172 170.224 127.67L220.86 212.467l189.138 75.656L266.96 175.82l198.6 25.414-184.412-77.427 209.235-29.55-206.28-28.374 113.752-47.485h-196.02z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSunRadiationsIcon);
    