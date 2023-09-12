
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconLaptopIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'laptop'];
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
        <path fill="currentColor" d="M73 25v238h366V25H283v16h140v192H89V41h140V25H73zm174 0v16h18V25h-18zM107 59v156h298V59H107zM71.03 281l-43.5 174H484.5L441 281h-29.9l20 96h-99.6l16 64H163.8l20-64H80.93l19.97-96H71.03zm48.27 0l-2.9 14H147l2.3-14h-30zm48.4 0l-2.3 14h30.7l1.7-14h-30.1zm48.2 0l-1.7 14H247v-14h-31.1zm49.1 0v14h32.8l-1.7-14H265zm49.2 0l1.7 14h30.7l-2.3-14h-30.1zm48.5 0l2.3 14h30.6l-2.9-14h-30zm-250 32l-3 14h31.9l2.4-14h-31.3zm49.7 0l-2.4 14h32.1l1.7-14h-31.4zm49.5 0l-1.7 14H247v-14h-35.1zm53.1 0v14h36.8l-1.7-14H265zm53.2 0l1.7 14H352l-2.4-14h-31.4zm49.8 0l2.4 14h31.9l-3-14H368zm-262 32l-2.9 14h33.2l2.3-14H106zm51 0l-2.3 14h33.4l1.7-14H157zm50.9 0l-1.7 14H247v-14h-39.1zm57.1 0v14h40.8l-1.7-14H265zm57.2 0l1.7 14h33.4l-2.3-14h-32.8zm51.2 0l2.3 14h33.2l-2.9-14h-32.6zm-170.8 32l-14.4 46h136.3L313 377H202.6zM28 473v18h456v-18H28z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconLaptopIcon);
    