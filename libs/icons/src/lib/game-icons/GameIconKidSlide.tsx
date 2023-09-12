
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconKidSlideIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'kid-slide'];
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
        <path fill="currentColor" d="M185 89v46h44.3l192 352h65.6c-.3-12.4-1.3-23.6-5-31-4.5-9.1-11.9-15-33.9-15h-5.4L275.4 132.2v-.1c-8.1-15.8-14.6-26.9-21.9-33.44-7.2-6.55-15-9.66-29.5-9.66h-39zM51 90v35H28v18h23v30h18v-30h78v30h18V90h-18v35H69V90H51zM37 191v30h142v-30H37zm14 48v14h18v-14H51zm96 0v14h18v-14h-18zM37 271v30h142v-30H37zm14 48v14h18v-14H51zm96 0v14h18v-14h-18zM37 351v30h142v-30H37zm14 48v14h18v-14H51zm96 0v14h18v-14h-18zM37 431v30h142v-30H37zm14 48v15h18v-15H51zm96 0v15h18v-15h-18z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconKidSlideIcon);
    