
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPortculisIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'portculis'];
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
        <path fill="currentColor" d="M98.156 22.656V438.53H79.72l30.53 58.064 30.53-58.063h-17.218v-63.467H152.5v-36.344h-28.938V269.06H152.5V232.75h-28.938v-69.625H152.5V126.78h-28.938V58.845H152.5V22.656H98.156zm73.03 0V438.53h-15.624l30.532 58.064 30.53-58.063h-17.718v-63.467h26.625v-36.344h-26.624V269.06h26.625V232.75h-26.624v-69.625h26.625V126.78h-26.624V58.845h26.625V22.656h-54.343zm73.033 0V438.53H230l30.53 58.064 30.533-58.063H272.5v-63.467h29.594v-36.344H272.5V269.06h29.594V232.75H272.5v-69.625h29.594V126.78H272.5V58.845h29.594V22.656H244.22zm76.56 0V438.53h-15.56l30.53 58.064 30.563-58.063h-17.907v-63.467h27.25v-36.344h-27.25V269.06h27.25V232.75h-27.25v-69.625h27.25V126.78h-27.25V58.845h27.25V22.656H320.78zm73.564 0V438.53h-14.688l30.563 58.064 30.53-58.063H422V22.657h-27.655z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPortculisIcon);
    