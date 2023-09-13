
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconVideoConferenceIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'video-conference'];
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
        <path fill="currentColor" d="M256 23c-22.5 0-41 18.46-41 41s18.5 41 41 41 41-18.46 41-41-18.5-41-41-41zm0 82H41v270h430V105H256zm0-64c12.8 0 23 10.19 23 23s-10.2 23-23 23-23-10.19-23-23 10.2-23 23-23zM64 128h384v224H322.9c-.3-37.8-3.8-100.3-47.9-114a44.51 50 0 0 0 25.6-45.2 44.51 50 0 0 0-44.5-50 44.51 50 0 0 0-44.5 50 44.51 50 0 0 0 25.6 45.2c-44.1 13.7-47.6 76.2-47.9 114H64V128zm133.9 263.5l-12.4 62h138l-12.4-62H197.9zM160 471v18h192v-18H160z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconVideoConferenceIcon);
    