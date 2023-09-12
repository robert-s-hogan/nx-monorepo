
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSpawnNodeIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'spawn-node'];
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
        <path fill="currentColor" d="M136 16v30h240V16H136zm0 60v60h240V76H136zm0 90v90h240v-90H136zm0 120v120h240V286H136zm-30 150c-15 0-30 15-30 30v30h360v-30c0-15-15-30-30-30H106z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSpawnNodeIcon);
    