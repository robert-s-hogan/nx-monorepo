
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMilitaryFortIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'military-fort'];
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
        <path fill="currentColor" d="M256 21c-66.72 0-121 54.28-121 121s54.28 121 121 121 121-54.28 121-121S322.72 21 256 21zm0 18c56.992 0 103 46.008 103 103s-46.008 103-103 103-103-46.008-103-103S199.008 39 256 39zm0 11.75l-69.4 52.05 10.8 14.4L256 73.25l58.6 43.95 10.8-14.4L256 50.75zm0 48l-69.4 52.05 10.8 14.4 58.6-43.95 58.6 43.95 10.8-14.4L256 98.75zm0 48l-69.4 52.05 10.8 14.4 58.6-43.95 58.6 43.95 10.8-14.4-69.4-52.05zM53.562 185l-7 14h66.876l-7-14H53.562zm352 0l-7 14h66.875l-7-14h-52.875zM41 217v46h78v-46H41zm352 0v46h78v-46h-78zM64 231h32v18H64v-18zm352 0h32v18h-32v-18zM38.486 281l-10 30h455.028l-10-30H38.486zM25 329v158h199v-87h64v87h199V329H25zm55 14h32v18H80v-18zm80 0h32v18h-32v-18zm80 0h32v18h-32v-18zm80 0h32v18h-32v-18zm80 0h32v18h-32v-18z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMilitaryFortIcon);
    