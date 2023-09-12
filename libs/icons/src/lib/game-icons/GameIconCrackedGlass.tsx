
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCrackedGlassIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'cracked-glass'];
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
        <path fill="currentColor" d="M19.188 17.406L74.624 68.72l4.938 2.155L119 88.03l48.844-70.624H19.188zm171.406 0L136.5 95.626l38.063 16.53 1.875.813 1.343 1.5 62.157 69.218 25.532 25.968 8-25.53-.095-.032L303.97 82.72l-19.626-65.314h-93.75zm113.28 0l17.407 58.063 105.345-21.5-7.313-36.564H303.875zm134.5 0l8.407 42.032 1.814 9.124-9.125 1.844-119.626 24.406-16.47 54.626 47.72 56.062 142.625-95.938V17.406h-55.345zM18.907 42.594v168.03l69.03-26.03L68 87.75l-.156.188-48.938-45.344zm69.72 52.593l18.468 89.626 51.22 19.312 35.624-43.656-28.72-32-76.593-33.282zm405.093 36.876L337.53 237.188l-13.717 10.53 169.906 105.845v-221.5zm-396.533 69l-78.28 29.53v166.938l181.5-103.874 47.124-33.344-37.843-16.968-.03.094-57.47-21.657-4.03-1.155-2.282-1.22-48.688-18.343zm242.875 78.78l-5.406 5.782-44.5 47.625-4.844 57.313 68.813 92.562L493.72 423v-47.406l-153.658-95.75zm-151.375 42.094l-65.593 37.532L224.28 492.22h113.314l-69.375-93.376-2.095-2.813.28-3.53 4.033-47.72-81.75-22.842zm-81.968 46.875l-87.814 50.25v73.157H200.78L106.72 368.81zm387 74.532L380.25 492.22h113.47v-48.876z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCrackedGlassIcon);
    