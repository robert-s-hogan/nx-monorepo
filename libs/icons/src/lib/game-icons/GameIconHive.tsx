
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHiveIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'hive'];
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
        <path fill="currentColor" d="M196 16s-60 20.07-60 45h-15c-33.24 0-60 20.07-60 45 0 11.496 5.61 22.062 15 30-33.24 0-60 30.915-60 60s26.76 45 60 45h30.47C111.154 160.246 153.625 93.326 211 69.906V16h-15zm105 0v53.906c57.372 23.42 99.844 90.34 104.53 171.094H436c33.24 0 60-15.915 60-45s-26.76-60-60-60c9.392-7.938 15-18.504 15-30 0-24.93-26.76-45-60-45h-15c0-24.93-60-45-60-45h-15zm-44.156 105a30 30 0 0 0-30.875 29.97 30 30 0 0 0 60 0A30 30 0 0 0 256.843 121zm.5 90.063a45 45 0 0 0-46.313 44.968 45 45 0 0 0 90 0 45 45 0 0 0-43.686-44.967zM151.844 226a30 30 0 0 0-30.875 29.97 30 30 0 0 0 60 0A30 30 0 0 0 151.843 226zm210 0a30 30 0 0 0-30.875 29.97 30 30 0 0 0 60 0A30 30 0 0 0 361.843 226zM76 271c-33.24 0-60 15.915-60 45s26.76 60 60 60c-9.39 7.938-15 18.504-15 30 0 24.93 26.76 45 60 45h15c0 24.93 60 45 60 45h15v-53.906c-57.372-23.42-99.844-90.34-104.53-171.094H76zm329.53 0c-4.685 80.754-47.156 147.674-104.53 171.094V496h15s60-20.07 60-45h15c33.24 0 60-20.07 60-45 0-11.496-5.608-22.062-15-30 33.24 0 60-30.915 60-60s-26.76-45-60-45h-30.47zm-148.686 60a30 30 0 0 0-30.875 29.97 30 30 0 0 0 60 0A30 30 0 0 0 256.843 331z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHiveIcon);
    