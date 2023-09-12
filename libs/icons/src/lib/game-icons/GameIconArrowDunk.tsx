
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconArrowDunkIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'arrow-dunk'];
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
        <path fill="currentColor" d="M237.13 18.283c-51.748 0-99.183 27.58-136.067 73.395 11.946-6.97 24.526-11.903 37.51-14.76 8.952-1.97 18.062-2.96 27.25-3 27.562-.123 55.824 8.283 82.636 24.318 70.828 42.362 132.585 137.45 153.704 275.178l-49.44 12.637 74.33 109.74 74.327-147.733-51.84 13.25c.564-8.534.9-17.16.9-25.905 0-175.088-95.847-317.12-213.307-317.12h-.002zm-71.165 74.305c-7.924.04-15.734.9-23.375 2.582-30.47 6.705-58.785 26.48-81.356 61.89C37.996 207.88 24.4 269.28 24.4 335.4c0 15.983 1.35 31.378 2.883 46.73 14.387-135.103 92.702-238.62 187.363-238.62 34.713 0 67.177 13.976 95.083 38.334-21.608-29.968-45.915-52.65-70.863-67.57-24.337-14.556-49.13-21.81-72.902-21.688z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconArrowDunkIcon);
    