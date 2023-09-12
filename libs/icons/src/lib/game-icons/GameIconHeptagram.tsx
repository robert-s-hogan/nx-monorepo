
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHeptagramIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'heptagram'];
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
        <path fill="currentColor" d="M256 17.338L213.543 180.08 59.836 111.807l100.766 134.662-149.215 77.605 168.11 5.178-32.36 165.047L256 366.096l108.863 128.203-32.36-165.047 168.11-5.178-149.215-77.605 100.766-134.662-153.707 68.273zm0 76.096l22.96 100.597L256 205.09l-22.96-11.059zm-136.668 65.82l92.967 44.77-5.672 24.841-22.963 11.059zm273.336 0l-64.332 80.67-22.963-11.057-5.672-24.844zm-163.738 52.78l6.326 3.046-7.889 3.799zm54.14 0l1.563 6.845-7.889-3.799zM256 225.067l33.756 16.256 8.336 36.526-23.36 29.29h-37.464l-23.36-29.29 8.336-36.526zm-54.496 26.245l-1.95 8.537-4.378-5.49zm108.992 0l6.328 3.046-4.379 5.49zm-131.953 11.056l15.889 19.926-5.67 24.846H85.574zm154.914 0l92.969 44.772H323.238l-5.67-24.846zm-124.67 37.926l5.46 6.846h-7.024zm94.426 0l1.564 6.846h-7.023zM203.115 325.14h25.487l15.888 19.923-64.336 80.674zm48.506 0h8.758L256 330.63zm31.78 0h25.484l22.96 100.597-64.333-80.674z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHeptagramIcon);
    