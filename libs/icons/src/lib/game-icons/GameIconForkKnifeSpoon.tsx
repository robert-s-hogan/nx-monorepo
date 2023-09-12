
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconForkKnifeSpoonIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'fork-knife-spoon'];
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
        <path fill="currentColor" d="M48 34v144c0 16 32 32 32 32 0 112-16 176-16 208 0 16 0 32 16 48s16 16 32 0 16-32 16-48c0-32-16-96-16-208 0 0 32-16 32-32V34h-18v96h-21V34H87v96H66V34H48zm202 0c-16 0-16 16-16 16v272h.4c-4.6 45.8-10.4 76.8-10.4 96 0 16 0 32 16 48s16 16 32 0 16-32 16-48c0-22.1-7.6-59.5-12.4-117.5C287.9 270.4 298 232.2 298 194c0-48-25.8-137.6-48-160zm166 0a64 96 0 0 0-64 96 64 96 0 0 0 47.9 92.8C398.8 326.9 384 387.2 384 418c0 16 0 32 16 48s16 16 32 0 16-32 16-48c0-30.8-14.8-91.1-15.9-195.1A64 96 0 0 0 480 130a64 96 0 0 0-64-96z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconForkKnifeSpoonIcon);
    