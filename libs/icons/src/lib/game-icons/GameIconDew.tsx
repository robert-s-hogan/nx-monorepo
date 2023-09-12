
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDewIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'dew'];
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
        <path fill="currentColor" d="M20.44 20.26v64.66C130.8 72.49 291.4 112.6 370.5 191.6c-85.9-43.8-244.7-73.2-350.06-64v84.5C88.45 328.6 217.2 253.7 325.8 222c61-11.5 72.7 19.7 108.2 30.2-11.5-20.6-22.4-39.3-32.8-56.3 23.3-9.9 39.8-33 39.8-59.9 0-35.8-29.2-65-65-65-19.3 0-36.7 8.53-48.7 22-58.6-64.95-101.4-66.71-157.4-72.74H20.44zM373.8 88.08c5.7-.07 11.6.94 17.7 3.27-28.8 4.05-34.2 63.55 27 52.75 10.5-1.9-3.6 29.9-26.5 37.1-19.5-31-37.3-55.8-53.7-75.6 9.1-10.29 21.4-17.33 35.5-17.52zM432 286.5l-7.7 12.9s-12.3 20.4-24.5 46.8C387.6 372.7 375 405 375 432c0 14.7 7.7 28.4 18.2 38.8 10.4 10.5 24.1 18.2 38.8 18.2 14.7 0 28.4-7.7 38.8-18.2 10.5-10.4 18.2-24.1 18.2-38.8 0-27-12.6-59.3-24.8-85.8-12.2-26.4-24.5-46.8-24.5-46.8l-7.7-12.9zm-20.1 77c-16.6 49.1-12.6 99 58.7 72-2.7 26.2-43.6 56.9-71.5 15.4-12.1-18-12.7-50.1 12.8-87.4z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconDewIcon);
    