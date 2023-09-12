
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconThreePointedShurikenIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'three-pointed-shuriken'];
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
        <path fill="currentColor" d="M362.803 440.909l130.293 20.426-82.833-102.623-35.511 10.413-41.217-23.794c1.792-6.67 2.837-13.65 2.837-20.887 0-37.218-25.334-68.436-59.678-77.577v-47.605l26.77-25.542-47.455-123.055-47.458 123.055 26.774 25.548v47.6c-34.34 9.135-59.684 40.359-59.684 77.577 0 7.231 1.045 14.205 2.833 20.87l-41.223 23.8-35.51-10.412-82.837 102.622L149.2 440.904l8.736-35.964 41.156-23.765c14.55 14.6 34.678 23.638 56.913 23.638 22.234 0 42.359-9.034 56.906-23.623l41.158 23.758zm-106.798-75.986c-22.352 0-40.475-18.123-40.475-40.479 0-22.35 18.124-40.475 40.475-40.475 22.355 0 40.48 18.125 40.48 40.475 0 22.356-18.125 40.479-40.48 40.479z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconThreePointedShurikenIcon);
    