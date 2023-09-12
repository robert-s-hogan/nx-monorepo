
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconWaterRecyclingIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'water-recycling'];
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
        <path fill="currentColor" d="M254.9 19.34c-72 .4-143 33.5-189.17 95.86-69.798 94.4-59.097 223.3 19.9 305l-37.2 50.4 151.17-22.7L177 296.7 133.8 355c-44.07-54.4-47.67-133.6-4.1-192.5 30.6-41.5 77.8-63.46 125.7-63.66 16.4-.1 32.8 2.26 48.7 7.36l-7-46.46c-23.9-4.9-47.9-5-71-1-59.3 7.3-114 39.9-148.17 91.16C113.6 84.04 181.7 44.04 254 42.24c1.6-.1 3.3-.1 5-.1 14.8 0 29.7 1.6 44.6 4.9l48.6-7.3c-31.2-13.9-64.3-20.6-97.3-20.4zm212.9 22.1l-151.2 22.6 22.6 151.06 41.2-55.5c42.2 54.2 45.1 132 2.2 190-40.3 54.4-108.9 75.3-170.2 57.6l6.5 43.6c28.7 5.5 58.2 4.4 86.2-3.1 37.4-6 73.3-22.1 103.1-47.7-49.1 54.6-122.6 77.5-191.7 64.3l-55.8 8.3c99 43.7 218.4 14.8 285.5-75.9 69.1-93.4 59.4-220.7-17.5-302.46l39.1-52.8zM256 144s-78.3 99-63.9 152c7 25.7 37.3 47.8 63.9 47.8 26.7 0 56.9-22.1 63.9-47.8 14.4-53-63.9-152-63.9-152z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconWaterRecyclingIcon);
    