
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconIronCrossIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'iron-cross'];
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
        <path fill="currentColor" d="M486 371.316V142.75a399.056 399.056 0 0 1-185.685 69.28 399.135 399.135 0 0 1 70.973-186.002H142.72A399.056 399.056 0 0 1 212 211.714 399.135 399.135 0 0 1 26 140.74V369.31a399.056 399.056 0 0 1 185.685-69.28 399.135 399.135 0 0 1-70.973 185.944H369.28A399.056 399.056 0 0 1 300 300.342a399.135 399.135 0 0 1 186 70.974z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconIronCrossIcon);
    