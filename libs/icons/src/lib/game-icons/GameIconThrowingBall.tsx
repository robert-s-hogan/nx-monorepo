
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconThrowingBallIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'throwing-ball'];
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
        <path fill="currentColor" d="M222.4 21.66c-2.3 0-4.5.35-6.7 1-8.9 2.62-16 10.11-20.4 21.67-4.4 11.52-5.4 26.73-1.6 42.27 3.8 15.5 11.6 28.1 20.6 35.6 9 7.6 18.6 10.1 27.4 7.5 8.8-2.6 16-10.1 20.3-21.7 4.4-11.45 5.4-26.66 1.7-42.21-3.8-15.55-11.6-28.13-20.6-35.65-6.8-5.69-13.9-8.52-20.7-8.48zM94.28 28.94c-21.65 0-39 17.35-39 39s17.35 38.96 39 38.96c21.72 0 39.02-17.31 39.02-38.96 0-21.65-17.3-39-39.02-39zm-54.27 56.4l-21.49 8.71C29.24 138.8 65.03 188 108.1 208.9c33.3-2.4 51.3-11 87.5-27.5 24.8 68.1 32.5 116.5 4.8 192.7l-108.26 64-7.29 52.2 157.45-78c22.2-32.3 38-55.9 48.1-92.2l91.3 23.5c20.7 45.5 27.4 84.3 32.3 137.3l43.1-36.3c-7.5-51.6-17.6-92.5-36.8-142.1-31.3-18.9-75-37.8-105.5-48 8.7-40.6 3.9-70.9-8-110.2 65.2-3.1 100.7 5.5 163.8 23.3l22.9-23.4c-39.1-18.2-131.6-47.85-211.9-40.4-.9 3.5-1.9 6.9-3.1 10.2-5.9 15.7-17.2 28.6-32.5 33.2-15.4 4.5-31.1-.4-43.2-10.7-3-2.5-5.8-5.3-8.5-8.4-32.8 13.5-64.9 29.7-80.7 40-24.29-10.7-37.35-30.1-47.34-50.6-12.33-7-21.83-18.45-26.25-32.16z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconThrowingBallIcon);
    