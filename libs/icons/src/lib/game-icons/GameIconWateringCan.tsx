
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconWateringCanIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'watering-can'];
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
        <path fill="currentColor" d="M190.49 76.718c-1.066-.005-2.13.003-3.197.02-28.426.506-56.814 9.317-81.756 23.757-39.907 23.104-71.644 60.824-80.8 104.44-7.826 37.298 1.858 78.55 36.044 115.742-1.35-11.182-2.183-21.875-2.544-32.038-17.66-27.03-21.263-54.363-15.88-80.008 7.845-37.383 36.108-71.663 72.2-92.56 36.094-20.895 79.364-28.2 116.774-13.882 30.495 11.67 58.04 37.605 75.602 84.684 5.683-1.565 11.46-3.154 17.336-4.776-19.17-51.894-50.605-82.98-86.504-96.72-15.325-5.865-31.285-8.592-47.274-8.66zm238.54 65.05c-4.217-.01-8.232.595-11.915 1.813l8.557 40.032 24.4 15.85 39.74-8.582c-1.454-13.915-12.173-28.51-27.056-38.178-10.717-6.962-22.85-10.904-33.725-10.934zm-100.47 57.79c-91.212 25.175-160.583 44.4-250.48 45.51-5.605 44.858.637 110.842 30.324 190.216H288.79c42.614-73.726 52.533-161.183 39.77-235.727zm94.31 3.7l-81.028 145.85c-6.25 26.707-7.854 35.71-13.358 50.758l107.42-188.143zm-21.35 3.047l-52.223 10.66c.688 5.954 1.242 11.968 1.654 18.032l39.058-7.973zm-199.473 77.98s40.436 52.545 32 80c-3.78 12.303-19.128 21.614-32 21.614s-28.22-9.312-32-21.616c-8.436-27.454 32-80 32-80z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconWateringCanIcon);
    