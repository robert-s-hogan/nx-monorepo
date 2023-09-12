
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconGooSpurtIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'goo-spurt'];
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
        <path fill="currentColor" d="M164.22 19.97c-55.872.782-107.155 22.6-138.345 76.25 70.746-35.597 126.136-16.29 156.97 39-9.19-32.183-15.546-61.18 15.342-43.345 99.626 57.518 82.717 175.182 93.157 288.125 6.47 69.99 73.38 113.886 126.625 100.53 51.757-12.98 89.914-78.05 62.75-136.405-39.485-84.82-106.24-150.306-169.595-223.844-26.82-31.13 37.58-16.983 87.72 6.314C348.42 68.75 254.338 20.817 169.624 19.97c-1.81-.02-3.604-.027-5.406 0zm113.967 134.843c39.97 42.606 64.192 101.616 63.032 177.968-.426 27.78 12.714 60.507 31.405 77.19 29.71 26.514 65.718 27.143 92.78-4.75-20.674 36.025-59.665 68.922-112.593 35.936-23.882-14.883-41.382-51.668-40.125-83 1.71-42.56 9.185-146.958-34.5-203.344zm-77.718 13.03c-12.77.383-21.4 16.095-19.595 36.813 1.926 22.1 15.008 41.518 29.187 43.344 14.18 1.826 24.114-14.62 22.188-36.72-1.926-22.098-15.008-41.486-29.188-43.31-.886-.115-1.742-.152-2.593-.126z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconGooSpurtIcon);
    