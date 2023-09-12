
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMetroidIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'metroid'];
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
        <path fill="currentColor" d="M256 20.5c-52.087 0-104.93 24.994-147.49 62.064s-75.085 86.41-85.332 137.155c-5.24 25.945.46 54.678 12.97 79.846 12.51 25.17 31.96 47.01 56.092 58.11 14.063 6.468 27.832.477 38.96-4.96 11.13-5.435 21.13-10.503 28.454-10.222 14.224.546 28.674 7.67 44.29 15.53 15.615 7.86 32.46 16.476 52.056 16.476 19.596 0 36.44-8.616 52.057-16.477 15.615-7.86 30.065-14.983 44.29-15.53 7.324-.28 17.323 4.788 28.452 10.224 11.128 5.436 24.897 11.427 38.96 4.96 24.133-11.1 43.58-32.942 56.092-58.11 12.51-25.17 18.21-53.902 12.97-79.848-10.247-50.746-42.77-100.085-85.332-137.156C360.93 45.494 308.087 20.5 256 20.5zm0 18c46.254 0 95.68 22.81 135.668 57.64s70.29 81.49 79.51 127.14c4.203 20.814-.43 46.114-11.444 68.273-11.015 22.16-28.288 40.938-47.494 49.77-5.916 2.722-13.158.292-23.54-4.78-10.384-5.072-22.397-12.6-37.046-12.037-19.482.748-36.166 9.626-51.69 17.44-15.527 7.817-29.83 14.554-43.964 14.554-14.135 0-28.437-6.737-43.963-14.553-15.525-7.815-32.21-16.693-51.69-17.44-14.65-.564-26.663 6.964-37.046 12.036-10.382 5.072-17.624 7.502-23.54 4.78-19.206-8.832-36.48-27.61-47.494-49.77-11.015-22.16-15.647-47.46-11.444-68.272 9.22-45.65 39.522-92.31 79.51-127.14C160.32 61.31 209.746 38.5 256 38.5zm-41.086 24.008c-30.41 10.608-82.5 24.41-150.65 152.054-10.288 19.27 20.285 34.36 24.23 24.23 24.537-62.98 76.895-147.606 126.42-176.284zM256 134.5c-30.482 0-55 24.518-55 55s24.518 55 55 55 55-24.518 55-55-24.518-55-55-55zm71.074 71.568c-6.293 26.936-27.556 48.203-54.49 54.502A48 48 0 0 0 320 301.5a48 48 0 0 0 48-48 48 48 0 0 0-40.926-47.432zm-142.144.016A48 48 0 0 0 144 253.5a48 48 0 0 0 48 48 48 48 0 0 0 47.432-40.926c-26.936-6.293-48.203-27.556-54.502-54.49zm259.295.05c-2.606 48.024-22.094 85.348-49.866 104.298 24.135-5.162 42.654-13.312 51.972-30.905 9.434-17.81 3.27-65.142-2.107-73.392zM161.717 358.167c-20.397.082-41.94 23.884-43.024 44.21-2.05 38.41 28.138 81.903 73.307 89.124-16-48-15.93-79.93 0-96 8.935-9.012-12.753-36.136-28.313-37.268a25.787 25.787 0 0 0-1.97-.066zm188.566 0c-.658-.003-1.316.02-1.97.066-15.56 1.132-37.248 28.256-28.313 37.268 15.93 16.07 16 48 0 96 45.17-7.22 75.357-50.713 73.307-89.125-1.085-20.325-22.627-44.127-43.024-44.21zM226.555 381.99c-11.75.047-24.163 13.762-24.787 25.47-1.18 22.13 16.21 47.187 42.232 51.347-9.218-27.654-9.178-46.05 0-55.307 5.148-5.192-7.346-20.82-16.31-21.47-.378-.028-.756-.04-1.135-.04zm58.89 0a14.55 14.55 0 0 0-1.134.04c-8.964.65-21.458 16.278-16.31 21.47 9.178 9.257 9.218 27.653 0 55.307 26.022-4.16 43.413-29.216 42.232-51.346-.624-11.708-13.036-25.423-24.787-25.47z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMetroidIcon);
    