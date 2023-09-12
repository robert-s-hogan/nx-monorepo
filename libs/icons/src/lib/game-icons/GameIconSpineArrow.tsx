
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSpineArrowIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'spine-arrow'];
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
        <path fill="currentColor" d="M14.563 15.406v104.75L72.97 135.72l52.436 52.468 34.72-18.594 8.81 16.47-86.186 46.155 119.875 33.155 84.28 84.313 20.22-7.594 6.563 17.5-65.438 24.594L491 494 381.812 252.72l-26.03 68.31-17.47-6.655 8.938-23.47-21.406-21.436-33.28-120.314-2.72 5.063-41.625 77.843-16.5-8.813 16.686-31.22-46.375-46.374-33.06-119.53-43.064 80.78-16.5-8.78 15.688-29.407L71.78 15.405H14.563z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSpineArrowIcon);
    