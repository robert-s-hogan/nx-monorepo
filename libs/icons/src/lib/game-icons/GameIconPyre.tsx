
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPyreIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'pyre'];
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
        <path fill="currentColor" d="M261.3 21.48c56.2 83.72-25.1 188.32-77.4 87.12 31.6 169-76.1 221.8-87.39 114.5-83.28 74.3-69.9 178.9-5.38 233.8L203.8 246.7c.6-7.2 1.4-14.3 2.1-21.5l16.3 4.5 52.1-6.7 1.1 15.2 19.2.8s21.3 28.7 21.6 28.9l100.9 174.2c62.6-56 89.7-158-6.2-203.9 45.3 70.7-9.4 106.6-64.6 32.1-44.7-84.4 89.6-116.4-85-248.82zM136.6 50.4c-74.59 37.81-17.1 70.7-16.4 108.1 51.2-45.6-4.3-62.68 16.4-108.1zm299 54.4s-30.3 32.3-21.2 46.9c12.9 20.7 21.9 30.8 4.2 59.9 44-24.6 39-45.1 25.1-63.3-6.2-8.1-12.1-21.5-8.1-43.5zM257.7 243.2l-17.6 2.3L258 490l18.4.5zm-36.1 8.2L96.42 485.1l21.68 3.7 107.2-198-2.8-39.2zm55.2 4.9l.9 12.4 118.7 213.5 16.8-11.1-124.3-214.3zm-49 67.7l-16.1 29.7-12.4 131.7 22.8 2.1 7.1-143.3zm55 12.1l4.1 54 21.9 99.9 21.2-2.7-4.4-18.1zm29 30.9l37.8 117.7 20.8-4.6-7-20.2zm-122 27.1l-20.9 38.6-17.8 48.8 22.6 3.4 11.8-44.6z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPyreIcon);
    