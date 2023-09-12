
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCheckeredDiamondIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'checkered-diamond'];
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
        <path fill="currentColor" d="M362.04 15.275l-21.56 71.582c-3.005 1.19-5.892 2.606-8.628 4.252l-61.207-69.18L64.457 196.37l83.205 296.763h19.41L87.302 208.62l.733.278L269.5 49.18l.084.095.004-.336 47.984 54.234c-4.402 5.114-7.938 10.99-10.38 17.412l-38.678 11.65.748-57.95-161.487 142.136 1.094.416-.25.074 80.962 276.22h19.475l-78.57-268.052 135.753 51.746-29.303 216.307h62.276L405.318 234.5l-36.058 10.932 14.967-49.69c3.656-1.494 7.13-3.34 10.375-5.508L427.75 227.7l-1.545.468 1.637.672-108.43 264.293h20.31L451.745 226.62l-43.453-49.112c3.133-4.01 5.77-8.426 7.785-13.174l73.024-21.996-72.198-21.746c-5.852-15.404-18-27.693-33.304-33.742l-21.56-71.575zm73.343 25.903c-13.13 0-23.774 10.644-23.774 23.773 0 13.13 10.642 23.775 23.773 23.775 13.13 0 23.773-10.645 23.773-23.774 0-13.13-10.643-23.772-23.773-23.772zM268.253 152.36l39.768 11.98c6.038 14.21 17.523 25.54 31.83 31.394l16.177 53.707-89.377 27.095 1.604-124.174z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCheckeredDiamondIcon);
    