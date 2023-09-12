
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCrossShieldIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'cross-shield'];
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
        <path fill="currentColor" d="M256 20c-64 96-128 88-192 104 0 256 64 320 192 368 128-48 192-112 192-368-64-16-128-8-192-104zm0 32a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm.291 30.152a269.17 269.17 0 0 0 13.84 14.15c34.949 35.385 82.966 45.887 130.685 56.428 2.732 1.184 6.62.508 8.864 1.958-2.683 64.84-5.522 131.649-32.315 191.746-12.685 31.46-36.26 57.602-64.37 76.144-15.452 10.864-32.847 18.227-49.884 26.115-6.586 4.573-13.697-.448-20.242-2.46-43.648-17.847-84.444-48.619-105.056-92.266-29.065-62.018-32.949-131.823-35.815-199.393 57.423-8.808 112.578-27.8 152.441-70.418zM256 124l-27.512 68.78C211.228 189.067 190.45 182.15 160 172c0 32-16 48-32 64 0 16 64 32 80 32 13.173-8.782 22.72-15.138 30.646-19.1C234.19 277.441 218.65 337.35 192 364c32 16 48 32 64 48 16-16 32-32 64-48-26.65-26.65-42.19-86.559-46.646-115.1 7.926 3.962 17.473 10.318 30.646 19.1 16 0 80-16 80-32-16-16-32-32-32-64-30.45 10.15-51.228 17.068-68.488 20.78zm-172 8a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm344 0a9 9 0 1 1 0 18 9 9 0 0 1 0-18zM96 282a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm320 0a9 9 0 1 1 0 18 9 9 0 0 1 0-18zM160 410a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm192 0a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm-96 50a9 9 0 1 1 0 18 9 9 0 0 1 0-18z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCrossShieldIcon);
    