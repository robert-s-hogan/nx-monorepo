
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPalisadeIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'palisade'];
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
        <path fill="currentColor" d="M112 144.836l-9 48V279h18v-86.164l-9-48zm36 0l-9 48V279h18v-86.164l-9-48zm216 0l-9 48V279h18v-86.164l-9-48zm36 0l-9 48V279h18v-86.164l-9-48zm-360 64l-9 48V279h18v-22.164l-9-48zm36 0l-9 48V279h18v-22.164l-9-48zm108 0l-9 48V279h18v-22.164l-9-48zm36 0l-9 48V279h18v-22.164l-9-48zm36 0l-9 48V279h18v-22.164l-9-48zm36 0l-9 48V279h18v-22.164l-9-48zm36 0l-9 48V279h18v-22.164l-9-48zm108 0l-9 48V279h18v-22.164l-9-48zm36 0l-9 48V279h18v-22.164l-9-48zM18 297v16h138.96v-16H18zm156.96 0v16h162.005v-16H174.96zm180.005 0v16H494v-16H354.965zM31 331v156h18V331H31zm36 0v156h18V331H67zm36 0v156h18V331h-18zm36 0v156h18V331h-18zm36 0v156h18V331h-18zm36 0v156h18V331h-18zm36 0v156h18V331h-18zm36 0v156h18V331h-18zm36 0v156h18V331h-18zm36 0v156h18V331h-18zm36 0v156h18V331h-18zm36 0v156h18V331h-18zm36 0v156h18V331h-18z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPalisadeIcon);
    