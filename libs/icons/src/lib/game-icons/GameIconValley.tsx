
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconValleyIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'valley'];
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
        <path fill="currentColor" d="M253.844 20.72L189.03 192.312l-49.31-47.188-60.5 150.844H441.81l-57-94.564-66.03 68.125-13.407-13.03 37.938-39.125-89.47-196.656zM20.47 314.655v178.72h175.75l49.936-78.626-36.062-34.844 43.875-65.25H20.47zm261.186 0l-35.5 55.313 58.47 47.25-2.126 76.155h193v-178.72H281.656z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconValleyIcon);
    