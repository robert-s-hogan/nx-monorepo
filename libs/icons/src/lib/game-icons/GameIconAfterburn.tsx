
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAfterburnIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'afterburn'];
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
        <path fill="currentColor" d="M18.313 17.78v62.095L170.22 231.75 43 211.625s64.877 30.418 116.344 54.438l-47.375 23.25L279.687 355c-3.582-3.086-7.13-6.347-10.594-9.813-39.543-39.54-54.888-88.3-34.28-108.906 20.605-20.604 69.362-5.26 108.905 34.282 3.355 3.356 6.53 6.754 9.53 10.22l-64.938-167.813L265 162.187c-24.094-51.623-55.03-117.532-55.03-117.532l19.468 122.875L79.655 17.78H18.312zm425.312 243.345l-43.406 46.938-23.595 5.875-33.594-18.344-50.06 50.094 18.31 33.562-5.874 23.563-46.03 42.562 80.093 14.03 28.717 28.72 13.188-13.22-51.5-51.53L469 471.625l-48.656-140.25 52.28 52.28 13.22-13.217-27.97-27.97-14.25-81.343zM392.062 357.5c69.03 70.208 33.083 106.35-37.218 37.22l37.22-37.22z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAfterburnIcon);
    