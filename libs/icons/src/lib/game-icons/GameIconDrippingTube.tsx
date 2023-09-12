
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDrippingTubeIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'dripping-tube'];
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
        <path fill="currentColor" d="M276.95 18.752c-17.61.005-29.2 5.172-33.776 13.1-5.232 9.06-2.762 24.25 9.775 42.494 12.536 18.243 34.302 38.05 61.864 53.963 27.562 15.91 55.6 24.856 77.666 26.592 22.068 1.736 36.456-3.72 41.688-12.78 5.23-9.06 2.762-24.25-9.775-42.493-12.538-18.244-34.303-38.05-61.866-53.964-27.562-15.913-55.598-24.858-77.666-26.594-2.757-.217-5.395-.32-7.91-.32zm9.818 21.453c16.105.134 40.723 8.224 65.804 22.705 38.22 22.067 63.046 50.616 55.453 63.768-7.593 13.152-44.732 5.925-82.95-16.14-38.22-22.068-63.047-50.618-55.454-63.77 2.61-4.52 8.71-6.633 17.148-6.563zm-50.784 42.352L79.594 392.385c-10.137 17.762-10.692 36.284-4.504 51.6 6.224 15.41 18.583 27.613 33.222 35.6 14.64 7.99 31.752 11.89 48.39 9.743 16.64-2.145 32.87-10.827 43.554-27.033l.01-.018L388.914 173.33c-6.485-.61-13.232-1.71-20.172-3.29l-32.846 50.308c-.272-.25-.55-.5-.878-.77-3.27-2.697-8.986-5.776-16.44-8.377-14.908-5.2-36.63-8.684-60.63-8.684-23.997 0-45.72 3.484-60.628 8.685-2.427.848-4.65 1.748-6.683 2.667l57.967-114.84c-4.098-4.665-7.81-9.377-11.055-14.097-.542-.788-1.047-1.582-1.566-2.373zM415.03 184.553l-8.794 33.5c-7.48 28.495-19.135 51.737-29.22 71.646-10.085 19.908-19.258 36.267-19.14 53.5.217 31.9 26.61 57.75 58.634 57.505l-.008.002c32.01-.217 58.057-26.384 57.836-58.29-.076-11.126-4-21.653-9.54-32.974-.62-1.593-1.43-3.186-2.41-4.797-2.39-4.645-4.986-9.447-7.656-14.505-10.25-19.42-22.206-42.452-30.453-72.21l-9.25-33.377zm-232.85 46.07c3.385 2.44 8.59 5.096 15.14 7.38 14.908 5.202 36.63 8.685 60.63 8.685 23.998 0 45.72-3.483 60.628-8.684 2.914-1.017 5.552-2.107 7.893-3.22l-16.365 25.068c-15.16 3.556-32.977 5.53-52.156 5.53-25.762 0-49.088-3.553-66.788-9.728-6.642-2.317-12.488-4.99-17.47-8.215l8.488-16.817zm233.242 19.498c.32.83.65 1.62.973 2.437-1.073 34.75-13.116 59.906-8.944 75.015 4.384 15.93 20.963 25.358 36.974 20.852 4.253-1.17 8.036-3.197 11.226-5.83.126 21.712-17.307 39.275-39.275 39.424h-.007c-21.97.167-39.654-17.217-39.8-38.944v-.002c-.067-9.577 7.017-24.98 17.12-44.927 6.888-13.598 14.798-29.615 21.735-48.024zm-191.04 29.74c9.492 0 17.186 7.697 17.186 17.19 0 9.49-7.694 17.184-17.185 17.184-9.49 0-17.186-7.694-17.186-17.185 0-9.493 7.695-17.19 17.186-17.19zm-54.35 13.44c12.148 0 21.997 9.85 21.997 22s-9.85 21.997-22 21.997c-12.147 0-21.997-9.848-21.997-21.996 0-12.15 9.85-22 21.998-22zm22.007 57.81c13.287 0 24.058 10.775 24.058 24.064 0 13.287-10.77 24.058-24.06 24.058-13.286 0-24.06-10.77-24.06-24.058 0-13.29 10.774-24.063 24.06-24.063z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconDrippingTubeIcon);
    