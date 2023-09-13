
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSkirtIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'skirt'];
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
        <path fill="currentColor" d="M103 28.31c-4.17 13.68-5.04 26.09-.1 41.09 56.8-3.6 104-5.31 144.4-5.72 67-.67 115.9 2.19 161.7 5.66 4.1-13.38 1.8-25.38-1.1-40.78-68.3 4.02-186.6 1.87-304.9-.25zm168.7 53.25c-7.8 0-15.9 0-24.3.1-23.1.24-48.5.94-76.5 2.14-22.1 45.3-23.9 88.7-30.2 135.5-7.8-43.5-2.9-94.2-.7-134.03-11.8.64-24.1 1.34-36.9 2.16C57.03 219.3 23.88 348.2 25.81 469.9c15.81 3.4 30.97 6.1 45.56 8.2-1.53-21.7 3.82-65.1 20.27-92.1-5.28 29.8-.87 64.1 3.09 94.9 18.07 1.8 35.17 2.6 51.57 2.8 1.2-76.4-.6-125.2 24.7-203.7.3 77.6 6 147.6 23.6 202.1 26.9-1.9 52.3-5.2 77.2-8.8 28.7-4.2 56.7-8.6 85.4-11.3.8-47.6-9.4-120.3-7.4-193.6 25.1 63.6 39.6 125.7 44.7 191.3 28.9-.8 59.1 1 91.7 7.1 1.7-75.4-25-261.8-74.3-373.19 3.1 61.59 7 121.69-1.2 158.59-13.4-54.9-23.6-106-41.5-167.53-29-1.74-60.3-3-97.5-3.11z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSkirtIcon);
    