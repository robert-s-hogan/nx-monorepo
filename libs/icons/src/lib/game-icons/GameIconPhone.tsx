
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPhoneIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'phone'];
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
        <path fill="currentColor" d="M170.738 311.468c8.07-42.15 99.697-131.543 138.247-138.247 11.314 11.314 33.94 33.942 56.57 33.942l79.195-79.196c0-22.628-35.103-49.413-56.57-56.57C272.583 32.865 32.865 272.583 71.398 388.182c7.156 21.467 33.94 56.57 56.57 56.57l79.195-79.196c0-22.628-25.11-42.772-36.424-54.086z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPhoneIcon);
    