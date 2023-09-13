
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconButterflyKnife1Icon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'butterfly-knife-1'];
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
        <path fill="currentColor" d="M311.96 258.5L105.55 484l-30-28.31L288.92 236.7zM139.77 417.7a7.41 7.41 0 1 0 .3 10.47 7.41 7.41 0 0 0-.3-10.47zm23.74-25.14a7.41 7.41 0 1 0 .3 10.47 7.41 7.41 0 0 0-.29-10.44zm23.76-25.11a7.41 7.41 0 1 0 .3 10.47 7.41 7.41 0 0 0-.3-10.47zm23.74-25.15a7.41 7.41 0 1 0 .3 10.47 7.41 7.41 0 0 0-.3-10.47zm23.76-25.14a7.41 7.41 0 1 0 .3 10.47 7.41 7.41 0 0 0-.3-10.47zm23.74-25.14a7.41 7.41 0 1 0 .3 10.47 7.41 7.41 0 0 0-.31-10.47zm23.74-25.14a7.41 7.41 0 1 0 .3 10.47 7.41 7.41 0 0 0-.3-10.47zM52.67 433.13l-28.26-30 225.85-206 21.71 23.02zm36.9-63.05a7.41 7.41 0 1 0-.32 10.47 7.41 7.41 0 0 0 .33-10.47zm25.2-23.7a7.41 7.41 0 1 0-.32 10.47 7.41 7.41 0 0 0 .32-10.47zm25.17-23.68a7.41 7.41 0 1 0-.32 10.47 7.41 7.41 0 0 0 .32-10.47zm25.18-23.7a7.41 7.41 0 1 0-.32 10.47 7.41 7.41 0 0 0 .32-10.5zm25.18-23.7a7.41 7.41 0 1 0-.32 10.47 7.41 7.41 0 0 0 .32-10.5zm25.18-23.7a7.41 7.41 0 1 0-.32 10.47 7.41 7.41 0 0 0 .32-10.51zm25.18-23.7a7.41 7.41 0 1 0-.32 10.47 7.41 7.41 0 0 0 .32-10.51zm63.89 1.63c12.87-10.8 25.09-20.92 37-30.79C425.04 129.57 475.68 87.63 487.59 28c-8.36 6.7-63.45 50.38-92.82 58.58l-114 119.47z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconButterflyKnife1Icon);
    