
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPortugalIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'portugal'];
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
        <path fill="currentColor" d="M182.6 55.13l66-34.5-7.5 30.75 117.8-10.07-14 39.94 33.1-2.34c-47 52.19-45.7 119.19-60.8 178.49l-39.8-.7 40.5 57c-14.5 61.6-21 113.2-27.7 165-35.8 10.6-74.9 15.9-120.7 10.5 24.6-43 19.6-86 26.2-129l-33 .7-25.5-33.7c30.1-84.1 76-176.6 45.4-272.07z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPortugalIcon);
    