
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDrippingStarIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'dripping-star'];
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
        <path fill="currentColor" d="M366.938 19.688l-23.563 17.375-80.75 58.812L181.72 36.78l-23.47-16.936 8.844 27.656 31.25 95.28-81.188 58.564-23.344 16.97 28.907-.25 100-.345 31 95.718 8.843 27.656 8.656-27.688 30.874-95.5 100.187.313 28.876-.22-23.47-16.938-81.155-58.687 31.064-94.813 9.344-27.874zm-35.782 49.25l-24.375 74.437-2.124 6.656 5.656 3.845 63.344 45.563-78.312-.094-6.78.03-1.908 6.22-23.97 74.687-23.936-74.717-2.47-6.47-6.78.032-77.875.125 63.313-45.188 5.28-4.28-1.78-6.688L194 69.22l63.063 46.03 5.687 3.813 5.03-3.844 63.376-46.282zM92 242.063s-36 73.02-36 92.906C56 354.852 72.115 371 92 371s36.03-16.147 36.03-36.03c0-19.905-36.03-92.908-36.03-92.908zm340.906 0s-36.03 73.02-36.03 92.906c0 19.883 16.146 36.03 36.03 36.03 19.885 0 36-16.147 36-36.03 0-19.905-36-92.908-36-92.908zM262.47 363.342s-36.033 73.022-36.033 92.907c0 19.885 16.147 36.03 36.032 36.03 19.883 0 36-16.145 36-36.03 0-19.903-36-92.906-36-92.906z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconDrippingStarIcon);
    