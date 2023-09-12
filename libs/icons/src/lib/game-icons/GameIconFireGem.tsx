
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconFireGemIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'fire-gem'];
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
        <path fill="currentColor" d="M201.2 32L215 87h82l13.8-55H201.2zm-17 5.84L73.24 121.1l53.36 13.3 71.1-42.69-13.5-53.87zm143.6 0l-13.5 53.87 71.1 42.69 53.4-13.3-111-83.26zM210.4 105L137 149.1v213.8l73.4 44.1h91.2l73.4-44.1V149.1L301.6 105h-91.2zM64 137.2v237.6l55-13.8V151l-55-13.8zm384 0L393 151v210l55 13.8V137.2zm-192.1 2.4c-14.6 14.6-21.8 29.1-7.3 50.9 20.2 30.3 95 51.9 94.7 116.5 0 43.6-36.5 65.4-87.4 65.4-50.9 0-87.3-36.4-87.3-72.7 0-14.5 7.3-29.2 29.1-43.7-14.6 36.4 0 58.2 21.9 58.2 21.7 0 36.3-21.8 36.3-36.4 0-36.3-43.6-43.6-43.6-87.3 0-23.3 14.5-43.6 43.6-50.9zm-129.3 238l-53.36 13.3 110.96 83.3 13.5-53.9-71.1-42.7zm258.8 0l-71.1 42.7 13.5 53.9 111-83.3-53.4-13.3zM215 425l-13.8 55h109.6L297 425h-82z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconFireGemIcon);
    