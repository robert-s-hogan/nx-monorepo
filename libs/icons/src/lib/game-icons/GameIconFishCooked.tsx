
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconFishCookedIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'fish-cooked'];
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
        <path fill="currentColor" d="M208.936 31.055c-3.923.033-7.87.167-11.84.394 2.045 3.68 4.064 6.525 5.312 9.66 1.463 3.827 3.751 5.314 7.842 5.58 11.587.824 22.826 3.348 34.123 7.971-5.925.813-11.323 1.264-16.582 2.354-5.29 1.117-10.447 2.87-16.158 4.437 1.222 3.802 2.309 6.91 3.105 10.045.614 2.379 1.783 2.75 4.15 2.473 6.67-.84 13.393-1.288 20.089-1.926-7.607 4.6-15.58 10.603-18.334 14.031-.985.69-1.996 2.072-1.97 3.162.028 3.136.586 6.337.85 8.875 14.99-6.033 29.474-12.77 44.567-17.713 15.015-4.955 30.614-8.183 46.055-12.156-13.419-16.12-31.305-25.327-51.342-30.96-16.302-4.588-32.869-6.37-49.867-6.227zm146.31 49.86c-22.545-.137-44.897 2.09-66.947 7.298-43.662 10.256-161.096 63.487-172.975 85.064-2.895 5.315 4.705 13.794 10.953 12.397 38.478 8.635 78.845 24.024 111.477 28.01 1.038.12 2.923-1.09 3.455-2.178 3.003-5.635 5.662-11.401 8.611-17.432 4.65 2.231 7.601 19.37 4.65 25.643.239.425.481.811.718 1.236 9.117-.928 18.228-1.9 27.238-2.869-9.726 9.807-21.47 16.9-34.733 21.603-1.355.519-3.164 1.024-3.746 2.086-2.923 5.555-5.5 11.322-8.638 17.807 29.02-5.582 75.659-40.62 80.681-38.508-3.03 5.315-5.658 10.085-8.85 15.758 10.447 3.708 20.302 7.655 30.454 10.738 15.84 4.823 32.05 8.119 48.767 5.315 13.951-2.353 25.964-7.88 31.916-21.817 3.456-7.933 3.213-16.171.85-24.384-3.67 8.146-9.647 13.912-16.742 18.802-13.79 9.435-29.791 6.883-39.598-6.644-8.025-11.042-10.548-24.078-12.912-37.084-2.552-13.94.797-26.588 9.113-37.842 10.473-14.085 25.856-13.966 36.012.238 2.525 3.603 4.25 7.827 6.508 12.106 12.33-24.556 35.58-28.116 47.33-2.139.184-2.3.425-3.867.506-5.463.425-20.861-8.798-36.726-25.51-48.5-19.188-13.485-41.035-18.707-64.076-19.183-1.505-.03-3.009-.05-4.512-.059zm-10.295 9.177l7.735 14.441 14.28-8.047 5.087 9.026-14.46 8.175 7.844 14.606-9.154 4.904-7.703-14.441-14.275 8.01-5.121-8.955 14.496-8.174-7.85-14.678 9.121-4.867zM19.205 95.88c6.62 7.453 12.89 14.24 18.816 21.297 1.992 2.352 3.907 3.68 7.018 4.011 17.907 2.377 38.635 9.214 56.045 17.81-15.866-1.503-31.2-.48-46.137 4.103 2.288 6.764 4.732 13.101 6.514 19.638.796 2.872 1.808 4.08 4.703 4.385 6.324.665 12.568 1.687 18.816 2.564-5.662 4.188-11.535 7.454-17.304 10.95-1.142.691-2.362 2.326-2.416 3.588-.372 9.448-.453 18.92-.64 29.271 7.603-1.09 15.387-2.167 24.37-3.467-7.523 7.496-19.538 13.874-29.043 21.672-2.766 7.228-4.999 14.655-7.842 23.106 31.97-12.16 62.637-24.862 86.499-50.426-2.601-.838-4.57-1.381-6.481-2.113-7.626-2.83-15.786-4.821-22.777-8.81-12.912-7.413-14.747-21.577-5.285-33.124 5.764-7.03 13.284-11.627 21.152-15.785 4.117-2.233 8.314-4.292 13.287-6.883-34.23-31.266-75.34-39.675-119.295-41.787zm246.268 25.734s-2.87 3.922-7.762 8.93c-4.942 4.984-12.008 10.87-19.559 16.053-7.546 5.169-15.625 9.634-22.056 12.412-6.432 2.71-11.162 3.943-11.162 3.943s2.872-3.919 7.787-8.928c4.892-4.983 11.988-10.87 19.56-16.05 7.573-5.13 15.623-9.57 22.055-12.371 6.458-2.726 11.137-3.989 11.137-3.989zm37.841 12.252s-2.762 3.92-7.546 8.93c-4.839 4.981-11.748 10.896-19.133 16.117-7.416 5.13-15.362 9.62-21.686 12.436-6.351 2.74-11 4.013-11 4.013s2.787-3.96 7.545-8.968c4.838-4.984 11.746-10.857 19.135-16.08 7.466-5.168 15.36-9.632 21.71-12.436 6.324-2.75 10.975-4.012 10.975-4.012zm29.13 13.37s-2.369 3.891-6.54 8.9c-4.171 4.983-10.34 10.924-17.035 16.172-6.695 5.22-13.95 9.806-19.77 12.675-5.876 2.844-10.232 4.172-10.232 4.172s2.363-3.907 6.535-8.902c4.171-4.984 10.366-10.896 17.008-16.184 6.723-5.223 13.978-9.738 19.8-12.636 5.873-2.842 10.233-4.198 10.233-4.198zm46.437 20.673c-7.681 0-13.924 6.245-13.924 13.965 0 7.734 6.243 13.977 13.924 13.977h99.932c7.734 0 13.982-6.243 13.982-13.977 0-7.721-6.248-13.965-13.983-13.965h-99.931zm-129.969 109.2c2.524 2.895 4.993 5.791 7.49 8.689 36.25 42.306-26.356 104.717-33.902 114.709-7.384 9.863-12.187 24.573-11.21 38.44-19.017-14.468-17.412-36.484-7.552-58.743-26.177 11.88-44.785 25.408-54.953 57.361-4.015 20.875 48.262 43.387 57.719 43.387 62.8 0 68.322-45.737 72.52-79.514 14.308 12.828 2.488 52.056 20.86 66.026 17.415 13.24 48.634 15.97 65.589 2.324 5.022-4.039 42.094-75.26-12.358-101.568 10.803 28.592-3.217 53.538-34.494 65.148 6.608-18.675 16.343-38.23 12.52-62.851-5.023-28.766-20.522-74.035-46.276-86.102-5.979-2.776-30.108-7.307-35.953-7.307z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconFishCookedIcon);
    