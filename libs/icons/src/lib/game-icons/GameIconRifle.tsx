
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconRifleIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'rifle'];
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
        <path fill="currentColor" d="M256 16S136 76 136 226v120c0 30 0 30 30 30h180c30 0 30 0 30-30V226C376 76 256 16 256 16zm0 75s60 30 60 135v60H196v-60c0-105 60-135 60-135zM148.63 420.998A12.632 12.632 0 0 0 136 433.63v49.737a12.632 12.632 0 0 0 12.63 12.63h214.74a12.632 12.632 0 0 0 12.63-12.63V433.63A12.632 12.632 0 0 0 363.37 421H148.63z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconRifleIcon);
    