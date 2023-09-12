
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSnowBottleIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'snow-bottle'];
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
        <path fill="currentColor" d="M95.22 24.53l-6.75 6.72L29 90.656l-6.688 6.656 6.72 6.626 6.437 6.343 72.5-72.468-6.157-6.406-6.594-6.875zm42.436 9.97L34.25 137.906l32.97 32.97L170.624 67.468l-32.97-32.97zM290.22 92.78c-35.402.14-70.807 9.566-102.25 28.25l-21.782-22.655-13.25 13.22 26.656 27.718 5.344 5.562 6.5-4.188c42-27.23 92.62-35.53 139.843-24.843-15.238-1.195-27.145 2.377-32.124 11-7.853 13.602 3.82 35.784 26.97 55.094l-11.72 8.03 1.156 15.376c-11.517-2.305-23.483-3.53-35.78-3.53-89.763 0-162.532 64.89-162.532 144.967 0 1.747.056 3.49.125 5.22-17.403-51.932-10.743-110.048 19.938-157.28l4.156-6.376-5.44-5.375-27.436-27-13.22 13.218 22.345 22c-46.117 77.368-35.94 178.653 30.593 245.156 78.65 78.65 206.18 78.63 284.843 0 78.663-78.63 78.677-206.074.03-284.688-39.483-39.458-91.228-59.08-142.967-58.875zm140.686 84c12.662 15.067 22.5 31.67 29.53 49.126L450.22 221l-23.158 15.844 1.375 17.937-28.156-13.56-18.905 39.343c-4.978-3.74-10.673-6.528-16.813-8.125l18.875-39.313-9.718-4.688c-5.175-3.274-10.59-6.275-16.19-9l7.44-5.093-.69-8.875c31.712 13.947 61.17 14.25 69.814-.72 4.268-7.393 2.78-17.345-3.188-27.97zm-103.53 49.376L309.03 238.72l24.626 36.06c-5.83 2.508-11.052 6.115-15.406 10.564l-24.625-36.063-24.688 16.876-1.468-19.5-4.095-1.97c10.212-5.97 21.433-10.703 33.5-13.936 10.205-2.734 20.435-4.235 30.5-4.594zm144 39.344c4.113 26.094 2.53 52.886-4.75 78.438l-8.376-4.032-12.594 8.625-2.062-27.06-43.28 3.28c.37-3.067.46-6.215.217-9.406-.24-3.182-.796-6.283-1.624-9.25l43.25-3.28-2.5-32.908 14.844 7.156 16.875-11.562zm-247.22 14.313l22.28 10.718 12.408-8.467 2.594 34.5 43.375-3.313c-.37 3.056-.46 6.195-.22 9.375.243 3.185.797 6.28 1.626 9.25l-43.345 3.313 2.406 31.906-13.655-6.594-23.156 15.844 2.124 28.03 25.28 12.188 23.157-15.843-1.28-17.033 27.094 13.063 18.906-39.344c4.978 3.743 10.672 6.524 16.813 8.125l-18.875 39.314 27.875 13.437-12.188 8.345 2.125 28.03 14.375 6.908c-66.514 15.45-132.758-20.952-149.375-82.97-9.352-34.902-1.05-70.656 19.656-98.78zm127.72 9.75c.505-.017 1-.012 1.5 0 14.983.36 27.37 11.895 28.53 27.187 1.24 16.312-10.812 30.324-27.125 31.563-16.31 1.238-30.323-10.784-31.56-27.094-1.24-16.31 10.814-30.325 27.124-31.564.51-.038 1.025-.077 1.53-.094zm34.968 63.093l24.594 35.97 24.843-17.032.94 12.187 9.905 4.783c-7.48 12.296-16.537 23.916-27.188 34.562-9.86 9.856-20.55 18.36-31.843 25.5-.103.056-.21.1-.313.156l-1.967-25.842L371.438 416l24.593-16.813-24.592-35.968c5.833-2.507 11.048-6.113 15.406-10.564z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSnowBottleIcon);
    