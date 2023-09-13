
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSpaceSuitIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'space-suit'];
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
        <path fill="currentColor" d="M250.375 21.25c-38.192 0-68.97 30.744-68.97 68.938 0 38.193 30.778 68.968 68.97 68.968s68.938-30.775 68.938-68.97c0-38.192-30.746-68.936-68.938-68.936zm-2.625 33.78c.115-.003.23.005.344 0-26.85 53.803 52.427 66.62 40.656 9.032 4.272 1.793 8.76 3.838 13.53 6.157 3.816 15.258 3.55 30.828-2.342 46.093-46.683 11.007-54.054 11.028-98.375-1.594-5.345-14.747-6.03-29.762-2.344-44.5 19.356-9.562 34.072-14.612 48.53-15.19zM345.188 121c-1.26-.03-4.597.75-9.657 4.625-.006.006-.022-.006-.03 0-2.61 2.002-5.202 3.89-7.78 5.688-14.765 27.642-43.906 46.53-77.345 46.53-33.4 0-62.523-18.846-77.313-46.437-3.012-1.64-6.038-3.325-9.093-5.062-4.647-2.642-7.37-2.825-8.657-2.594-1.29.23-2.174.692-3.657 3-2.966 4.616-5.316 16.393-4.656 30.03.66 13.64 3.802 29.176 8.75 42.314 4.948 13.138 11.957 23.675 18.156 27.97 50.81 35.192 99.385 27.478 151.5-.533 6.386-3.43 13.912-13.767 19.125-27.468 5.215-13.7 8.4-30.338 8.94-44.843.538-14.506-2.292-26.98-5.22-31.095-1.464-2.058-1.8-2.096-3.063-2.125zM128.25 144.875c-20.632 9.24-36.958 25.827-49.656 48.594 4.41.183 8.78.842 13 1.968 12.22 3.26 22.512 10.243 30.062 19.375 4.587-5.04 9.565-9.652 14.938-13.844-4.718-13.954-7.597-29.14-8.28-43.282-.214-4.392-.26-8.68-.064-12.813zm242.72 24.25c-1.58 12.405-4.592 25.058-8.97 36.563-2.413 6.342-5.193 12.393-8.5 17.843 3.59 4.06 6.944 8.37 10.03 12.97 2.334-3.646 5.037-7.03 8.064-10.063v-.03c8.18-8.18 18.247-13.41 28.844-15.75-8.07-16.84-17.822-30.79-29.47-41.532zM76.31 212.155c-10.683.044-21.528 4.17-28.312 12.282-7.128 8.523-11.038 22.262-5.188 43.375.136-.093.27-.19.407-.28 8.11-5.473 18.242-8.57 29.186-8.063 3.648.168 7.398.733 11.188 1.75 10.622 2.845 19.157 8.536 25.28 15.717 7.454-9.93 9.21-20.875 7.314-31.156-2.767-14.987-13.905-28.145-29.407-32.28-3.373-.9-6.906-1.358-10.468-1.344zm336.5 15.782c-.71.013-1.413.045-2.125.094-9.48.653-18.78 4.502-25.875 11.595-9.865 9.887-14.718 25.822-9.875 39.063 3.82 10.44 13.742 20.698 34.97 26.187-.015-.177-.05-.354-.063-.53-.91-13.01 3.634-26.97 14.72-38.064l-.002-.03c7.774-7.767 16.973-12.288 26.25-14-4.87-11.43-13.457-18.44-23.312-21.938-4.712-1.67-9.704-2.465-14.688-2.375zm-101.437 25.97c-39.896 16.718-81.177 21.096-121.78 3.312l-10.064 39.31c8.908 2.755 16.417 7.827 22 14.25 7.355 8.462 11.61 18.985 12.876 29.814 25.23-39.572 70.19-24.214 81.906 29.187-30.148 24.312-31.025 78.51 2.47 99.97 13.98-17.626 34.203-29.69 55.312-32.75 3.026-.44 6.09-.66 9.156-.688 1.022-.008 2.042-.006 3.063.032 7.237.266 14.457 1.735 21.312 4.562 5.298-16.073 4.073-34.643-3.188-50.156-7.642 4.648-17.087 7.406-27.843 7.406-16.64 0-30.15-6.565-38.688-16.594C309.37 371.534 305.66 358.6 306 345.938c.34-12.662 4.69-25.31 13.25-35.156 1.444-1.66 3.026-3.222 4.72-4.686l-12.595-52.188zm146.938 16.218c-7.058.166-13.97 2.75-20.563 9.344-7.534 7.533-9.85 15.483-9.28 23.592.566 8.11 4.486 16.41 10.436 22.688 5.95 6.28 13.738 10.374 21.53 11 7.795.626 15.888-1.73 24.377-10.22 8.488-8.488 10.845-16.58 10.218-24.374-.625-7.793-4.72-15.58-11-21.53-6.278-5.95-14.577-9.87-22.686-10.438-1.014-.07-2.023-.087-3.03-.063zM70.156 278c-6.352-.102-11.73 1.835-16.47 5.03-6.738 4.547-11.973 12.083-14.436 20.376-2.463 8.293-2.136 17.063 1.22 24.125 3.353 7.064 9.465 12.925 21.06 16.033 11.597 3.107 19.784 1.064 26.22-3.375 6.436-4.44 11.112-11.868 13.125-20.282 2.013-8.413 1.25-17.568-2.313-24.875-3.563-7.305-9.52-12.99-19.812-15.75-2.573-.688-5.007-1.084-7.313-1.217-.432-.025-.857-.056-1.28-.063zm94.03 34.938c-10.654 0-17.916 3.958-23.25 10.093-5.33 6.137-8.422 14.76-8.655 23.408-.232 8.647 2.37 17.046 7.44 23 5.067 5.953 12.462 10.03 24.468 10.03 12.005 0 19.4-4.077 24.468-10.03 5.068-5.954 7.67-14.353 7.438-23-.233-8.648-3.355-17.27-8.688-23.407-5.333-6.134-12.563-10.092-23.22-10.092zm192.408 0c-10.656 0-17.917 3.958-23.25 10.093-5.333 6.137-8.424 14.76-8.656 23.408-.233 8.647 2.37 17.046 7.437 23 5.068 5.953 12.463 10.03 24.47 10.03 12.004 0 19.4-4.077 24.467-10.03 5.07-5.954 7.67-14.353 7.438-23-.233-8.648-3.355-17.27-8.688-23.407-5.332-6.134-12.563-10.092-23.218-10.092zM121.22 375.656c-15.115 16.632-20.037 41.93-13.75 63.313 5.18-1.573 10.525-2.43 15.874-2.626 1.02-.038 2.04-.04 3.062-.03 3.065.025 6.13.247 9.156.686 22.062 3.2 43.178 16.216 57.188 35.156 34.58-17.894 37.7-67.857 13.75-95.5-1.098 1.69-2.296 3.345-3.625 4.906-8.537 10.03-22.048 16.594-38.688 16.594-16.64 0-30.15-6.565-38.687-16.594-1.59-1.87-3.02-3.855-4.28-5.906zm2.81 79.313c-8.685.26-16.853 2.96-24.124 8.592-7.895 6.116-14.975 16.094-19.72 31.344h104.25c-10.196-20.804-31.273-36.464-51.56-39.406-2.995-.434-5.95-.618-8.845-.53zm239.407 0c-2.192.034-4.41.204-6.656.53-20.287 2.942-41.364 18.602-51.56 39.406h104.25c-4.745-15.25-11.824-25.228-19.72-31.344-7.27-5.63-15.44-8.333-24.125-8.593-.724-.023-1.457-.013-2.188 0z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSpaceSuitIcon);
    