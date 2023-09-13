
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconServerRackIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'server-rack'];
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
        <path fill="currentColor" d="M41 25v78h430V25H41zm254 23h18v32h-18V48zm121 0a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zM64 55h48v18H64V55zm80 0h48v18h-48V55zm80 0h48v18h-48V55zm-119 66v30h302v-30H105zm-64 48v78h430v-78H41zm254 23h18v32h-18v-32zm121 0a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm-352 7h48v18H64v-18zm80 0h48v18h-48v-18zm80 0h48v18h-48v-18zm-119 66v30h302v-30H105zm-64 48v78h430v-78H41zm254 23h18v32h-18v-32zm121 0a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm-352 7h48v18H64v-18zm80 0h48v18h-48v-18zm80 0h48v18h-48v-18zm13 66v30h38v-30h-38zM25 457v30h130.2l20-30H25zm171.8 0l-20 30h158.4l-20-30H196.8zm140 0l20 30H487v-30H336.8z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconServerRackIcon);
    