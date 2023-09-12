
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCrystalClusterIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'crystal-cluster'];
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
        <path fill="currentColor" d="M263.563 19.063l-53.875 59.562v90.063l-34.75-60.188-35.563-17.594-9.344 43.53 48.376 83.783-19.97-5.345-28.75 10.5 19.658 23.5 30.28 8.125-59.155 15.844-23.407 27.97 34.25 12.498 66.875-17.937-27.875 48.28 5.562 62.72 33.813-15.72v33.126l46.812 66.626 46.78-66.625v-72.81l21.626 68.092 35.875 27.344 13.564-43.03-32.688-102.97 42.875 11.5 26.876-13.78-17.78-20.22-64.595-17.312-.092-.25 82.25-22.03 21.125-24.064-31.97-16.406-73.656 19.75 39-67.594-3.562-55.25-58.844 18.97V78.624l-39.717-59.563zm-5.72 109.562l22.438 115.03 39.876 12.032-39.875 12.032-22.436 115.03-22.375-114.53-41.595-12.533 41.594-12.53 22.374-114.532z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCrystalClusterIcon);
    