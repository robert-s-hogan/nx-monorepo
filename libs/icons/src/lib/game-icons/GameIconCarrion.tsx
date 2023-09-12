
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCarrionIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'carrion'];
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
        <path fill="currentColor" d="M323.625 96.625c12.83 15.365 21.246 32.45 24.063 49.844.007.01.023.018.03.03 4.098 6.483 7.3 13.663 9.376 21.406 3.872 14.452 3.23 28.98-.906 42.406 5.385-.137 10.753.234 16.03 1.063 20.337-50.824-1.366-99.53-48.593-114.75zm-229.03 6.313c-3.192-.04-6.272.958-8.75 2.78-7.217 5.303-9.528 17.636 3.874 31.5-31.695-23-53.314 13.355-23.47 23.5 38.186 12.98 62.297 37.852 91.03 66.657 4.5-8.95 9.99-16.856 16.22-23.72-29.31-29.85-48.34-53.623-62.5-87.686-3.777-9.087-10.316-12.96-16.406-13.032zm311.03 15.843c16.36 35.31 14.957 72.632-10.094 99.5 5.688 2.547 11.118 5.665 16.158 9.282 4.792 3.44 9.254 7.362 13.28 11.72 30.32-43.23 21.423-94.163-19.343-120.5zm-130.094 7.97c-5.81.065-11.757.88-17.686 2.47-36.142 9.682-56.886 44.88-47.97 78.155 4.906 18.306 17.715 31.888 34.72 39.375l4.125 1.813 1.155 4.312 10.72 40.03 77.31-20.686-10.75-40.033-1.155-4.343 2.656-3.625c10.983-14.988 15.28-33.163 10.375-51.47-7.223-26.964-32.437-45.255-61.03-45.97-.825-.02-1.64-.04-2.47-.03zm27.595 41.78c.43-.015.854-.016 1.28 0 7.4.296 14.078 5.348 16.095 12.876 2.483 9.266-3.013 18.798-12.28 21.28-9.27 2.485-18.8-3.014-21.283-12.28-2.482-9.266 3.014-18.798 12.282-21.28 1.302-.35 2.613-.546 3.905-.595zm165.594 3.19c6.195 35.648-2.874 68.998-29.22 89.155 5.5 11.813 8.25 25.165 7.25 39.406 49.058-33.438 56.908-89.938 21.97-128.56zm-222.064 12.218c7.486.204 14.276 5.273 16.313 12.875 2.482 9.266-3.015 18.797-12.283 21.28-9.267 2.484-18.798-3.014-21.28-12.28-2.484-9.267 3.013-18.798 12.28-21.282 1.16-.31 2.317-.492 3.47-.56.503-.032 1-.046 1.5-.032zm31.53 21.843l23.095 28.69-27.56 6.655 4.467-35.344zm-86.592 5.595c-11.07 10.506-19.91 24.784-24.78 43.25 14.297 7.06 26.344 16.036 35.686 27.063 13.265 15.656 20.738 35.304 21.75 57.78 4.04-.872 8.185-1.363 12.375-1.437 17.238-.304 35.058 6.446 47.875 22.658l-14.656 11.593c-14.735-18.635-37.164-19.036-53.53-10.186-8.185 4.425-14.354 11.116-17.033 18.594-.06.173-.096.356-.155.53L180 380.5c.418-2.084.98-4.12 1.688-6.094 4.274-11.932 13.145-21.438 23.968-27.75.413-21.826-5.678-39.026-17.437-52.906-11.62-13.713-29.194-24.297-52.626-31.22-2.038-.3-3.986-.457-5.813-.467-2.086-.012-4.026.152-5.843.468-7.266 1.268-12.8 4.773-17.5 10.75-9.398 11.958-14.07 34.817-10.406 61.845l3.907 28.688-19.937-21c-11.16-11.77-22.013-14.838-31.72-13.782-9.704 1.057-18.63 6.773-24.218 14.75-5.587 7.98-7.745 17.722-4.718 27.283 1.668 5.27 4.98 10.753 10.75 15.968 11.96 15.804 46.246 32.908 102.937 43.595-15.04 4.874-24.75 12.64-24.75 21.375 0 14.755 27.74 26.72 61.97 26.72 34.23 0 61.97-11.965 61.97-26.72 0-4.09-2.126-7.972-5.94-11.438 11.142.44 22.745.657 34.814.657 119.344 0 216.955-20.41 224.28-46.22 25.16-46.828-19.41-82.85-47.03-74.72l-15.313 4.5 3.564-15.56c6.54-28.536-5.674-52.045-25.813-66.5-15.23-10.935-34.772-16.04-53.53-12.907-.324.52-.633 1.048-.97 1.562l12.064 45.03 2.437 9.033-9.03 2.437-95.344 25.53-9.03 2.408-2.407-9-12.064-45.063c-19.58-9.923-35.08-27.09-41.094-49.53-.075-.283-.146-.563-.218-.845zM401.094 455c-15.935 0-28.875 5.57-28.875 12.438s12.94 12.437 28.874 12.437c15.935 0 28.844-5.57 28.844-12.438S417.027 455 401.094 455zM78.72 470.313c-15.936 0-28.845 5.568-28.845 12.437 0 6.87 12.91 12.438 28.844 12.438 15.934 0 28.843-5.57 28.843-12.438 0-6.87-12.91-12.438-28.844-12.438z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCarrionIcon);
    