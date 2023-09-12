
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDungeonLightIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'dungeon-light'];
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
        <path fill="currentColor" d="M128 65c-4.37 0-8.74.485-13 1.469V151h26V66.469A57.805 57.805 0 0 0 128 65zm-31 9.354C83.018 84.017 73 101.452 73 128v23h24V74.354zm62 0V151h24v-23c0-26.548-10.018-43.983-24-53.646zm38.176 26.148C199.634 108.783 201 117.962 201 128v137H73.23L304 490h186V384L197.176 100.502zM73 169v78h24v-78H73zm42 0v78h26v-78h-26zm44 0v78h24v-78h-24z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconDungeonLightIcon);
    