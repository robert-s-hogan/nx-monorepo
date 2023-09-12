
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDoorWatcherIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'door-watcher'];
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
        <path fill="currentColor" d="M105 25v462h302V25H105zm44 28h214v150H149V53zm18 18v114h178V71H167zm16 16h146v82H183V87zm15.8 25c.8 7.9 5.2 18 11.1 24.8 11.2-.2 25.9-3.4 36.1-8.8-21-2.3-38.9-9.3-47.2-16zm114.4 0c-8.3 6.7-26.2 13.7-47.2 16 10.2 5.4 24.9 8.6 36.1 8.8 5.9-6.8 10.3-16.9 11.1-24.8zM256 279h128v18h-17v14h17v18h-64v-18h29v-14h-93v-18z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconDoorWatcherIcon);
    