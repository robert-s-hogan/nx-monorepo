
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTurnstileIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'turnstile'];
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
        <path fill="currentColor" d="M99.73 57L25 131.7V487h110V188.3l80-80V57H99.73zM80 103h80v18H80v-18zm138 27.7L154.7 194c6.4 3.2 13.6 5 21.3 5 26.1 0 47-20.9 47-47 0-7.7-1.8-14.9-5-21.3zm22.7 15.3c.2 2 .3 4 .3 6 0 8.5-1.7 16.6-4.6 24H473c5.8 0 8.9-1.8 11.3-4.5 2.3-2.6 3.7-6.5 3.7-10.5s-1.4-7.9-3.7-10.5c-2.4-2.7-5.5-4.5-11.3-4.5H240.7zm-15.2 48c-4 4.8-8.7 8.9-13.9 12.3l216.8 117.9c5 2.7 8.7 2.6 12 1.4 3.4-1.2 6.5-4 8.4-7.5 1.9-3.5 2.5-7.5 1.7-11-.8-3.4-2.7-6.5-7.7-9.3L251.7 194h-26.2zm-35 21.3c-4.2 1-8.5 1.6-12.9 1.7l86.7 211.6c2.2 5.3 5.1 7.5 8.5 8.7 3.3 1.1 7.5.9 11.2-.6 3.7-1.5 6.7-4.2 8.3-7.4 1.5-3.2 2-6.8-.1-12.1l-77.4-188.6-24.3-13.3z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTurnstileIcon);
    