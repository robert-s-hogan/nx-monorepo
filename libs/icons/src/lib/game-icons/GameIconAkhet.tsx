
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAkhetIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'akhet'];
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
        <path fill="currentColor" d="M256 108c-65.8 0-119 53.2-119 119s53.2 119 119 119 119-53.2 119-119-53.2-119-119-119zM72 146c-11 0-22.24 5.3-31.3 17.4C31.64 175.5 25 194.5 25 221v218h462V221c0-26.5-6.6-45.5-15.7-57.6C462.2 151.3 451 146 440 146s-22.2 5.3-31.3 17.4c-9.1 12.1-15.7 31.1-15.7 57.6v9c-1.6 74.2-62.4 134-137 134s-135.4-59.8-137-134v-9c0-26.5-6.6-45.5-15.7-57.6C94.24 151.3 83 146 72 146z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAkhetIcon);
    