
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMetalPlateIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'metal-plate'];
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
        <path fill="currentColor" d="M88 32v16H72V34.67L32 48v14.31l40-13.33v16.87L32 79.18V188l40-13.3V286h16V175.5l384 169v112l-384-169V346H72v-59.3L32 300v59.6l40-13.4v16.9l-40 13.3v15.2l40-13.4v16.9l-40 13.3V464l40 13.3V396h16v-17.2L282.7 464h-39.8L88 396.2V480h400V32h-16zm0 16.71L472 215.1v17.3L88 66.14V174H72V66h16zm0 298.09L351.6 464h-39.2L88 364.3V378H72v-14h16z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMetalPlateIcon);
    