
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconWoodCabinIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'wood-cabin'];
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
        <path fill="currentColor" d="M495.145 15.451l-178.215.205s7.918 25.215 15.652 35.63c13.155 17.712 67.295 2.752 59.79 35.714h55.4c6.995-6.98 14.212-15.862 15.064-23.44 1.035-9.207-15.175-16.126-12.29-24.931 5.22-15.92 44.599-23.178 44.599-23.178zM256 28.311L30.455 238.82l32.666 21.777L256 83.79l192.879 176.807 32.666-21.778L256 28.31zM393 105v26.555l46 42.933V105h-46zm-137 3.209L209.318 151h93.364L256 108.209zM189.682 169l-32.727 30H279v-30h-89.318zM297 169v30h58.045l-32.727-30H297zm-159.682 48l-34.564 31.684 64.246-.288V217h-29.682zM185 217v31.316l222.76-.994L374.682 217H185zm242.303 48.236L83.02 266.773l-18.141 16.63-.932-.622A31.64 31.64 0 0 1 60.737 295H451.263a31.64 31.64 0 0 1-3.211-12.219l-.932.621-19.818-18.166zM32 267c-7.839 0-14 6.161-14 14s6.161 14 14 14 14-6.161 14-14-6.161-14-14-14zm448 0c-7.839 0-14 6.161-14 14s6.161 14 14 14 14-6.161 14-14-6.161-14-14-14zM59.656 313a31.659 31.659 0 0 1 1.08 30H103v-30H59.656zM121 313v78h46v-78h-46zm64 0v78h46v-78h-46zm64 0v30h30v-30h-30zm48 0v174h94V313h-94zm112 0v30h42.264a31.659 31.659 0 0 1 1.08-30H409zm-377 2c-7.839 0-14 6.161-14 14s6.161 14 14 14 14-6.161 14-14-6.161-14-14-14zm448 0c-7.839 0-14 6.161-14 14s6.161 14 14 14 14-6.161 14-14-6.161-14-14-14zM59.656 361a31.659 31.659 0 0 1 1.08 30H103v-30H59.656zM249 361v30h30v-30h-30zm160 0v30h42.264a31.659 31.659 0 0 1 1.08-30H409zm-377 2c-7.839 0-14 6.161-14 14s6.161 14 14 14 14-6.161 14-14-6.161-14-14-14zm448 0c-7.839 0-14 6.161-14 14s6.161 14 14 14 14-6.161 14-14-6.161-14-14-14zm-128 28h22v18h-22v-18zM59.656 409a31.659 31.659 0 0 1 1.08 30H279v-30H59.656zM409 409v30h42.264a31.659 31.659 0 0 1 1.08-30H409zm-377 2c-7.839 0-14 6.161-14 14s6.161 14 14 14 14-6.161 14-14-6.161-14-14-14zm448 0c-7.839 0-14 6.161-14 14s6.161 14 14 14 14-6.161 14-14-6.161-14-14-14zM32 457c-7.839 0-14 6.161-14 14s6.161 14 14 14 14-6.161 14-14-6.161-14-14-14zm28.736 0a31.659 31.659 0 0 1-1.08 30H87v-30H60.736zM105 457v30h174v-30H105zm304 0v30h43.344a31.659 31.659 0 0 1-1.08-30H409zm71 0c-7.839 0-14 6.161-14 14s6.161 14 14 14 14-6.161 14-14-6.161-14-14-14z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconWoodCabinIcon);
    