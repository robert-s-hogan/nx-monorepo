
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconToothIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'tooth'];
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
        <path fill="currentColor" d="M246.752 23.084c-11.678-.205-23.032 4.26-30.952 15.185-29.264 40.35-39.476 78.655-44.385 111.545-4.514 30.235-13.507 59.72-30.952 87.02-31.793 49.747-65.857 124.744-73.587 167.612-5.864 32.387 17.908 42.053 32.705 7.008 20.245-47.94 65.492-125.768 122.06-103.955 51.25 19.76 8.924 122.165-22.193 152.43-25.11 24.424-7.202 51.466 23.944 22.192 33.048-31.062 78.602-92.256 94.612-147.172 6.233-21.378 15.79-43.776 34.458-54.315 39.813-22.477 81.826-58.99 98.115-133.156 10.9-49.632-50.517-70.425-85.266-37.378-5.303-50.398-46.487-62.34-76.51-35.624 10.073-27.63-16.357-50.942-42.048-51.394z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconToothIcon);
    