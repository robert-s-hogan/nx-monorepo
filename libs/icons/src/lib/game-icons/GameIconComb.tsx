
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCombIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'comb'];
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
        <path fill="currentColor" d="M447.25 113.53c-.697.022-1.397.065-2.125.126C299.132 126.026 155.697 158.49 36.47 223.28c-10.362 5.632-15.204 13.98-16.845 26.345-1.64 12.366.834 28.467 6.72 45.844 11.216 33.12 34.585 70.496 59.374 98.124l17.593-4.72L66.374 251l18.03-4.813 36.94 137.844 21.03-5.655-36.938-137.813 18.032-4.843 36.936 137.81 18.78-5.03-36.905-137.813 18.064-4.843 36.906 137.78 20.28-5.437-36.936-137.78 18.062-4.845 36.906 137.782 21.032-5.656-36.906-137.75 18.03-4.844 36.907 137.75 21.03-5.625-36.905-137.75 18.03-4.845 36.94 137.72 19.53-5.22-36.906-137.72 18.03-4.843 36.907 137.688 22.47-6.03-36.875-137.69 18.063-4.843 36.875 137.688 21-5.625-36.875-137.688L394 163.22l36.875 137.655 20.28-5.438-36.874-137.625 18.033-4.843 36.875 137.624 17.687-4.75c7.676-36.4 9.244-81.307 2.406-116.03-3.586-18.218-9.55-33.498-17.06-43.158-6.574-8.452-13.485-12.827-22.908-13.125-.673-.02-1.365-.02-2.062 0z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCombIcon);
    