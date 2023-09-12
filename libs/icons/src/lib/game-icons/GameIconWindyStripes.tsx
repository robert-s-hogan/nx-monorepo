
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconWindyStripesIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'windy-stripes'];
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
        <path fill="currentColor" d="M446.572 492.26c-70.9-25.76-157.852-68.623-227.857-124.94-59.28-47.69-105.936-98.75-138.307-147.944 54.324 63.48 143.362 129.306 255.75 181.51 52.552 24.408 105.607 43.44 156.853 57.81v-85.782c-55.75-13.377-114.278-33.344-172.304-60.295-73.743-34.253-136.533-74.167-183.894-115.62 72.805 49.005 178.796 92.765 302.112 119.347 18.29 3.944 36.086 7.565 54.087 10.567v-76.457c-31.79-3.728-64.292-8.414-97.356-15.54-94.3-20.327-177.547-51.718-240.3-87.645 83.46 37.45 203.265 61.61 337.655 64.025v-70.863c-15.215.637-29.944 1.242-45.588 1.242-195.255 0-346.713-48.31-428.59-121.212-9.91 191.205 34.25 281.387 186.745 434.5 16.274 13.093 33.47 25.568 50.223 37.297h190.768z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconWindyStripesIcon);
    