
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconGreekSphinxIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'greek-sphinx'];
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
        <path fill="currentColor" d="M157.918 18.367c-8.917-.064-17.212 1.962-23.543 5.051-11.24 5.484-20.096 11.911-27.113 18.904 3.28 11.769 7.948 22.497 15.144 31.326-10.145-5.655-18.612-12.094-25.033-19.488-4.668 6.765-8.07 13.823-10.611 20.9 3.235 19.179 8.356 36.941 19.283 50.348-10.477-5.84-19.16-12.516-25.652-20.217-.925 10.6-.609 19.891-.532 26.448.043 3.638.266 7.166.657 10.6 13.981 18.246 29.227 33.875 48.068 42.052-13.02-.402-24.89-2.3-35.387-5.977 6.518 10.102 15.463 19.273 26.96 27.864 26.948 20.14 68.23 36.175 122.849 48.974 25.607 6.001 62.512 14.174 96.15 19.383 16.82 2.605 32.834 4.46 46.012 4.963 13.178.503 23.742-.74 27.96-2.508.214-.09 6.042-4.039 10.415-10.119 4.373-6.08 8.208-14.314 8.96-24.107 1.506-19.587-8.547-47.553-58.954-80.69-6.05-3.977-11.59-5.844-20.84-6.174-9.219 15.595-19.034 30.693-28.297 45.143l-5.432 8.473-41.582-33.73 5.791-7.003a479.224 479.224 0 0 0 5.575-6.877c-12.556 1.595-26.407 3.35-43.301 5.332-27.381 3.214-56.9-14.159-69.715-39.236-6.407-12.539-8.059-27.902-1.223-42.219 5.95-12.46 17.68-23.617 35.952-32.928-10.185-18.466-23.17-27.73-36.127-31.888-5.51-1.768-11.084-2.561-16.434-2.6zm234.78 27.121a53.41 53.41 0 0 0-1.981.057c-3.59.167-7.549.7-11.944 1.691-16.172 3.649-22.844 12.548-27.14 24.17-1.48 4.001-2.49 8.283-3.244 12.608l9.498-3.871c20.375-10.896 43.214-18.666 65.457-21.428-2.403-2.547-5.175-5.035-8.551-7.164-5.503-3.471-12.384-6.154-22.096-6.063zm41.318 30.371c-15.807 1.023-32.982 5.348-49.346 11.899-5.445 17.47-13.343 34.595-22.354 51.226 7.947 1.3 14.748 3.858 21.123 8.05a290.222 290.222 0 0 1 5.284 3.56l8.006-16.989 7.494 2.362c8.542 2.69 14.213 2.383 16.011 1.299 5.7-3.437 12.507-17.943 14.498-33.657.996-7.856 1.05-15.843.268-22.345a46.616 46.616 0 0 0-.984-5.405zm-72.233 22.133l-17.156 6.992c-11.334 25.387-24.555 46.229-41.961 68.118l11.998 9.732c17.575-27.43 35.58-56.2 47.12-84.842zM116.02 225.31c16.018 18.444 35.768 36.085 59.335 52.093 9.136-5.101 18.304-9.864 27.233-14.261-35.12-10.33-64.06-22.591-86.568-37.832zm113.646 45.138c-21.982 10.011-47.187 22.765-69.982 37.475 8.338 2.179 16.164 5.88 23.263 10.396 12.355 7.862 19.613 19.266 21.744 31.475 2.132 12.208-.286 24.851-4.832 37.305-2.42 6.633-5.485 13.26-8.947 19.79 51.623-25.596 99.141-54.305 145.688-83.656a1091.52 1091.52 0 0 1-3.516-31.437c-33.534-5.344-69.2-13.262-94.184-19.117a777.507 777.507 0 0 1-9.234-2.23zm121.838 24.032c6.847 68.199 19.675 133.82 36.01 200h71.193l-10.27-24.11c-.303-.574-8.443-7.54-30.308-5.943l-9.22.672-7.704-167.65c-5.145.312-10.711.266-16.72.036-10.056-.383-21.24-1.471-32.981-3.005zM143.2 323.73c-3.497.07-7.066.58-10.728 1.594-14.65 4.053-32.056 16.904-51.194 46.156-13.494 20.627-29.615 50.071-36.076 74.899-3.23 12.414-3.902 23.516-1.71 31.34 1.715 6.126 4.725 10.48 10.685 13.705 2.625-6.57 5.954-14.105 10.744-21.11C71.47 460.74 81.53 451.817 95.6 449.97c9.753-1.282 19.206-1.72 28.38-1.559 5.416.095 10.733.403 15.96.863a70.175 70.175 0 0 0 3.384-3.974c14.898-18.974 31.876-43.138 39.627-64.373 3.876-10.618 5.356-20.318 4.008-28.037-1.348-7.72-4.947-13.829-13.676-19.383-9.745-6.201-19.589-9.982-30.082-9.776zM120.54 466.395c-7.39-.016-14.91.41-22.594 1.42-8.01 1.052-13.33 5.588-18.166 12.66-2.458 3.595-4.575 7.753-6.478 12.015l165.947.297c-.742-1.223-1.707-2.334-3.389-3.562-4.65-3.398-16.413-7.698-39.644-12.264-23.574-4.633-47.304-10.058-72.516-10.533-1.05-.02-2.104-.031-3.16-.033z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconGreekSphinxIcon);
    