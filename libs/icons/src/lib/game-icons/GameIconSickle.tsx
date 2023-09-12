
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSickleIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'sickle'];
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
        <path fill="currentColor" d="M257.563 25.156c353.16 276.87 16.918 408.895-87.875 293.25l-40.75 37.125 50.812 50.345c217.562 181.363 524.73-252.058 77.813-380.72zM110.75 364.28c-5.525 1.065-8.975 2.957-11.313 5.25-1.956 1.922-3.248 4.556-4.25 7.564l55.188 52.844c5.468-1.008 9.264-2.796 11.28-4.688 1.997-1.872 3.095-3.864 3.095-7.53l-54-53.44zm-24.72 30.314L30.407 445.28C13.67 472.28 45.1 506.478 81.5 489.94l51.53-50.282-47-45.062z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSickleIcon);
    