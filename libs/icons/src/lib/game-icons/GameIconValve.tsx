
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconValveIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'valve'];
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
        <path fill="currentColor" d="M247 41v18h18V41zM96.57 77c-.22.22-.77.85-1.35 2.15C93.98 81.96 93 87 93 92s.98 10 2.22 12.8c.58 1.3 1.13 2 1.35 2.2H415.4c.2-.2.8-.9 1.4-2.2C418 102 419 97 419 92c0-5-1-10.04-2.2-12.85-.6-1.3-1.2-1.93-1.4-2.15zM233 125v30h46v-30zm-64 48v30h174v-30zm32 48v190h110V221zM25 253v92h158v-92zm304 0v92h158v-92zm-73 7s38.6 55.3 31 84c-3.3 12.8-16.5 28-31 28-14.6 0-27.7-15.2-31-28-7.6-28.7 31-84 31-84zM25 363v16h158v-16zm304 0v16h158v-16zm-108.5 66l11.2 33.7c6 5.2 15 8.3 24.3 8.3s18.3-3.1 24.3-8.3l11.2-33.7z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconValveIcon);
    