
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSaloonDoorsIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'saloon-doors'];
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
        <path fill="currentColor" d="M247 73.098c-54.26 1.974-69.31 21.918-90.365 44.886-21.25 23.18-48.362 48.605-115.635 50.71v78.208h16v98H41v94h206V73.098zm18 0v365.804h206v-94h-16v-98h16v-78.207c-67.273-2.106-94.386-27.53-115.635-50.71C334.31 95.014 319.26 75.07 265 73.097zm-87 45.804h54v18h-54v-18zm102 0h54v18h-54v-18zm-136 32h88v18h-88v-18zm136 0h88v18h-88v-18zm-216 32h168v18H64v-18zm216 0h168v18H280v-18zm-216 32h168v18H64v-18zm216 0h168v18H280v-18zm-208 32h160v18H72v-18zm208 0h160v18H280v-18zm-255 18v62h14v-62H25zm448 0v62h14v-62h-14zm-401 14h160v18H72v-18zm208 0h160v18H280v-18zm-208 32h160v18H72v-18zm208 0h160v18H280v-18zm-208 32h160v18H64l8-18zm208 0h160l8 18H280v-18zm-216 32h168v18H64v-18zm216 0h168v18H280v-18zm-216 32h168v18H64v-18zm216 0h168v18H280v-18z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSaloonDoorsIcon);
    