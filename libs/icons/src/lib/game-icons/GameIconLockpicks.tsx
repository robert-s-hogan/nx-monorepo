
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconLockpicksIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'lockpicks'];
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
        <path fill="currentColor" d="M256 22.98v18c8.4 0 12.5-.14 15.3 2.63 2.9 2.77 7.2 12.37 7.7 36.55V247h18V79.81c.8-17.14-3-38.58-13.1-49.07-6.7-6.52-14.8-7.62-21.6-7.76H256zM448 23c-13.7 0-25 11.3-25 25 0 6.78 2.8 12.96 7.2 17.49-.4.67-.9 1.36-1.3 2.06-3.9 6.7-5.9 14.96-5.9 23.97 0 8.98 2 17.28 5.9 23.98 2.4 4.1 5.8 7.9 10.1 10.2v118.4c3-.7 6-1.1 9-1.1s6 .4 9 1.1V125.7c4.3-2.3 7.7-6.1 10.1-10.2 3.9-6.7 5.9-15 5.9-23.98 0-9.01-2-17.27-5.9-23.97-.4-.7-.9-1.39-1.3-2.06 4.4-4.53 7.2-10.71 7.2-17.49 0-13.7-11.3-25-25-25zm-68 .95L331.9 48l32 16-27.1 13.54L359 99.73V215h18V92.27l-9.8-9.8L404.1 64l-32-16 15.9-7.95-8-16.1zM119 24v223h18V64l-18-40zm64 31v50h16v161.4l18-9V105h16V55h-50zM39 64v202.3l9 9 9-9V169h23v-18H57v-14h23v-18H57v-14h23V87H57V64H39zm306 169v247c0 20 46 20 46 0V233h-46zm103 28c-11.5 0-23 7-23 27v192c0 20 46 20 46 0V288c0-20-11.5-27-23-27zm-343 4v215c0 20 46 20 46 0V265h-46zm160 0v215c0 20 46 20 46 0V265h-46zm-34 5.6l-46 23V480c0 20 46 20 46 0V270.6zm-206 7.1V480c0 20 46 20 46 0V277.7l-23 23-23-23z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconLockpicksIcon);
    