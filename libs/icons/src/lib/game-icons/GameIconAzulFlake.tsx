
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAzulFlakeIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'azul-flake'];
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
        <path fill="currentColor" d="M128 16v99.3l119 118.9V120.1L128 16zm256 0L265 120.1v114.1l119-119V16zM16 128l104 119h114.2L115.3 128H16zm380.8 0l-119 119h114.1l104-119h-99.1zM120 265L16 384h99.2l119-119H120zm157.8 0l119 119h99.1l-104-119H277.8zM247 277.8l-119 119V496l119-104.1V277.8zm18 0v114.1L384 496v-99.2l-119-119z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAzulFlakeIcon);
    