
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconWindowIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'window'];
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
        <path fill="currentColor" d="M25 66.75V425.8l78-26V92.74zm462 0l-78 25.99V399.8l78 26V267.5c-1 3.2-2.4 6.2-4.2 8.8-4.1 6.1-10.7 11-18.8 11-8.1 0-14.7-4.9-18.8-11-4.1-6.1-6.2-13.8-6.2-22s2.1-15.9 6.2-22 10.7-11 18.8-11c8.1 0 14.7 4.9 18.8 11 1.8 2.6 3.2 5.6 4.2 8.8zm-366 28.5V397.3h126V95.25zm144 0V397.3h126V95.25zM135 109.3h98v274h-98v-265zm144 0h98v274h-98v-265zm-126 18v110h62v-110zm144 0v110h62v-110zm167 112c-.8 0-2.1.4-3.8 3-1.7 2.6-3.2 7-3.2 12s1.5 9.4 3.2 12c1.7 2.6 3 3 3.8 3 .8 0 2.1-.4 3.8-3 1.7-2.6 3.2-7 3.2-12s-1.5-9.4-3.2-12c-1.7-2.6-3-3-3.8-3zm-311 16v110h62v-110zm144 0v110h62v-110zm-184 160v30h286v-30z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconWindowIcon);
    