
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDoorHandleIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'door-handle'];
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
        <path fill="currentColor" d="M73 41v430h174V220.8c-.3 0-.7-.1-1-.1-21.5-2.9-39.3-2.1-48.7 1.9A71.88 71.88 0 0 1 160 233c-40.2 0-73-32.8-73-73s32.8-73 73-73c29 0 54.1 17 65.9 41.4.2.3.6.7 1.4 1.1 2 1.1 5.4 2.7 10 4.5 2.8 1.1 6.1 2.4 9.7 3.7V41H73zm152.9 87.4c-.4-.5-.2-.4.7 1.5-.2-.5-.5-1-.7-1.5zM160 105c-30.4 0-55 24.6-55 55s24.6 55 55 55c10.7 0 20.5-3 28.9-8.2l.6-.4.6-.3c15.3-6.6 35.3-6.4 58.3-3.3 23.1 3.2 49.2 9.6 75.6 17.6 52.7 16.1 106.4 38.4 137.2 53.5 9 4.5 12.2 3.2 14.2 1.5 2-1.7 4.1-6.8 3.6-14.2-1.1-14.7-12-34.7-32.3-41-78.3-24.5-135.1-42-173-54.4-18.9-6.2-33.1-11.1-43.1-15.1-5-2-8.9-3.7-12-5.5-3.2-1.7-6-2.4-8.4-7.8-8.7-19.1-27.8-32.4-50.2-32.4zm0 183a32 32 0 0 1 32 32 32 32 0 0 1-11.9 24.8L192 416h-64l11.9-71.2A32 32 0 0 1 128 320a32 32 0 0 1 32-32z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconDoorHandleIcon);
    