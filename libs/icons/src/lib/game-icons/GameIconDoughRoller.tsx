
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDoughRollerIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'dough-roller'];
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
        <path fill="currentColor" d="M468.166 24.156c-13.8-.31-30.977 9.192-42.46 16.883-22.597 15.13-45.255 67.882-45.255 67.882s-17.292-5.333-22.626 0c-5.333 5.333 0 22.627 0 22.627l-4.95 4.948 22.628 22.63 4.95-4.952s17.293 5.333 22.626 0c5.333-5.334 0-22.627 0-22.627s52.75-22.66 67.883-45.255c10.7-15.978 24.91-42.97 11.313-56.568-3.824-3.825-8.707-5.45-14.107-5.57zM312.568 121.65L121.65 312.568l77.782 77.782L390.35 199.432l-77.782-77.782zm-176.07 231.223l-4.95 4.95s-17.293-5.332-22.626 0c-5.333 5.335 0 22.628 0 22.628s-52.75 22.66-67.883 45.255c-10.7 15.978-24.91 42.97-11.313 56.568 13.597 13.598 40.59-.612 56.568-11.312 22.596-15.13 45.254-67.882 45.254-67.882s17.292 5.333 22.626 0c5.333-5.333 0-22.627 0-22.627l4.95-4.948-22.628-22.63z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconDoughRollerIcon);
    