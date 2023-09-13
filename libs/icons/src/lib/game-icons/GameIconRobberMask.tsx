
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconRobberMaskIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'robber-mask'];
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
        <path fill="currentColor" d="M256.03 16c-48.072 0-85.647 16.52-111.864 48.975C118.893 96.26 104 141.43 96.05 199.935c-6.468 2.238-11.218 6.843-13.38 11.16-2.98 5.95-2.856 11.635-2.856 11.635 0 15.21-.045 34.424 1.97 50.55 1.006 8.062 2.42 15.333 5.234 21.587 1.406 3.127 3.182 6.09 5.962 8.588 1.297 1.165 2.9 2.16 4.64 2.916 14.314 29.392 29.234 69.116 47.972 104.49 19.454 36.725 43.125 69.665 77.666 79.122 30.817 8.438 34.68 7.808 65.652-.67 34.38-9.414 58.007-42.174 77.46-78.742 18.735-35.22 33.685-74.805 48.007-104.2 1.743-.755 3.345-1.75 4.643-2.915 2.78-2.498 4.556-5.46 5.962-8.588 2.813-6.254 4.228-13.525 5.235-21.588 2.014-16.126 1.97-35.34 1.97-50.55 0 0 .124-5.674-2.84-11.62-2.15-4.312-6.885-8.916-13.33-11.163-7.94-58.497-22.69-103.664-47.9-134.963C341.967 32.52 304.377 16 256.03 16zm0 18c44.41 0 75.214 13.9 98.07 42.275 22.855 28.376 37.498 72.4 44.988 132.362l.984 7.884h7.948c4.575 0 4.39.962 5.216 2.62.827 1.66.95 3.59.95 3.59 0 15.21-.045 34.022-1.83 48.317-.893 7.147-2.327 13.185-3.79 16.437-.65 1.447-1.18 2.05-1.404 2.297h-4.738l-2.486 4.978c-15.576 31.173-30.828 72.33-49.46 107.36-18.635 35.028-40.537 62.773-66.32 69.83-31.265 8.56-25.44 9.082-56.148.673-25.933-7.1-47.874-35.002-66.512-70.186-18.638-35.185-33.853-76.488-49.435-107.676l-2.487-4.977h-4.738c-.224-.245-.754-.85-1.404-2.296-1.463-3.252-2.897-9.29-3.79-16.437-1.785-14.295-1.83-33.106-1.83-48.317 0 0 .123-1.92.952-3.576.828-1.654.658-2.633 5.277-2.633h7.947l.985-7.883c7.488-59.95 22.263-103.966 45.193-132.352C181.098 47.9 211.918 34 256.03 34zM153.603 206.018s-21.2 29.61-17.067 45c5.545 20.645 27.375 41.602 51.2 45 25.112 3.58 42.824-30 68.265-30 25.44 0 43.153 33.58 68.266 30 23.824-3.398 45.654-24.355 51.2-45 4.132-15.39-17.068-45-17.068-45-102.4 15-102.397 15-204.796 0zm61.832 135.836a17.584 17.584 0 0 0-4.274.466c-13.715 3.238-27.637 15.983-29.894 29.893C177.696 394.206 211.16 432 211.16 432c44.84-14.947 44.84-14.947 89.68 0 0 0 33.463-37.794 29.894-59.787-2.257-13.91-16.18-26.655-29.894-29.893-15.334-3.62-29.085 14.946-44.84 14.946-14.278 0-26.91-15.248-40.566-15.412z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconRobberMaskIcon);
    