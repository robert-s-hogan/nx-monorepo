
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconArmorPunchIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'armor-punch'];
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
        <path fill="currentColor" d="M133.3 20c20.4 39.94 50.2 88.8 47 132 20.4 8.9 40.4 18.5 59.5 28.6 3.1-23.6 2.8-48.5 0-73.8-29.9-35.27-69.1-68.47-106.5-86.8zM27.4 22.65c16.94 24.76 29.56 53.6 27.64 82.45 35.91 11.4 72.26 24.5 107.56 39.3-1.8-29.8-14.3-56.26-26.3-80.38-34-19.23-74.17-32.04-108.9-41.37zm385 22.24c23.1 43.88 38.9 95.21 35.3 116.61-10.1-14.6-28.1-52.3-88.4-68.53 41 41.13 68 115.63 60.8 137.43-14.9-36.5-38.9-55.1-80.5-71 18.7 24.4 31.5 56.4 36.3 87.9 29.3 17.4 55.2 37.4 78.1 57.5 9.6-.8 18.8 7.4 21.9 14.6 2.8 7.1 3.4 15.4 1.6 24.3-2.8 9.1-6.6 17.4-12.5 23.3-5.4 23.8-10.9 42.6-21.2 61.1L385.5 443c-2.3 33.3-63.6 21.5-81.4 10.1-22.9-14.7-61-49.7-56.6-81.1-29.4-3.5-59.1-13.6-82.7-29.2 18.8 40.4 39.1 62.9 76.6 75.2-21.2 8.8-97.5-12.8-141.3-50.7 20.3 59 59.2 74.2 74.7 83.2-21.2 5.1-73.6-6.9-119.06-26.8C161.7 537.2 482.3 475 482.3 475s54.9-329.2-69.9-430.11zm-157 41.93c5.2 34.68 6.5 69.68 1.1 102.88 30 18.6 43.7 26.8 64.2 41-10.5-69.3-35.5-104.8-65.3-143.88zM17.65 112.7C40.39 170 40.22 219.2 47.8 268.9c55.5 14.3 112.7 42.4 161.6 67.5 13.5-41.5 39.3-82.1 61.5-117.2-73.2-45-166.1-80.9-253.25-106.5zm59.1 39.8c24.35 25.8 45.45 54.1 49.75 84.2-10.9 19.5-41.55 24.1-58.75 24.6l-.34-18c13.41-1.3 30.86-.1 40.29-10.5-3.8-22.3-18.02-44.6-42.95-66.9zm103.95 43.9c19.5 19.1 28.8 42.1 32.6 66-10.8 23.7-42.9 29-59.2 27.4l2-17.8c22 2.5 34.1-4 38.5-11.8-3.4-18.6-7.4-34.5-25.7-50.2zm105.4 32.5c-22.7 36-48.2 76.8-60.5 115.8 8.4 4.2 16.5 8.4 24.2 12.4 9.1-41.4 37.3-77.5 61.5-110.6-8-6-16.4-11.9-25.2-17.6zm48 16.5c-26.7 38-58.8 77.1-67.1 118.2l42.3 3c11.5-18.3 27.8-21 47.6-23.1 3.8 9.5 26.5 26.9 34.2 31.4 4.9-2.1 9.5-5 14.6-8.3 7.6 14.7 20.1 26.1 30.6 36.1 3.7-8.8 6.5-18.2 8.7-27.8-7.9-.7-15.8-8.7-18.4-14.6-2.9-7.1-3.4-15.5-1.6-24.3 2.6-8.5 6.3-16.9 11.6-22.4-29.3-25.1-63-49.3-102.5-68.2zm115.2 80.1c-2.7 2.8-5.3 7.4-6.5 13.1-.5 4.7-1.9 17.1 4.8 18.5 6.8-1.5 10.7-10 12.1-16 1.2-5.7.6-10.8-.7-14.2-2.7-5.9-6.4-4.5-9.7-1.4zm-98.9 38.8c-10 .2-21.6 3.4-23.4 11.5 5.2 18.4 27 29.4 40 39.8.2-9.6 1-20.6 6.3-30.7-8.7-6.3-16-13.7-22.9-20.6zm-83.1 17.4c5.6 14.7 14 25.4 24.5 38.5 13.8-3.3 21.3-10.7 27.8-18.5-5.6-6.1-10-11.5-14.1-17.3zm132.4 9.1c-3.3 1.5-6.9 2.8-10.8 3.7-3.1 7.8-3 18.6-3.8 30l37.4-9.6c-7.9-7.1-16.6-14.8-22.8-24.1zm-68.2 24.5c-5.9 6.6-13.8 13.9-25 18.8 12.8 11.4 64 15.7 59.6 5.9-13.6-8-25.3-15.8-34.6-24.7z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconArmorPunchIcon);
    