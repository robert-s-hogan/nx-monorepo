
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconShieldReflectIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'shield-reflect'];
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
        <path fill="currentColor" d="M19.36 19.457l-.38 27.84 267.127 154.75-58.703 19.916 57.602 19.36L142.12 383.546l-19.214-19.213-51.47 114.324 123.125-43.482-17.492-18.95 151.868-151.87 12.433 43.078 22.976-68.5 56.675-16.565-57.475-15.492-22.934-79.828-14.145 48.266-268.65-155.41-38.454-.446zM370.614 81.94c-4.53.02-9.035.12-13.51.302-3.275.134-6.528.32-9.76.547l31.25 108.786 104.05 28.045c6.204-39.085 8.902-80.275 9.18-120.075C456.37 88.82 415.098 82.257 375.15 81.95c-1.514-.012-3.027-.015-4.537-.01zm-36.87 2.1c-31.99 3.653-61.013 12.153-83.014 25.87l64.493 37.31 18.52-63.18zm148.18 139.997L378.958 254.13l-38.93 116.054-20.268-70.225-39.07 39.067c18.814 35.364 46.1 62.287 86.175 77.604 47.473-17.834 78.566-62.795 98.014-121.6 7.323-22.14 12.905-46.11 17.042-70.993z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconShieldReflectIcon);
    