
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBatWingIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'bat-wing'];
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
        <path fill="currentColor" d="M23.25 19.875c38.22 44.005 38.98 90.112 16 132.344 75.61-33.06 158.24-45.382 238.844-45.407 2.933 0 5.854 0 8.78.03 45.98.49 91.18 4.898 133.938 11.626C295.842 26.31 154.954 21.397 23.25 19.874zm251.5 105.75c-75.736.388-152.785 11.91-223.03 41.563 39.527 25.086 44.946 85.016 30.78 130.156 81.86-82.396 213.783-137.65 326.688-161.72-43.14-6.38-88.547-10.234-134.438-10zm139.28 28.094C303.25 177.412 172.427 233.127 94.44 312c59.466-5.64 111.354 40.075 96.25 97.844C256.44 302.84 326.538 224.834 414.03 153.72zm11.126 15.06c-84.76 68.95-152.326 143.842-216.187 247 86.224-47.916 190.35-14.365 189.405 76.126h89.53L362.096 328.78l-3.345-4.31 2.156-5.064 64.25-150.625zm10.313 23.407L380.25 321.72l113.875 147.655V435.03c-59.59-92.815-68.082-170.762-58.656-242.842z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBatWingIcon);
    