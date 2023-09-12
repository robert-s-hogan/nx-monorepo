
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHydraIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'hydra'];
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
        <path fill="currentColor" d="M345.594 20.28c-11.443.087-23.37 1.194-36.094 3.845 33.485 7.004 54.532 21.844 65.844 39.22-15.476-2.647-30.64-4.472-45.47-5.532L311 40.374l-19.28 16.438c-7.537.167-14.98.55-22.314 1.156L239.97 41.78l-14.907 22.814c-8.1 1.775-16.05 3.846-23.844 6.22l-29.47-14.97-11.313 30.75c-8.783 4.197-17.31 8.868-25.593 13.937l-32.688-5.31-.47 29.03c-6.313 5.248-12.44 10.808-18.374 16.656H48l3.563 36.656c-4.38 5.908-8.603 12.045-12.688 18.375L18.47 192.25v39.5c-.012.02-.022.042-.032.063V493.28h18.5c23.523-92.965 94.565-130.4 168.968-85.25 42.127 25.566 93.783 62.296 149.063 41.158-.9 7.955-3.276 15.623-6.908 22.562l95.344 19.188c2.99-7.75 5.584-15.712 7.625-23.563-3.557 2.29-10.352 4.79-19.78 3.313-41.302-6.47-33.15-54.034-.53-58.407 10.915-1.456 21.15 3.22 27.56 11.25l18.283-38.874c-68.1 6.078-129.61-30.834-197.47-16.687 35.468 7.415 56.983 23.64 67.75 42.342-7.332.564-14.425.598-21.28.157l-10.813-10.25-13.625 6.436c-5.98-1.52-11.737-3.448-17.313-5.75l-7.718-15.47-10.906 5.97c-7.152-4.38-13.924-9.414-20.344-15.062l-1.813-26.75-19.436 5.03c-7.508-7.63-15.15-13.68-22.875-18.343l-1.282-19.75-23.875 9.408c-11.712-2.7-23.455-2.622-35.063-.25 44.223-90.392 134.06-92.4 180.813-64.563-5.227 5.68-11.388 10.355-18.125 13.78l66.562 70.908c6.928-4.58 13.63-9.564 19.844-14.782-4.228-.204-14.15-5.01-17.47-8.06-34.53-31.74 7.1-63.854 32.876-48.626 9.484 5.603 15.366 14.898 15.938 25.156l34.75-23.875c-59.015-34.522-85.098-97.445-148.594-125.25 23.092 24.968 31.707 49.115 30.97 69.75-8.93-6.752-18.606-12.1-28.845-16.188l-13.845-21.25-18.188 12.75c-5.18-.755-10.455-1.246-15.78-1.5l-19.094-18.093-15.25 19.687c-7.918 1.068-15.884 2.592-23.844 4.564l-15.75-13-9.75 20.812c-6.988 2.552-13.936 5.42-20.782 8.594l-23.594-8.28-8.625 25.874c-12.263 7.768-23.966 16.49-34.876 26.062C124.307 122.443 296.518 88.99 384.938 108.562c-1.12 6.798-3.333 13.35-6.47 19.344l95.344 19.188c2.99-7.75 5.585-15.71 7.625-23.563-3.558 2.29-7.502 5.33-11.968 4.72-46.308-6.31-43.81-54.725-8.345-59.813 10.903-1.57 21.15 3.193 27.563 11.22 1-10.184 1.808-35.654 2.187-45.907-55.332 4.938-95.695-13.84-145.28-13.47z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHydraIcon);
    