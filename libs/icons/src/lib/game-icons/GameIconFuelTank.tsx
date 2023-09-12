
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconFuelTankIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'fuel-tank'];
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
        <path fill="currentColor" d="M288 133v18h160v-18H288zm41 34v16h78v-16h-78zM64 201c-5.75 0-10.406 1.939-15.074 6.023-4.668 4.085-9.078 10.48-12.701 18.631C28.978 241.96 25 265 25 288s3.978 46.041 11.225 62.346c3.623 8.152 8.033 14.546 12.7 18.63C53.595 373.062 58.25 375 64 375h5.055l2-17.994.89-8.006h80.11l2.888 26H183V201H64zm137 0v46h46v-46h-46zm64 0v174h28.055l2-17.994.89-8.006h80.11l2.888 26H448c5.75 0 10.406-1.94 15.074-6.023 4.668-4.085 9.08-10.48 12.703-18.631 7.247-16.304 11.225-39.343 11.225-62.342 0-23-3.976-46.04-11.223-62.344-3.623-8.152-8.034-14.55-12.703-18.635-4.668-4.084-9.326-6.024-15.076-6.025H265zm-64 64v46h46v-46h-46zm0 64v46h46v-46h-46zM88.057 367l-14 126h75.886l-13.998-126H88.057zm224 0l-14 126h75.886l-13.998-126h-47.888zM183 384v110h18v-37h46v37h18V384h-18v55h-46v-55h-18zm226 9v30h30v-30h-30zm6.803 48c5.844 19.928 16.417 32.884 28.318 40.563C462.214 493.235 482 493 490 493v-18c-8 0-23.214-.235-36.121-8.563-7.548-4.87-14.772-12.42-19.473-25.437h-18.603z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconFuelTankIcon);
    