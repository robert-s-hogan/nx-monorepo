
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconLevelTwoIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'level-two'];
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
        <path fill="currentColor" d="M256 16c-22.5 72-45 72-45 120 0 0 22.5 24 45 24s45-24 45-24c0-48-22.5-48-45-120zm2.625 144.03A90 96 0 0 0 166 256a90 96 0 0 0 180 0 90 96 0 0 0-87.375-95.97zM256 352c-22.5 0-45 24-45 24 0 48 22.5 48 45 120 22.5-72 45-72 45-120 0 0-22.5-24-45-24z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconLevelTwoIcon);
    