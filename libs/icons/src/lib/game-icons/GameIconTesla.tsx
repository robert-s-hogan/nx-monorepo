
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTeslaIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'tesla'];
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
        <path fill="currentColor" d="M136 16v210l45 30v60h60V166l-45-30V76l45-30V16H136zm135 0v30l45 30v60l-45 30v150h60v-60l45-30V16H271zm-13.688 45.03A45 45 0 0 0 211 106a45 45 0 0 0 90 0 45 45 0 0 0-43.688-44.97zM181 346c-30 0-45 15-45 30h240c0-15-15-30-45-30H181zm-75 60c-15 0-30 15-30 30v60h360v-60c0-15-15-30-30-30H106z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTeslaIcon);
    