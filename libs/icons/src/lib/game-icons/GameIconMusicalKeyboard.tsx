
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMusicalKeyboardIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'musical-keyboard'];
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
        <path fill="currentColor" d="M369.1 19.82L19.81 369.1 142.9 492.2l69.3-69.3-79.2-79.2L412.9 63.66zM374 57.3l12.8 12.72-56.5 56.58-12.8-12.8zm51.7 19.1L413 89.12l66.5 66.48 12.7-12.7zm-25.5 25.5l-12.6 12.7 66.5 66.5 12.6-12.7zm-25.4 25.5L362.1 140l66.5 66.5 12.6-12.7zm-25.5 25.4l-12.6 12.7 66.5 66.4 12.6-12.6zm-74.3 3.5l12.8 12.8-11.3 11.3-12.8-12.8zm48.9 22L311.2 191l66.5 66.4 12.6-12.6zm-74.3 3.4l12.8 12.8-11.3 11.3-12.8-12.8zm48.8 22.1l-12.6 12.6 66.4 66.4 12.7-12.6zm-82.8 11.9l12.8 12.8-33.9 33.9-12.8-12.8zm57.4 13.5l-12.7 12.7 66.5 66.4 12.6-12.6zm-25.6 25.5l-12.6 12.6 66.5 66.5 12.6-12.6zm-88.3 17.5l12.8 12.8-34 34-12.8-12.8zm62.9 7.9l-12.6 12.7 66.4 66.4 12.7-12.6zm-25.4 25.5l-12.7 12.6 66.5 66.5 12.7-12.6zM86.27 322.5l35.33 35.3-46.64 46.7-29-29-6.35-6.4zm84.83 8.5l-12.7 12.7 66.5 66.5 12.7-12.7zm-84.83 16.9l-21.22 21.2 9.91 10 21.21-21.3zm38.83 26.2l12.8 12.8-33.9 33.9L91.23 408zm22.7 22.6l12.8 12.8-34 33.9-12.8-12.8zm22.6 22.6l12.8 12.8-33.9 34-12.8-12.8z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMusicalKeyboardIcon);
    