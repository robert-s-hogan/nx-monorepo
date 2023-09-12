
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconEgyptIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'egypt'];
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
        <path fill="currentColor" d="M21.208 51.973l7.023 407.352 398.925.702 63.636-60.515L326.02 133.443l8.428-9.833c26.455 31.79 72.101 106.86 79.364 93.41 15.243-28.226 13.407-53.944 19.665-80.768l-35.819-72.34-65.317 13.345-77.959-22.475-76.965 24.687z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconEgyptIcon);
    