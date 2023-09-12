
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTabletIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'tablet'];
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
        <path fill="currentColor" d="M22.5 93v326h467V93zm15.1 169.44a6.6 6.6 0 1 1 6.6-6.6 6.6 6.6 0 0 1-6.6 6.6zM427.5 401h-377V109h377zm29-133.32a11.85 11.85 0 1 1 11.85-11.85 11.85 11.85 0 0 1-11.85 11.85z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTabletIcon);
    