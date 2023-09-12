
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconArmoredPantsIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'armored-pants'];
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
        <path fill="currentColor" d="M89.452 32v44.667l166.75 28.9 166.75-28.9V32l-166.75 28.902L89.452 32zm-.405 69.444v186.712c49.478 16.004 90.187 8.72 139.67 0 1.14-34.244 12.925-60.635 27.09-60.672 14.165.04 25.95 26.428 27.09 60.672 49.472 16.003 90.173 8.72 139.65 0V101.444l-166.74 28.813-166.76-28.813zm0 212.25V382.88c45.914 7.332 85.747 13.896 131.648 0V313.694c-45.915 7.33-85.747 13.895-131.648 0zm201.853 0V382.88c45.914 7.332 85.747 13.896 131.648 0V313.694c-45.915 7.33-85.747 13.895-131.648 0zm-198.44 94.55v64.2c43.532 6.802 81.302 12.893 124.823 0v-64.2c-43.534 6.8-81.303 12.893-124.824 0zm201.854 0v64.2c43.533 6.802 81.3 12.893 124.822 0v-64.2c-43.534 6.8-81.3 12.893-124.822 0z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconArmoredPantsIcon);
    