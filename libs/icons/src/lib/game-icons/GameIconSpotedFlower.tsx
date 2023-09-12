
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSpotedFlowerIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'spoted-flower'];
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
        <path fill="currentColor" d="M318.443 20.05c-35.054 22.62-70.676 44.575-94.494 80.305 1.84 20.152 6.3 40.378 12.26 60.776 6.78-1.562 13.837-2.39 21.083-2.39 4.996 0 9.902.397 14.69 1.153l13.074-57.754 18.228 4.124-13.217 58.386c10.45 3.907 20.03 9.623 28.348 16.768 12.973-13.382 26.736-26.55 41.686-39.248-2.47-44.513-18.73-84.426-41.66-122.12zM95.105 82.93c-4.194.03-8.39.143-12.584.334-.026 41.063 4.614 82.128 23.6 123.193l.28-.514c19.433 10.594 39.135 19.157 59.184 26.327 3.215-14.427 9.76-27.616 18.78-38.717l-42.315-41.37 13.063-13.365 42.407 41.46c6.24-5.16 13.158-9.53 20.593-12.958-5.698-20.025-10.117-40.194-12.314-60.607-36.898-17.73-73.796-24.04-110.695-23.783zm283.684 67.988c-17.12 14.04-32.698 28.9-47.347 44.168 6.66 8.55 11.874 18.276 15.278 28.807l58.425-17.47 5.353 17.903-59.838 17.893c.384 3.44.588 6.933.588 10.473 0 7.553-.904 14.9-2.598 21.942 20.105 3.92 40.636 8.17 61.682 13.217 34.68-21.748 61.017-54.22 80.818-95.096-37.012-23.792-73.78-39.46-112.36-41.838zM257.292 177.43c-8.303 0-16.275 1.352-23.734 3.816 2.61 1.022 5.216 2.703 7.706 5.172 19.073 18.918-9.468 46.314-27.246 27.242-5.5-5.898-6.807-12.563-5.436-18.398-16.255 13.787-26.555 34.364-26.555 57.43 0 14.676 4.178 28.338 11.392 39.894 1.525-2.995 3.973-5.486 6.928-6.988-5.333-3.38-9.084-9.344-8.786-17.84.756-21.57 25.068-26.888 35.903-14.74 1.74-7.702 8.115-14.288 19.342-14.366 26.86-.108 26.052 39.445-.005 38.53-6.296-.22-11.103-2.585-14.416-6.03-1.207 9.77-7.803 15.438-15.357 17.16.285.254.57.495.852.774 1.625 1.612 2.786 3.302 3.592 5.016 6.702-4.404 16.014-4.67 24.1 3.353 10.266 10.18 6.732 22.806-1.485 29.334 4.287.753 8.693 1.17 13.2 1.17 9.2 0 18-1.642 26.138-4.64-2.956-.954-5.867-2.77-8.535-5.632-10.233-10.977-5.966-24.597 3.126-30.584-3.73-16.403 9.658-32.33 25.472-32.07 6.19.1 12.747 2.68 18.795 8.68 3.455 3.428 5.753 7.06 7.088 10.72 2.06-6.88 3.182-14.175 3.182-21.74 0-41.678-33.587-75.264-75.264-75.264zm28.102 29.07c6.05-.037 12.075 3.525 14.334 11.822 5.558 20.425-24.708 27.875-29.326 7.858-2.742-11.885 6.15-19.626 14.99-19.68zm-184.34 17.77c-37.99 26.268-59.572 60.742-81.746 94.916 39.83 22.372 80.09 42.608 124.49 42.148 17.774-11.946 33.903-25.542 49.163-40.25-7.878-7.415-14.482-16.168-19.44-25.895l-48.61 14.535-5.354-17.907 47.17-14.105c-2.207-7.97-3.392-16.36-3.392-25.02 0-.444.01-.886.017-1.33-20.98-7.342-41.727-16.142-62.3-27.093zm241.3 68.275c-3.076 6.535-6.88 12.664-11.314 18.275l45.77 44.746-13.064 13.364-45.682-44.662c-6.43 5.468-13.6 10.09-21.337 13.685 5.73 22.515 9.804 45.504 11.037 69.084 37.863 18.185 78.275 23.618 120.172 21.64 1.908-43.788-3.597-85.35-22.723-122.827-21.327-5.084-42.254-9.35-62.858-13.305zm-134.2 40.184c-17.268 16.675-35.79 32.2-56.594 45.872 4.976 37.762 20.818 75.525 40.456 113.29 37.09-24.788 71.163-51.988 96.96-85.812-1.287-20.848-5.088-41.435-10.388-61.87-6.845 1.595-13.974 2.44-21.295 2.44-2.812 0-5.594-.13-8.344-.375l-13.75 60.73-18.225-4.126 13.607-60.11c-7.966-2.368-15.493-5.766-22.428-10.04z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSpotedFlowerIcon);
    