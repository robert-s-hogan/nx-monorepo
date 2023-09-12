
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAbstract087Icon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'abstract-087'];
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
        <path fill="currentColor" d="m21,21v71.6751h71.675v-71.6751h-71.675zm104.575,0v71.6751h260.85v-71.6751h-260.85zm293.75,0v71.6751h71.675v-71.6751h-71.675zm-398.325,104.575v260.85h71.675v-260.85h-71.675zm104.575,0v260.85h31.8719c2.6667-45.8772 36.6737-83.2489 80.9281-91.2094v-78.4313c-44.2544-7.9605-78.2614-45.3321-80.9281-91.2094h-31.8719zm228.9781,0c-2.6667,45.8773-36.6738,83.2489-80.9281,91.2094v78.4313c44.2543,7.9605 78.2614,45.3321 80.9281,91.2094h31.8719v-260.85h-31.8719zm64.7719,0v260.85h71.675v-260.85h-71.675zm-398.325,293.75v71.675h71.675v-71.675h-71.675zm104.575,0v71.675h260.85v-71.675h-260.85zm293.75,0v71.675h71.675v-71.675h-71.675z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAbstract087Icon);
    