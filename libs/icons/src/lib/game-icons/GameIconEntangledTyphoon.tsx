
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconEntangledTyphoonIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'entangled-typhoon'];
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
        <path fill="currentColor" d="M277.38 21.66c-96.948-.878-173.34 86.818-197.982 179.76 0 .002 0 .004-.002.006-6.326 18.67-9.757 38.666-9.757 59.455 0 2.836.074 5.654.2 8.458-17.562-55.274-17.086-137.757 20.086-206.48C2.272 126.67-9.832 299.917 100.182 398.58c-22.78-2.325-46.352-9.837-70.147-24.225 78.56 96.676 160.54 101.437 227.393 91.487-23.15 12.557-50.73 19.886-83.272 19.228 92.947 37.552 157.73-7.642 194.62-60.908-3.368 19.416-10.61 39.33-22.75 59.406 75.302-61.19 94.838-124.455 95.097-181.033 5.027 52.445-7.262 120.805-55.344 191.85 137.474-80.25 141.267-308.97-44.49-397.783-1.718-.905-3.454-1.778-5.204-2.63 34.773-.313 70.898 10.356 105.168 38.25-54.364-94.094-142.49-91.19-206.094-66.456 26.697-20.213 60.655-32.96 103.078-32.102-20.95-8.053-41.322-11.827-60.86-12.004zm-20.292 72.42c27.385.31 53.167 7.19 75.85 19.15 11.03 34.65 10.764 85.084-35.82 110.73 57.38-8.063 68.747-56.41 65.92-90.386 31.604 26.8 53.065 65.168 57.894 108.617-11.442-11.052-27.03-18.682-47.832-18.995-4.228-.063-8.67.175-13.336.748 56.35 13.146 58.046 52.722 56.037 82.108-5.366 19.175-14.072 36.942-25.445 52.647 3.265-39.063-5.52-70.67-25.205-91.312-25.207-26.433-66.802-31.98-114.732-13.826-43.58 16.5-75.458 10.803-94.588-9.257-18.553-19.456-26.513-55.153-15.96-104.09 21.894-20.92 49.49-35.916 80.237-42.47 25.205 5.698 46.725 24.76 53.276 49.736 7.63 29.088-7.855 62.162-37.375 69.75-21.748 5.59-46.478-6.097-52.008-28.185-3.99-15.936 4.575-33.99 20.47-37.873 2.803-.685 5.7-.813 8.51-.447-2.895 3.556-4.636 8.09-4.636 13.033 0 11.41 9.25 20.662 20.662 20.662 11.41 0 20.664-9.25 20.664-20.662 0-5.404-2.092-10.308-5.488-13.99-9.197-14.293-27.572-20.797-44.147-16.748-26.926 6.576-40.487 35.292-34.16 60.564 8.268 33.023 43.65 49.744 74.785 41.742 40.45-10.398 60.882-54.14 50.797-92.59-5.31-20.24-17.91-37.11-34.37-48.656zm-140.086 73.168c-2.947 38.434 5.85 69.552 25.305 89.953 25.207 26.434 66.8 31.985 114.73 13.835h.002c43.58-16.508 75.457-10.814 94.587 9.246 18.525 19.428 26.487 55.05 16.002 103.878-22.39 20.436-50.385 34.833-81.43 40.66l.038-.205c-23.698-4.616-44.6-20.994-53.21-43.424-10.99-28.622 1.01-63.88 30.083-74.895 21.448-8.124 47.847.96 55.943 22.767 5.85 15.76-.836 35.1-16.582 40.848-3.484 1.272-7.217 1.67-10.818 1.28 3.006-3.587 4.82-8.207 4.82-13.254 0-11.412-9.252-20.665-20.663-20.665-11.413 0-20.664 9.254-20.664 20.666 0 3.68.973 7.13 2.66 10.123 9.034 19.034 32.092 26.332 51.073 19.403v-.002c26.41-9.642 36.89-40.114 27.69-64.9-9.013-24.28-32.39-37.62-56.384-37.894-8-.092-16.066 1.267-23.694 4.156-39.625 15.01-55.365 61.408-40.908 99.065 6.25 16.277 17.272 29.828 31.018 39.603-28.09-1.413-54.325-9.757-77.05-23.347-8.506-34.05-5.113-79.09 38.048-102.854-52.583 7.39-66.514 48.602-66.303 81.59-28.446-26.552-47.57-62.952-51.986-103.816 13.757 13.168 33.46 21.397 60.93 18.024-54.79-12.782-57.916-50.575-56.2-79.67 4.867-18.134 12.7-35.044 22.962-50.17z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconEntangledTyphoonIcon);
    