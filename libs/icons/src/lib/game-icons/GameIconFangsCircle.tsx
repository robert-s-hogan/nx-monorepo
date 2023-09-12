
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconFangsCircleIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'fangs-circle'];
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
        <path fill="currentColor" d="M263.064 21.654c-61.945 0-108.823 19.19-147.69 50.873h-.11l.013.08C96.2 88.174 79.044 106.733 63.002 127.54c13.466-7.973 28.174-14.91 43.81-20.82-32.252 37.934-51.837 87.843-51.837 142.4 0 64.49 27.35 122.493 70.656 161.89-22.716-7.12-43.878-16.202-62.628-27.307 48.742 63.224 107.65 105.89 200.062 105.89 90.676 0 154.59-42.808 201.206-105.89-21.023 12.138-45.283 21.964-71.5 29.434 44.684-39.42 73.048-98.352 73.048-164.016 0-55.86-20.528-106.848-54.164-145.1 19.013 6.514 36.74 14.356 52.616 23.52-15.24-20.623-32.332-39.077-51.6-54.58l.074-.43h-.61c-39.575-31.657-88.313-50.876-149.07-50.876zm1.36 59.024c4.486.02 8.973.103 13.453.24l23.566 77.29L323.94 84.41c7.248.882 14.437 1.916 21.546 3.108l32.325 185.517 26.034-149.414c27.012 33.946 43.283 77.666 43.283 125.5 0 64.49-29.564 121.507-75.166 157.163l-24.1-140.217-27.714 161.22c-4.556.518-9.134.978-13.728 1.374l-16.22-62.443-16.678 64.217c-6.068.135-12.142.165-18.213.087l-16.703-64.303-16.317 62.824c-5.24-.406-10.458-.9-15.652-1.47l-27.762-161.504-24.78 144.17c-48.574-35.306-80.43-94.18-80.43-161.115 0-51.262 18.688-97.8 49.257-132.643l27.277 156.558L182.625 86.92c7.287-1.18 14.655-2.185 22.074-3.03l22.66 74.317 23.6-77.418c4.487-.096 8.975-.134 13.464-.112z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconFangsCircleIcon);
    