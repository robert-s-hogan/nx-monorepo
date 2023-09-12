
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBalkenkreuzIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'balkenkreuz'];
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
        <path fill="currentColor" d="M486 203.066v105.879H308.934V486H203.066V308.934H26V203.066h177.066V26h105.879v177.066H486zm0-83.405h-93.638V26.023h-22.564v116.235H486v-22.563zM142.258 26.023h-22.563v93.638H26.056v22.563h116.202V26zm0 343.742H26v22.563h93.638v93.638h22.563V369.742zm250.081 22.563h93.638v-22.563H369.742V486h22.563v-93.638z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBalkenkreuzIcon);
    