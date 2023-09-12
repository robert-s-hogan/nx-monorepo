
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTelefragIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'telefrag'];
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
        <path fill="currentColor" d="M256 16c-59.998 0-120 30-120 75 0 30 22.5 45 22.5 75 0 22.5-7.5 22.5-7.5 37.5 0 7.5 24.006 16.002 45 22.5v30h120v-30s45.283-13.978 45-22.5c-.465-13.974-7.5-15-7.5-37.5 0-15 22.82-45.71 22.5-75 0-45-60.002-75-120-75zm-45 90c16.57 0 30 13.433 30 30 0 16.568-13.43 30-30 30s-30-13.432-30-30c0-16.567 13.43-30 30-30zm90 0c16.567 0 30 13.433 30 30 0 16.568-13.432 30-30 30-16.57 0-30-13.432-30-30 0-16.567 13.43-30 30-30zm-45 52.5c7.5 0 22.5 30 22.5 37.5 0 15 0 15-7.5 15h-30c-7.5 0-7.5 0-7.5-15 0-7.5 15-37.5 22.5-37.5zM136 286v45h240v-45H136zm0 75v45h240v-45H136zm-30 75c-15 0-30 15-30 30v30h360v-30c0-15-15-30-30-30H106z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTelefragIcon);
    