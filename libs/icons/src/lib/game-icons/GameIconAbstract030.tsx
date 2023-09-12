
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAbstract030Icon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'abstract-030'];
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
        <path fill="currentColor" d="m210.287,20.9997c-95.5558,18.4904-170.817,93.7559-189.287,189.3473h163.1009c25.3227,0 45.638,20.1723 45.638,45.5032s-20.3153,45.8027-45.638,45.8027h-163.1009c18.4701,95.5914 93.7312,170.8569 189.287,189.3473v-163.1531c0-25.3307 20.3153-45.6529 45.6384-45.6529s45.7875,20.3222 45.7875,45.6529v163.1531c95.5553-18.4904 170.8174-93.7559 189.2871-189.3473h-162.9511c-25.3227,0-45.7879-20.4717-45.7879-45.8027s20.4652-45.5032 45.7879-45.5032h162.9511c-18.4696-95.5914-93.7312-170.8569-189.2866-189.3473v162.8537c0,25.3307-20.4652,45.8026-45.7879,45.8026s-45.6384-20.4719-45.6384-45.8026v-162.8537z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAbstract030Icon);
    