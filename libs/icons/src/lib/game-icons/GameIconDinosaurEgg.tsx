
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDinosaurEggIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'dinosaur-egg'];
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
        <path fill="currentColor" d="M304.813 31c-2.68 0-5.374.062-8.063.188-12.293.574-24.667 2.45-36.97 5.75-49.2 13.2-116.718 54.886-166.967 106.406-50.25 51.52-82.375 112.03-68.97 162.125 13.725 51.285 64.74 99.784 125.563 131.217 60.823 31.434 130.982 45.438 179.094 32.532 48.112-12.908 96.36-58.455 128.156-114.595 31.795-56.14 46.91-122.3 33.03-174.156C465.62 90.534 387.885 30.977 304.815 31zm-13.875 32.156c23.905.353 42.986 8.247 51.593 23.563 17.217 30.63-14.003 79.414-69.75 108.968-55.745 29.553-114.908 28.66-132.124-1.97-17.215-30.63 14.035-79.415 69.78-108.968 27.875-14.777 56.596-21.947 80.5-21.594zm175.968 122.656c25.964 97.013-56.265 238.79-147.094 263.157-55.228 14.817-136.132-7.745-196.906-49.5 136.662 62.11 320.135 11.945 344-213.658zM96.75 205.75c20.858 0 37.75 16.89 37.75 37.75s-16.89 37.78-37.75 37.78-37.78-16.92-37.78-37.78 16.922-37.75 37.78-37.75z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconDinosaurEggIcon);
    