
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCheckboxTreeIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'checkbox-tree'];
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
        <path fill="currentColor" d="M249.28 106.28V250h-77.186v-56.25H22.47V319.406h149.624v-50.719h77.187v148.407h18.69V357.22h71.686v50.718H489.28V282.28H339.657v56.251H267.97V189.407h71.686v50.72H489.28V114.47H339.657V170.718H267.97v-64.44h-18.69zm109.064 26.876h112.25v88.28h-112.25v-88.28zm-317.188 79.28h112.25v88.283H41.156v-88.283zm317.188 88.533h112.25v88.28h-112.25v-88.28z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCheckboxTreeIcon);
    