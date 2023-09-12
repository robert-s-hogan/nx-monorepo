
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconScreenImpactIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'screen-impact'];
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
        <path fill="currentColor" d="M340.625 18.438l-42.438 104.657-39.562-99.938L213.25 157l-75.97-54.78 14.22 92.53L24.53 27l108.095 202.032-72.094-36.344 59.532 171.188-88.906-12.53 55.25 72.06-52.47-12.03 103.626 78.75 1.875 2.47h240.188l110.28-151.376-52.03 5.468 56.406-67.562-71.718 36.03L459.97 203.22l-54.783 24.625-88.75 67.843 54.282-78.25 18.936-116.343-57.75 37.562 8.72-120.22zM310.312 204.25L296.72 317.127l82.53-21.5-59.47 57.625L376.907 395l-77.437-12.905 36.092 75.75-67-39.313-40.593 50.375-3.72-57.97-70.063 5.783 70.063-37.313-77.53-79.28 75.124 18.56-8.375-84.75 51.405 87.5 45.437-117.186z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconScreenImpactIcon);
    