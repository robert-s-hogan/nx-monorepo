
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconLetterBombIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'letter-bomb'];
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
        <path fill="currentColor" d="M287.72 18.813l-65.314 84.25-56.094-59.907-22.437 71.25-68.156-22.25 36.343 77.125-82.688 30.282 74.75 54.907-84.78 85.968 95.436 9.906-39.03 90.312 108.063-35.094 4.156 90.594 68.53-70.406 48.72 58.156 26.967-61.937 84.22 54.124-17.97-89.125 71.938 20.81-36.906-79.5 61.5-9.467-44.75-50.094 41.905-42.658L441.97 213.5 477 131.437l-96.53 27.438 23.655-91.78-95.594 62.468-20.81-110.75zm-119.94 146.5c105.715 3.01 184.245 43.667 252 101.843l-179.842 13.72-72.157-115.563zm-15.593 10.312l44.907 71.875-75.28 36 30.374-107.875zm54.875 87.844l20.032 32.092 3 4.813 5.625-.438 48.593-3.718 31.375 80.624c-47.482-31.943-113.61-65.86-190.313-74.344l81.688-39.03zm212.125 22.436l-82.093 94.5-33.344-85.656 115.438-8.844z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconLetterBombIcon);
    