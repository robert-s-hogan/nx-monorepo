
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSamaraMosqueIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'samara-mosque'];
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
        <path fill="currentColor" d="M269 54.7l-28 4.87v34.12l28-5.7V54.7zm16.5 48.3L225 115.4v33.1l60.5-15.1V103zm25.5 42.5L201 173v31.1l110-18.4v-40.2zm32 53.1l-174 29v46.2l174-21.7v-53.5zm32 67.6l-238 29.7v59l238-23.8v-64.9zm32 79.7l-302 30.2V439h302v-93.1zM41 457v30h78v-30H41zm96 0v30h110v-30H137zm128 0v30h110v-30H265zm128 0v30h78v-30h-78z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSamaraMosqueIcon);
    