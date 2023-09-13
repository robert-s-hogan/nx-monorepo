
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCyborgFaceIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'cyborg-face'];
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
        <path fill="currentColor" d="M218.195 28.5l13.75 110h48.11l13.75-110zm93.069 5.459L295.945 156.5h-79.89L200.754 34.08c-17.39 9.193-33.547 22.691-47.754 39.895V220.5H97.623a334.688 334.688 0 0 0-1.623 31c0 128.13 71.634 232 160 232 71.065-.062 133.586-68.083 153.496-167h-7.371l-32 16h-69.691L263 297.3v-62.8h136v16h16.965c-.335-96.78-42.068-183.093-104.701-216.541zM256 42.5c13.7 0 25 11.3 25 25s-11.3 25-25 25-25-11.3-25-25 11.3-25 25-25zm0 18c-3.973 0-7 3.027-7 7s3.027 7 7 7 7-3.027 7-7-3.027-7-7-7zm-121 39.635c-17.438 29.328-29.537 64.52-35.191 102.365H135zm185 149.38l-32 48 14.977 9.985 32-48zm48 0l-32 48 14.977 9.985 32-48zM144 266.5h80v18h-7.045c-.458 6.484-5.303 10.55-9.617 12.707-4.533 2.267-9.704 3.293-15.338 3.293-5.634 0-10.805-1.026-15.338-3.293-4.314-2.157-9.159-6.223-9.617-12.707H144zm265 2v30h30v-30zm-217 126h128v18H192zm48 32h32v18h-32z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCyborgFaceIcon);
    