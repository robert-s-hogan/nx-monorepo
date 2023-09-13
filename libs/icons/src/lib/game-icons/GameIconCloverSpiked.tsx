
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCloverSpikedIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'clover-spiked'];
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
        <path fill="currentColor" d="M256 16c-24 72-72 72-72 96s48 48 72 48 72-24 72-48-48-24-72-96zM112 184c-24 0-24 48-96 72 72 24 72 72 96 72s48-48 48-72-24-72-48-72zm288 0c-24 0-48 48-48 72s24 72 48 72 24-48 96-72c-72-24-72-72-96-72zm-141.906.03A72 72 0 0 0 184 256a72 72 0 0 0 144 0 72 72 0 0 0-69.906-71.97zM256 352c-24 0-72 24-72 48s48 24 72 96c24-72 72-72 72-96s-48-48-72-48z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCloverSpikedIcon);
    