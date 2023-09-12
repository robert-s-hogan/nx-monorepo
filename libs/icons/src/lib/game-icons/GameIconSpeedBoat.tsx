
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSpeedBoatIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'speed-boat'];
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
        <path fill="currentColor" d="M157.936 170.44c34.704 30.84 60.676 41.057 64.574 66.86-44.922-28.557-74.454-35.404-120.55-24.94 34.698 15.008 61.532 39.41 61.128 67.585C122.04 252.54 81.49 244.095 33.49 259.37c47.32 15.773 60.156 31.302 45.78 65.935l19.033 7.142-3.033 8.084c38.96-3.31 88.642-9.652 139.994-17.178L200.8 277.4 190 263h84.492l71.46 42.875c2.615-.438 5.27-.877 7.86-1.314-64.466-85.384-102.083-116.213-195.876-134.12zM226 281l33.918 45.223 66.492-11.082L269.508 281H226zm243.992 21.143c-45.566 8.635-116.498 21.22-190.61 32.75-69.577 10.823-139.832 20.412-191.093 24.244l-8.9 23.722L116.815 439H352c26 0 61.605-29.436 88.896-64.525 13.646-17.545 25.395-36.16 33.604-52.096l.234-.468c-77.016 62.68-213.816 84.28-355.404 84.28v-18c144.212 0 281.44-25.07 350.662-86.05zM18 306.088v41.48a79.124 79.124 0 0 1 3.49-6.144c7.413-11.725 18.567-21.03 33.217-23.717-13.384-4.862-25.65-8.858-36.707-11.62zm38.297 29.822c-8.354 2-14.408 6.934-19.592 15.133-5.605 8.866-9.643 21.322-12.275 35.016-4.567 23.75-5.04 49.47-5.996 68.94h8.09l23.85-46.05 24.753-65.973-18.83-7.067zM71.6 403.623l-4.748 12.654L55.084 439h40.1L71.6 403.623zM45.762 457l-8.287 16H18v21h476v-37H45.762z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSpeedBoatIcon);
    