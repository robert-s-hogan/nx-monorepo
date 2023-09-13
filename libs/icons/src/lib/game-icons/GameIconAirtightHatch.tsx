
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAirtightHatchIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'airtight-hatch'];
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
        <path fill="currentColor" d="M169 25v30h174V25H169zm-37.271 48L41 163.729V487h46V377H57V263h30v-74.729L156.271 119H355.73L425 188.271V375h46V163.729L380.271 73H131.73zm32 64L105 195.729V263h30v32h133.271L295 268.271V227.73l-48-48V137h-83.271zM265 137v35.271l48 48v55.458L293.729 295H407v-99.271L348.271 137H265zM75 281v78h42v-78H75zm60 32v14h272v-14H135zm0 32v32h-30v110h142v-19.271l-48-48V364.27L218.271 345H135zm108.729 0L217 371.729v40.542l48 48V487h142V345H243.729zM425 393v94h46v-94h-46z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAirtightHatchIcon);
    