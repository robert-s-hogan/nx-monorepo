
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSubmarineIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'submarine'];
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
        <path fill="currentColor" d="M315 144v21.75L292 160l-16 80H164c-49.154 16.385-81.254 27.1-102.578 34.846L52 256l-16-16v44.918C20.047 292.31 20 296.316 20 304c0 7.712.05 11.717 16 19.162V368l16-16 9.352-18.703c21.094 7.734 52.752 18.418 101.072 34.703H372c160-16 160-128 0-128h-16v-64l-23-5.75V144h-18zM148 263h256v18H148v-18z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSubmarineIcon);
    