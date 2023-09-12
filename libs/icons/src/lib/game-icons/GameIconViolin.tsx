
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconViolinIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'violin'];
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
        <path fill="currentColor" d="M470.9 26l-23 7.69-.1 12.66 17.8 17.81 12.7-.1 7.7-23.04zm-32.5 37l-227 210.5 27.2 27L449 73.57zm-39.6-19.33L385.7 56.7l15.6 15.5 13.5-12.53zm53.5 53.59l-12.5 13.54 15.5 15.4 13.1-13zm-79.6-27.52l-13 13.02 14.6 14.61 13.5-12.58zm54.5 54.46l-12.5 13.6 14.5 14.5 13.1-13.1zm-124 39.2c-28.7-17.5-72-25.4-116.3 47.8l-7.2-1.4-7.3 13c3.8 1 13.5 8.2 12.4 12.1-3.5 11.3-48.2 64.3-70.6 44.5-2.9-2.6-5.8-5.7-8-9.6l-14.35 7.9c1.23 10-1.95 13.8-6.38 15.8-82.975 36.6-64.15 78.6-33.01 126.9l3.11-3c22.09-22.2 43.62-54.6 62.73-82.7l6.1-9.3 13 13 10.1-10.1-10.8-10.9 18.8-7.3 5.1 5.2 33.3-33.4c-2.9-3-5.9-6-8.9-8.9zm45.5 45.5L239 327l-8.9-8.9-33.3 33.3 5 5.1-7.1 18.9-10.9-11-10.1 10.2 12.8 12.9-9.2 6.3c-27.6 18.9-60.6 40.6-82.61 62.7l-3.14 3c48.45 31.2 90.45 50 127.05-33 2-4.4 5.7-7.6 15.8-6.4l7.8-14.3c-3.8-2.3-7-5-9.6-8-19.8-22.4 33.2-67.2 44.5-70.7 3.9-1.1 11 8.6 12.1 12.4l13-7.1-1.4-7.2c73.2-44.3 65.4-87.7 47.9-116.3zM206.9 295l-33.2 33.3 10.1 10.1 33.3-33.3zm-46.3 46.3l-10.2 10.1 10.2 10.1 10.1-10.1zm-33.4 13c-16.4 24.2-34.63 51-54.84 72l2.97 10.3 10.36 3c21.11-20.1 48.01-38.4 72.11-54.8z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconViolinIcon);
    