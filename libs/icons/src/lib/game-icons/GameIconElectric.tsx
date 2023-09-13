
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconElectricIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'electric'];
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
        <path fill="currentColor" d="M376 211H256V16L136 301h120v195z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconElectricIcon);
    