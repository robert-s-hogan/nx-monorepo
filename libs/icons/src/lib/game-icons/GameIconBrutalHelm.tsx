
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBrutalHelmIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'brutal-helm'];
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
        <path fill="currentColor" d="M256 34.162c-.135.22-.175.203-.314.447-1.975 3.46-4.37 9.255-6.72 16.347-4.703 14.183-9.438 33.67-13.575 53.223-4.137 19.553-7.708 39.222-10.238 54.084-1.264 7.43-2.27 13.66-2.957 18.07-.343 2.204-.606 3.957-.78 5.158-.07.47-.112.778-.15 1.065.095 1.402 1.882 4.45 8.008 7.433 6.302 3.07 15.98 5.293 26.727 5.293 10.748 0 20.425-2.223 26.727-5.293 6.126-2.984 7.913-6.03 8.01-7.433l-.15-1.065c-.176-1.2-.44-2.954-.782-5.158-.687-4.41-1.693-10.64-2.957-18.07-2.53-14.862-6.1-34.53-10.24-54.084-4.136-19.554-8.87-39.04-13.573-53.223-2.35-7.092-4.746-12.886-6.72-16.348-.14-.245-.18-.23-.315-.448zM87.066 53.222c-39.793 29.842-65.173 69.95-65.173 114.284 0 30.934 11.92 59.887 32.646 84.695l27.13-78.23c-11.335-17.452-17.668-36.89-17.668-57.384 0-22.984 8.953-44.332 23.064-63.363zm337.883.016c14.094 19.032 23.064 40.38 23.064 63.364 0 20.493-6.333 39.928-17.664 57.377l27.123 78.208c20.718-24.805 32.634-53.753 32.634-84.682 0-44.333-25.38-84.443-65.158-114.268zM214.26 129.043c-36.194 9.176-61.82 31.89-80.563 70.234-24.892 50.927-35.985 130.406-36.304 239.645 43.728 24.578 91.336 38.24 139.99 40.765-.34-38.18-6.926-98.547-11.704-137.69-66.903-5.935-95.838-29.493-95.838-29.493s3.777-27.682 6.396-39.936c38.412 12.937 78.856 19.46 119.776 19.22 40.904.223 81.347-6.283 119.76-19.22 2.618 12.254 6.398 39.936 6.398 39.936s-27.968 24-95.875 29.648c-4.778 39.148-11.345 99.41-11.687 137.536 48.655-2.526 96.263-16.188 139.99-40.766-.318-109.24-11.41-188.718-36.302-239.645-18.74-38.345-44.368-61.058-80.562-70.234 1.763 9.38 3.32 18.147 4.617 25.748.345.185.697.36 1.036.55 12.55 6.98 21.67 17.51 23.542 30.355l6.01 41.295-.815 1.998c-5.284 12.98-18.74 20.31-33.104 25.653-14.363 5.344-30.252 8.233-42.947 8.356h-.158c-12.69-.13-28.578-3.02-42.94-8.36-14.365-5.342-27.82-12.666-33.105-25.648l-.814-1.998 6.008-41.295c1.87-12.844 10.99-23.374 23.54-30.355.34-.19.692-.365 1.037-.55 1.297-7.6 2.854-16.367 4.617-25.747zm-112.41 35.178l-41.44 119.49 29.695 13.71c6.08-42.11 15.602-77.018 29.332-105.11 3.33-6.817 6.94-13.21 10.814-19.2l-28.402-8.89zm308.312 0l-28.416 8.895c3.874 5.986 7.482 12.38 10.813 19.194 13.732 28.093 23.256 63.002 29.335 105.116l29.71-13.717-41.44-119.49zm-208.066 19.147c-.652 1.524-1.097 3.067-1.323 4.615l-5.287 36.332c2.948 4.908 11.57 11.185 23.02 15.442 12.417 4.617 27.205 7.245 37.496 7.363 10.286-.112 25.07-2.738 37.486-7.356 11.45-4.26 20.074-10.54 23.022-15.45l-5.287-36.332c-.226-1.548-.67-3.09-1.323-4.615-1.095.378-2.223.747-3.37 1.112-.98 9.068-8.33 15.628-16.854 19.78-9.16 4.462-20.84 6.896-33.678 6.896-12.84 0-24.52-2.434-33.678-6.896-8.523-4.152-15.873-10.712-16.853-19.78-1.15-.366-2.277-.735-3.372-1.113z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBrutalHelmIcon);
    