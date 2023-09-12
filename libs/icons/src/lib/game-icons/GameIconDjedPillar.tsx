
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDjedPillarIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'djed-pillar'];
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
        <path fill="currentColor" d="M215.6 25l-3.5 21H144v18h224V46h-68.1l-3.5-21h-80.8zm-34.4 55c2.8 3.14 5.5 6.32 8 9.6 4.7 6.29 8.7 13 10.5 20.4h112.6c1.8-7.4 5.8-14.11 10.5-20.4 2.5-3.28 5.2-6.46 8-9.6H181.2zM144 126v18h224v-18H144zm37.2 34c2.8 3.1 5.5 6.3 8 9.6 4.7 6.3 8.7 13 10.5 20.4h112.6c1.8-7.4 5.8-14.1 10.5-20.4 2.5-3.3 5.2-6.5 8-9.6H181.2zM144 206v18h224v-18H144zm37.2 34c2.8 3.1 5.5 6.3 8 9.6 4.7 6.3 8.7 13 10.5 20.4h112.6c1.8-7.4 5.8-14.1 10.5-20.4 2.5-3.3 5.2-6.5 8-9.6H181.2zM144 286v18h224v-18H144zm37.2 34c2.8 3.1 5.5 6.3 8 9.6 4.7 6.3 8.7 13 10.5 20.4h112.6c1.8-7.4 5.8-14.1 10.5-20.4 2.5-3.3 5.2-6.5 8-9.6H181.2zm19.8 48v16c0 19-8.8 39.9-21.3 60.6-8.8 14.8-19.7 29.3-31.1 42.4h214.8c-11.4-13.1-22.3-27.6-31.1-42.4C319.8 423.9 311 403 311 384v-16H201z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconDjedPillarIcon);
    