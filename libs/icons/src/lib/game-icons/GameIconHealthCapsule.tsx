
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHealthCapsuleIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'health-capsule'];
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
        <path fill="currentColor" d="M314 29.72l-11.4 11.35 32.5 32.54 11.4-11.39-32.5-32.5zm38.3 2.74c-3.5-.04-6.8.1-9.6.39 0 0-.1.01-.1.02l61.9 61.87 30.8-30.82c-19.8-17.03-43.2-26-63.5-29.57-5.6-.99-11-1.56-15.9-1.79-1.2-.05-2.4-.09-3.6-.1zm-51.1 32.69L65.15 301.3 108.9 345l4.9-4.9 6.4-6.3 58 58-11.3 11.3 43.8 43.8 236.2-236.1L301.2 65.15zm58.1 9.83l-11.4 11.39 77.7 77.73 11.4-11.4-77.7-77.72zm88.8 1.7l-30.8 30.82 61.9 62v-.2c.8-7.6.5-17.9-1.5-29.1-3.6-20.3-12.6-43.73-29.6-63.52zm1.7 88.82l-11.4 11.4 32.5 32.5 11.4-11.4-32.5-32.5zm-227.7 11.3l33.9 33.9 33.9-33.9 45.3 45.3-33.9 33.9 33.9 33.9-45.3 45.3-33.9-33.9-33.9 33.9-45.3-45.3 33.9-33.9-33.9-33.9 45.3-45.3zM40.94 302.6L29.7 314l55.14 55.1 11.31-11.3-55.21-55.2zm-8.08 40c0 .1-.01.1-.01.1-.78 7.6-.48 17.9 1.5 29.1 3.98 22.6 14.65 49.1 35.68 70.1 21.03 21.1 47.57 31.8 70.17 35.8 11.2 2 21.5 2.3 29.1 1.5h.2l-39.4-39.4-9.9 9.9-57.96-57.9 9.9-9.9-39.28-39.3zm87.34 16.6l-32.5 32.6 32.5 32.5 32.6-32.5-32.6-32.6zm34 56.6l-11.4 11.3 55.2 55.2 11.4-11.3-55.2-55.2z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHealthCapsuleIcon);
    