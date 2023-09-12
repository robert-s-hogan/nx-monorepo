
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconRapidshareArrowIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'rapidshare-arrow'];
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
        <path fill="currentColor" d="M136.094 25.875c-15.79.166-26.534 4.426-33 11.906-6.32 7.31-8.877 18.45-6.656 34.22 1.01 7.182 3.17 15.27 6.187 23.906 25.733-6.88 59.657-5.89 97.438 3.47 45.22 11.2 95.64 34.696 141.687 73.343 69.268 58.135 120.23 99.117 152.78 178.28-3.425-33.22-15.525-65.535-32.03-94.875-24.64-43.798-58.534-80.653-84.03-102.78-60.464-52.477-122.706-91.336-173.564-111.532-25.428-10.1-48.027-15.5-65.594-15.907-1.097-.025-2.166-.042-3.218-.03zM77.22 67.72l-44.94 51.968c-6.363 7.362-8.96 18.47-6.78 34.156 2.18 15.687 9.306 35.27 21.03 56.875 23.45 43.21 65.05 94.57 119.22 143.468l6.875 6.187-6.125 6.938-27.656 31.28 241.406 80.438-119.094-222.374-26.22 30.156-6.374 7.344-7.093-6.656c-53.73-50.503-95.835-103.37-120.5-149.47-12.334-23.048-20.352-44.395-23.032-63.436-.327-2.317-.56-4.612-.72-6.875z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconRapidshareArrowIcon);
    