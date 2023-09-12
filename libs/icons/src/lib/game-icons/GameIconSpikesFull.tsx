
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSpikesFullIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'spikes-full'];
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
        <path fill="currentColor" d="M256 16c-7.5 67.5-37.5 150-37.5 180 0 15 15 30 37.5 30s37.5-15 37.5-30c0-30-30-112.5-37.5-180zM143.5 61.156c27.255 62.207 24.5 72.447 32 85.438 7.5 12.99 15.01 25.97 28 18.47s5.5-20.48-2-33.47c-7.5-12.99-17.755-15.73-58-70.438zm225 0c-40.245 54.707-50.5 57.447-58 70.438-7.5 12.99-14.99 25.97-2 33.47s20.5-5.48 28-18.47c7.5-12.99 4.745-23.23 32-85.438zM61.156 143.5c54.707 40.245 57.447 50.5 70.438 58 12.99 7.5 25.97 14.99 33.47 2s-5.48-20.5-18.47-28c-12.99-7.5-23.23-4.745-85.438-32zm389.688 0c-62.207 27.255-72.447 24.5-85.438 32-12.99 7.5-25.97 15.01-18.47 28 7.502 12.99 20.48 5.5 33.47-2 12.99-7.5 15.73-17.755 70.438-58zM196 218.5c-30 0-112.5 30-180 37.5 67.5 7.5 150 37.5 180 37.5 15 0 30-15 30-37.5s-15-37.5-30-37.5zm120 0c-15 0-30 15-30 37.5s15 37.5 30 37.5c30 0 112.5-30 180-37.5-67.5-7.5-150-37.5-180-37.5zM256 286c-22.5 0-37.5 15-37.5 30 0 30 30 112.5 37.5 180 7.5-67.5 37.5-150 37.5-180 0-15-15-30-37.5-30zm-102.438 15.438c-6.563.164-14.255 4.61-21.968 9.062-12.99 7.5-15.73 17.755-70.438 58 62.207-27.255 72.447-24.5 85.438-32 12.99-7.5 25.97-15.01 18.47-28-3.048-5.277-7.01-7.175-11.5-7.063zm203.844 0c-4.067.19-7.656 2.19-10.47 7.062-7.498 12.99 5.48 20.5 18.47 28 12.99 7.5 23.23 4.745 85.438 32-54.707-40.245-57.447-50.5-70.438-58-8.12-4.688-16.22-9.378-23-9.063zM195.72 344.75c-8.48.378-14.36 10.508-20.22 20.656-7.5 12.99-4.745 23.23-32 85.438 40.245-54.707 50.5-57.447 58-70.438 7.5-12.99 14.99-25.97 2-33.47-2.842-1.64-5.408-2.292-7.78-2.186zm119.53 0c-2.086.1-4.314.78-6.75 2.188-12.99 7.5-5.5 20.478 2 33.468 7.5 12.99 17.755 15.73 58 70.438-27.255-62.207-24.5-72.447-32-85.438-6.094-10.554-12.21-21.092-21.25-20.656z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSpikesFullIcon);
    