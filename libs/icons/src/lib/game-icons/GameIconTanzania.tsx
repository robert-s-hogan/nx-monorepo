
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTanzaniaIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'tanzania'];
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
        <path fill="currentColor" d="M57.08 38.67l57.42-6 5.9 82.23 73.8-25.69 30.9-57.39 151.6 81.48 9.4 34.4 60.2 42.7-21.5 75.5 32.5 22.3-13.7 71.9 18.1 20.6-2.7 36.8 35.3 28.4-84.9 34.3-163-.9-19.7-74.5-139.59-52.4c-43.39-47.3-54.69-107-69.46-165.4l61.69-60.1z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTanzaniaIcon);
    