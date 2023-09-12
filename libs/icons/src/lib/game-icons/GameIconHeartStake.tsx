
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHeartStakeIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'heart-stake'];
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
        <path fill="currentColor" d="M87.39 37.73c-2.41 0-4.77.05-7.08.13l.02-.07c-4.6.15-8.96.45-12.87.79-5.96.51-9.51.96-13.01 1.33C31.1 67.49 28.78 95.66 19.22 120.1c7.67 9 12.61 20.9 14.79 32.7 4.81-1.2 10.03-3.2 14.77-5.9 7.42-4.2 13.55-10.2 15.3-13.3 2.64-4.7 3.55-16.6 12.37-26.5 5.74-6.4 12.9-7.72 19.19-9.34 6.26-1.61 12.26-3.17 14.56-4.52h.1c2.4-1.35 10.3-10.59 16.5-20.67 4.7-7.69 8.7-15.18 12-21.34-9.9-8.73-27-12.64-44.12-13.37-2.45-.1-4.89-.14-7.29-.13zm92.91 29.29c-9.7.08-19.4 1.49-28.7 4.27L286.3 235.8l-.2 3.5c-.7 10.3-6 21.3-14.4 31.8-8.4 10.6-20.3 20.3-35.3 23.7l-3.9.9L77.19 188.3c-.14 12.8.88 26.7 3.28 41.8 3.64 74.6 99.93 172.7 118.83 248.3 34.2-33.7 93.2-59.6 148.6-91.2l.1.1c.7-.5 1.5-.9 2.2-1.4 51.9-29.7 100.3-64.6 121.9-115.7 56.5-139.9-101.8-174.46-185.7-105.3-4.3-62.8-55.5-98.32-106.1-97.88zM140 85.44c-6 9.57-12 18.46-20.8 23.46-.5.3-1 .5-1.5.8l30.3 50.8-59.33-39.6c-2.4 4.5-4.04 12.8-8.89 21.6-3.33 6-8.49 11-14.71 15.5L235.8 276c8.4-2.8 16.1-8.9 21.8-16.1 5.2-6.6 8.6-14 9.9-18.8L140 85.44zM403.7 372.7c-12.7 9.1-25.9 17.6-39.5 26l121 84.5-81.5-110.5z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHeartStakeIcon);
    