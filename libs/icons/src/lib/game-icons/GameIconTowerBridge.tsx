
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTowerBridgeIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'tower-bridge'];
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
        <path fill="currentColor" d="M112 43.89L97.422 93.464 73 79.51V135h23v-16h32v16h23V79.51l-24.422 13.955L112 43.89zm288 0l-14.578 49.575L361 79.51V135h23v-16h32v16h23V79.51l-24.422 13.955L400 43.89zM73 153v270h78V153H73zm288 0v270h78V153h-78zM96 183h32v36H96v-36zm73 0v18h174v-18H169zm215 0h32v34h-32v-34zM55 218.078c-11.034 17.617-25.57 34.478-39 50.197v27.036c13.07-14 27.55-29.07 39-44.974v-32.258zm402 0v32.258c11.45 15.903 25.93 30.973 39 44.975v-27.035c-13.43-15.72-27.966-32.58-39-50.197zM96 247h32v18H96v-18zm288 0h32v18h-32v-18zM96 311h32v18H96v-18zm288 0h32v18h-32v-18zM16 375v18h39v-18H16zm80 0h32v18H96v-18zm73 0v18h58.47c-22.307 3.12-42.002 9.613-58.47 17.227V423h16v.268C204.803 415.183 228.99 409 256 409c27.01 0 51.197 6.183 71 14.268V423h16v-12.773c-16.468-7.614-36.163-14.106-58.47-17.227H343v-18H169zm215 0h32v18h-32v-18zm73 0v18h39v-18h-39zM57 441v46h110v-46H57zm288 0v46h110v-46H345z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTowerBridgeIcon);
    