
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconElephantHeadIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'elephant-head'];
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
        <path fill="currentColor" d="M137.057 36.698c-2.614 0-5.23.162-7.827.52-25.68 3.542-67.16 25.9-97.54 52.824 10.785-5.202 24.81-11.394 39.464-16.28 13.623-4.54 27.76-8.077 41.006-8.306 1.893-.033 3.767.002 5.62.11 7.407.437 14.596 2.11 20.863 5.99 1.865 1.154 3.62 2.523 5.234 4.074 6.646-10.978 14.16-22.022 23.152-33.076-7.964-2.88-17.548-5.41-27.362-5.803-.87-.034-1.74-.052-2.61-.052zm237.886 0c-.87 0-1.742.018-2.61.053-9.815.395-19.4 2.925-27.362 5.804 8.993 11.054 16.507 22.098 23.153 33.076 1.615-1.55 3.37-2.92 5.234-4.074 6.267-3.88 13.456-5.553 20.864-5.99 1.853-.108 3.727-.143 5.62-.11 13.246.23 27.383 3.766 41.006 8.307 14.655 4.885 28.68 11.077 39.465 16.28-30.38-26.925-71.86-49.283-97.54-52.825-2.596-.358-5.213-.52-7.827-.52zm-179.45 1.02c-28.343 29.284-43.33 58.435-58.462 88.687.01 8.366.11 22.473 1.9 36.78 1.905 15.244 6.6 29.882 11.412 34.722l24.36 22.395H185v58.437l17.742 8.87 3.963-11.888-7.53-37.655 17.65-3.53 15.415 77.077c5.957 4.855 14.755 7.688 23.76 7.688s17.803-2.833 23.76-7.688l15.414-77.078 17.652 3.53-7.53 37.656 3.962 11.888L327 278.74V220.3h12.273l22.364-22.364c4.818-4.818 9.525-19.486 11.433-34.753 1.79-14.307 1.89-28.414 1.9-36.78-15.11-30.204-30.076-59.31-58.33-88.55-44.585 6.62-77.05 5.087-121.148-.137zm16.532 30.533c29.854 14.928 58.096 14.928 87.95 0l8.05 16.103c-34.146 17.073-69.904 17.073-104.05 0l8.05-16.102zM114.67 83.463c-10.478-.157-24.295 2.87-37.824 7.38-20.06 6.686-39.25 16.184-49.223 21.42.863 2.71 1.833 5.585 2.973 8.682C36.2 136.18 44.9 155.478 54.386 174.24c9.488 18.764 19.8 37.067 28.524 50.38 4.362 6.657 8.365 12.083 11.387 15.483.827.93 1.26 1.252 1.887 1.843 21.254-11.455 29.27-22.205 38.695-34.36-8.99-11.137-11.9-26.9-13.81-42.167C118.98 148.685 119 132.3 119 124.3v-2.125l.95-1.9c4.604-9.21 9.277-18.53 14.362-27.915-1.285-2.52-2.94-4.14-5.142-5.502-2.92-1.808-7.107-3.01-12.45-3.324-.667-.04-1.352-.064-2.05-.074zm282.66 0c-.698.01-1.383.035-2.05.074-5.343.314-9.53 1.516-12.45 3.324-2.2 1.363-3.857 2.982-5.142 5.502 5.085 9.386 9.758 18.704 14.363 27.914l.95 1.9v2.126c0 8 .02 24.384-2.07 41.117-1.91 15.266-4.82 31.03-13.81 42.167 9.425 12.154 17.442 22.904 38.696 34.36.626-.592 1.06-.914 1.887-1.844 3.022-3.4 7.025-8.826 11.387-15.483 8.723-13.313 19.036-31.616 28.523-50.38 9.488-18.762 18.186-38.06 23.79-53.296 1.14-3.097 2.11-5.973 2.974-8.683-9.974-5.234-29.162-14.732-49.223-21.42-13.53-4.51-27.346-7.535-37.824-7.378zm-203.68 54.695c3.49.06 6.937.312 10.287.727 8.934 1.105 17.267 3.408 24.286 6.838 7.02 3.43 13.198 7.86 16.138 15.252l-9.405 3.744c.567 5.67 1.005 11.785 1.188 17.922.375 12.586.037 24.885-3.723 34.84l-16.84-6.358c1.873-4.96 2.914-16.396 2.57-27.947-.237-7.954-.968-16.098-1.824-22.973-4.19-1.547-9.244-2.793-14.6-3.455-14.394-1.78-30.602.868-40.052 8.54l-11.348-13.972c11.352-9.216 25.78-12.845 39.824-13.15 1.17-.025 2.337-.027 3.5-.008zm124.7 0c1.163-.02 2.33-.017 3.5.008 14.043.305 28.472 3.934 39.824 13.15l-11.348 13.973c-9.45-7.673-25.658-10.32-40.053-8.54-5.355.662-10.41 1.907-14.6 3.454-.855 6.875-1.586 15.02-1.823 22.973-.345 11.55.697 22.987 2.57 27.947l-16.84 6.36c-3.76-9.957-4.098-22.255-3.723-34.842.183-6.137.62-12.25 1.188-17.922l-9.406-3.744c2.94-7.39 9.118-11.822 16.137-15.252 7.02-3.43 15.352-5.733 24.285-6.838 3.35-.414 6.8-.668 10.288-.727zm-140.582 27.32c9.89 1.982 19.044 2.465 27.94.122l4.585 17.405c-12.44 3.277-24.618 2.413-36.06.12l3.535-17.647zm156.464 0l3.536 17.65c-11.443 2.29-23.622 3.155-36.06-.122l4.585-17.406c8.895 2.342 18.05 1.86 27.94-.122zM149.484 221.57c-3.926 18.077-11.744 56.325-12.488 79.027-.338 10.32.083 22.752.97 36.025 9.928-15.62 19.44-33.406 29.034-54.307V237.67l-17.516-16.1zm210.11 3.865L345 240.028v42.285c9.74 21.218 19.397 39.22 29.49 55.01.838-13.487 1.126-26.103.526-36.502-1.178-20.39-9.878-54.958-15.422-75.385zM180.12 296.427c-27.3 57.515-55.76 93.404-93.753 125.43 25.12.802 41.352-8.37 56.606-25.72 17.816-20.268 33.22-52.94 52.918-91.825l-15.77-7.885zm151.76 0l-15.77 7.885c19.696 38.886 35.1 71.557 52.917 91.824 15.254 17.352 31.487 26.523 56.606 25.72-37.994-32.025-66.454-67.914-93.754-125.43zm-118.06 14.87l-.564 1.696-1.266-.633c-19.548 38.716-34.844 72.163-55.5 95.66-3.083 3.508-6.326 6.758-9.728 9.75 2.473 17.93 4.636 31.68 5.355 36.155 17.846 7.732 41.202 10.51 62.938 8.283-.035-.626-.055-1.26-.055-1.906v-143.11l-1.18-5.894zm84.36 0l-1.18 5.895v143.11c0 .645-.02 1.28-.055 1.906 21.757 2.23 45.136-.556 62.99-8.305.75-4.39 3.04-18.03 5.626-35.853-3.52-3.068-6.87-6.412-10.05-10.03-20.656-23.497-35.952-56.944-55.5-95.66l-1.266.633-.564-1.695zM233 332.854v11.363c5.93 4.487 14.373 7.086 23 7.086s17.07-2.6 23-7.086v-11.363c-7.23 3.03-15.153 4.45-23 4.45-7.847 0-15.77-1.42-23-4.45zm0 32v11.363c5.93 4.487 14.373 7.086 23 7.086s17.07-2.6 23-7.086v-11.363c-7.23 3.03-15.153 4.45-23 4.45-7.847 0-15.77-1.42-23-4.45zm0 32v63.45c0 20 46 20 46 0v-63.45c-7.23 3.03-15.153 4.45-23 4.45-7.847 0-15.77-1.42-23-4.45z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconElephantHeadIcon);
    