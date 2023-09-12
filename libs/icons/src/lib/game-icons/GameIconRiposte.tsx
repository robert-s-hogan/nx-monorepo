
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconRiposteIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'riposte'];
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
        <path fill="currentColor" d="M264.8 14.86 243.5 130.7 133.8 98.86l64.3 83.04C8.624 261.7 55.82 556 383 486.7 274.4 499.9 66.42 382 240.6 284.1l7.2 73.1L305 258l114.4 26.8-74.7-85.2 80.3-69.2-111 5.5z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconRiposteIcon);
    