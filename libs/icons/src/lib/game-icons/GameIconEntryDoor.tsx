
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconEntryDoorIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'entry-door'];
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
        <path fill="currentColor" d="M217 28.098v455.804l142-42.597V70.697zM119 55v160h18V73h62V55zm257.98.03l.02 2.275V87h16V55zM377 105v16h16v-16zm0 34v236h16V139zm-276.564 58.727L42.162 256l58.274 58.273V279h96v-46h-96zM244 232c6.627 0 12 10.745 12 24s-5.373 24-12 24-12-10.745-12-24 5.373-24 12-24zm-125 65v151h18V297zm258 96v14h16v-14zm0 32v23h16v-23zM32 471v18h167v-18zm290.652 0l-60 18H480v-18z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconEntryDoorIcon);
    