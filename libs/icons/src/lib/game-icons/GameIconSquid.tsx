
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSquidIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'squid'];
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
        <path fill="currentColor" d="M164.938 17.75c-36.9 0-67.808 13.327-87.25 35.72-19.443 22.39-26.84 53.717-18.094 86.936 12.483 47.41 52.983 87.193 101.97 106.094-25.22 53.827-58.776 79.275-98.19 92.5-14.152 4.75-29.16 7.51-44.968 9.344v39.72c19.494-2.063 38.53-5.417 57.22-11.69 30.89-10.366 60.143-28.824 84.686-56.655C147.02 347.054 128.52 366.127 106 381.06c-24.47 16.228-54.913 26.55-87.594 35.032v41.47c38.716-9.353 76.84-21.375 109.78-43.22 26.63-17.657 49.378-41.933 65.44-74.188-5.82 28.94-18.692 51.403-36.22 71.25C127.1 445.72 81.19 470.908 31.844 495.5h81.187c27.27-16.283 53.196-34.642 74.157-58.375 21.367-24.192 36.472-54.302 43.813-89.938 2.06 29.717-3.918 55.56-15.78 79.407-12.01 24.142-30.68 46.758-51.97 68.906h53.156c13.015-15.78 24.68-32.362 33.844-50.78 14.697-29.544 22.452-63.005 19.875-100.47 10.333 29.14 11.232 56.334 5.844 82.938-4.6 22.708-14.103 45.424-26.283 68.312h43.782c9.15-19.343 16.782-39.746 21.03-60.72 6.61-32.635 4.795-67.342-8.156-103.374 18.333 25.69 25.718 52.313 27.437 80 1.65 26.562-3.43 54.81-11.092 84.094h40.875c6.458-28.407 9.99-57.38 8.187-86.406-1.99-32.092-12.224-64.124-32.125-94.625 22.522 19.726 36.464 41.804 44.97 67.155 11.287 33.638 13.1 72.467 11.686 113.875h39.126c1.56-42.954.168-85.584-13.437-126.125-10.368-30.892-28.826-60.144-56.658-84.688 28.04 13.043 47.46 32.228 62.5 54.907 26.903 40.57 38.726 96.28 50.22 154.156.12.602.475 1.148.593 1.75h14.594V391.562c-8.194-26.055-18.84-50.918-33.876-73.593-28.706-43.29-74.346-76.243-144.25-88.19l-10.344-.968c2.067-1.973 4.045-4.043 5.906-6.187 19.443-22.392 26.84-53.75 18.094-86.97C311.256 69.218 238.735 17.75 164.937 17.75zM291.53 157.938c.846-.052 1.684-.003 2.5.125 4.36.682 8.38 3.794 11.408 9.906 3.028 6.11 4.5 14.89 3.03 24.28-1.47 9.39-5.56 17.295-10.312 22.188-4.752 4.892-9.548 6.62-13.906 5.937-4.358-.682-8.377-3.795-11.406-9.906-3.03-6.113-4.502-14.893-3.03-24.282 1.47-9.39 5.56-17.295 10.31-22.188 3.565-3.67 7.155-5.54 10.563-5.97.284-.035.563-.075.844-.093zm-101.06 10.5c17.527 0 31.53 14.002 31.53 31.53 0 17.53-14.003 31.532-31.53 31.532-17.53 0-31.564-14.003-31.564-31.53 0-17.53 14.034-31.532 31.563-31.532z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSquidIcon);
    