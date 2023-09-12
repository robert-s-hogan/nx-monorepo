
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHammerDropIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'hammer-drop'];
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
        <path fill="currentColor" d="M19.5 12.28c88.718 14.188 164.126 68.854 216.78 159.314C191.738 127.057 146.123 88.34 94.626 61.75c32.85 23.08 62.377 54.866 90.844 94.656C134.237 105.183 81.956 62.756 18.187 41.28v35.314c60.134 16.64 118.398 62.562 163.968 129.312l-.125.063 22.19 38.405 157.936-91.188-22.187-38.406-.064.032c-38.38-69.37-83.042-95.124-106.72-102.53H190.47c62.75 22.53 105.37 69.704 133.78 142.28-50.118-70.19-122.52-123.542-202.656-142.28H19.5zm153.97 40.47c52.194 21.552 97.93 66.563 110.843 121.594L173.47 52.75zM348.5 182.656l-111.97 64.656L321.25 394l111.97-64.656-84.72-146.688zm72.97 33.563l-24 13.843 19.78 34.28 24-13.874-19.78-34.25zm-168.345 97.186L83.47 411.344l19.81 34.312 169.626-97.97-19.78-34.28zM465.53 332.22l-157.936 91.186 22.22 38.47 157.936-91.188-22.22-38.47zM62.72 412.81l-35.94 20.75 28.907 50.063 35.938-20.75-28.906-50.063z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHammerDropIcon);
    