
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSleevelessTopIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'sleeveless-top'];
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
        <path fill="currentColor" d="M320 32l32 16c0 32 16 48 32 96 0 0 16 32.7 16 48 0 48-16 96-32 144s32 96 48 160H96c16-64 64-112 48-160s-32-96-32-144c0-16 16-48 16-48 16-48 32-64 32-96l32-16c0 64 32 144 64 144s64-80 64-144z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSleevelessTopIcon);
    