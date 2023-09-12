
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconLightProjectorIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'light-projector'];
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
        <path fill="currentColor" d="M18 17v18h38v78.3c-.75.7-1.47 1.5-2.16 2.3-6.52 7.5-9.72 14.5-10.08 19.8l47.46 84.5c1.03-1.9 2.15-3.9 3.39-5.6 8.29-12.2 21.49-23.8 37.89-33.2 16.5-9.1 33.3-14.3 48-15.1 2.2-.1 4.4-.1 6.6 0l-47.4-84.47c-3-1.54-7.1-2.5-12.3-2.53h-2.3c-2.3.11-4.9.4-7.5.88-10.7 1.91-23.15 6.66-34.61 13.1-3.08 1.73-6.09 3.59-8.99 5.53V35h45v26.5c1.8-.22 3.5-.39 5.3-.49 4.4-.25 8.6-.07 12.7.67V35h55V17H18zm165.4 166.9c-.6.1-1.3.1-2 .1-11.1.6-25.7 4.8-40.1 12.9-14.3 8.1-25.5 18.4-31.8 27.5-6.2 9.2-6.8 16-4.8 19.5 1.9 3.5 8 6.5 19.1 6 11.1-.5 25.7-4.8 40.1-12.9 14.3-8.1 25.6-18.3 31.8-27.5 6.2-9.2 6.8-16 4.9-19.5-1.9-3.3-7.4-6.1-17.2-6.1zm36.2 12.2c-.5 7.9-4 16.1-9 23.5-8.3 12.2-21.4 23.8-37.9 33.1s-33.3 14.4-48 15.2c-10.3.5-20.2-1.2-27.61-6.3L49.48 491.4H492.8V353.8L219.6 196.1z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconLightProjectorIcon);
    