
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconItaliaIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'italia'];
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
        <path fill="currentColor" d="M220.491 24.574L61.571 79.201c-28.927 37.65 13.728 85.182 29.301 94.36l51.152-23.838 89.891 111.244L362.03 332.48l20.362 52.145-16.885 34.268 18.375 11.918 32.775-68.534-22.227-16.243 11.301-38.386 52.643 32.778-1.49-29.301-93.178-49.84c4.616-.771 9.298-1.572 10.242-1.808 1.987-.497-1.49-12.416-1.49-12.416l-33.817 1.437-31.24-17.33-29.3-53.139-36.75-23.34-3.477-56.119 40.723-18.375-3.973-33.771zM129.837 287.16l-5.463 16.102-21.086.414 8.443 88.398 40.723-9.435 1.074-79.95-4.728-14.474zm233.185 128.256L257.74 426.342l-1.986 18.87 90.88 42.214 13.411-17.381-11.92-13.408z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconItaliaIcon);
    