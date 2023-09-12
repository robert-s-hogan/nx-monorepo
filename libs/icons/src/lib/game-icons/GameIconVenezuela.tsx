
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconVenezuelaIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'venezuela'];
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
        <path fill="currentColor" d="M77.34 58.23C-10.59 97.68 25.84 165.2 35.37 226.7l82.33 6.6 25.6 29.9 68.2-2.7c-26.2 76.7 6.8 128.3 25.6 185.9 54.7 22.6 92.1-11.5 131.3-39.3l-57.7-83.9 71.9 26.7c29.3-12.5 65.7-15.3 81.8-46.3l-16.9-61.1 44.7-58.9c-31.1-41-75.6-62.7-122.6-80.7l-183.8 2.2c.5-25.81-16.2-50.17-69.5-30.05-25.19 9.48-36.81 11.6-41.65 9.68 10.91 20.87 26.55 53.17 14.71 69.97-6.68 9.6-22.56 10.2-34.91-3.8-16.74-18.9 6.74-51.78 17.28-71.11.17-5.59 5.22-14.38 5.61-21.56z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconVenezuelaIcon);
    