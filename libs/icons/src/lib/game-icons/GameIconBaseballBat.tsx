
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBaseballBatIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'baseball-bat'];
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
        <path fill="currentColor" d="M429.725 54.54c-3.023.094-5.838 1.16-8.16 3.48l-.055.056-.057.055s-115.29 111.285-169.37 169.364c-28.277 30.37-56.8 65.693-88.448 102.922l17.726 17.73c37.02-31.78 72.285-60.387 103.388-88.236 58.86-52.703 169.174-169.187 169.174-169.187l.084-.09.088-.088c11.49-11.49-7.83-35.118-23.063-35.988-.438-.025-.874-.032-1.305-.018zM151.89 344.13c-17.598 20.413-36.214 41.272-56.33 62.114l10.327 10.248c20.79-20.14 41.52-38.848 61.828-56.54l-15.824-15.823zm-80.21 63.776l-9.9 9.9 32.652 32.4 9.9-9.9-32.652-32.4z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBaseballBatIcon);
    