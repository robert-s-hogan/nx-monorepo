
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDropIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'drop'];
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
        <path fill="currentColor" d="M263.844 40.344C234.1 213.202 145.594 248.03 145.594 369.22c0 60.804 60.106 105.5 118.25 105.5 59.45 0 115.937-41.803 115.937-99.533 0-116.332-85.2-162.312-115.936-334.843zm-58.28 217.094c-27.963 75.53-5.105 154.567 54.25 179.375 15.185 6.348 31.724 7.714 47.905 6.28-116.134 49.787-185.836-79.816-102.158-185.656z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconDropIcon);
    