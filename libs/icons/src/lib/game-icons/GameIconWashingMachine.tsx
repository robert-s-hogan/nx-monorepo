
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconWashingMachineIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'washing-machine'];
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
        <path fill="currentColor" d="M73 41v78h110V41H73zm128 0v78h238V41H201zm199 23a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm-176 7h48v18h-48V71zm80 0h48v18h-48V71zM73 137v350h366V137H73zm183 30c82.7 0 150 67.3 150 150s-67.3 150-150 150-150-67.3-150-150 67.3-150 150-150zm0 18c-73 0-132 59-132 132s59 132 132 132c48.5 0 90.8-26 113.7-64.9L339.6 360a94.02 94.02 0 0 1-83.6 51 94.02 94.02 0 0 1-94-94 94.02 94.02 0 0 1 94-94 94.02 94.02 0 0 1 85.7 55.3l30.4-24.3c-22.3-41.1-65.9-69-116.1-69zm-6.9 62c-50.1 1.1-76.9 51-62 93.9-.7-37.8 30.1-78 62-93.9zm130.6 23.9l-32 25.6A94.02 94.02 0 0 1 350 317a94.02 94.02 0 0 1-3.5 25.5l31.4 25.2C384.4 352.1 388 335 388 317c0-16.2-2.9-31.8-8.3-46.1z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconWashingMachineIcon);
    