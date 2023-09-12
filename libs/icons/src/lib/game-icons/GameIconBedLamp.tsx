
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBedLampIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'bed-lamp'];
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
        <path fill="currentColor" d="M165.563 25l-87 174H432.93L339.207 25H165.563zM233 217v30h46v-30h-46zm-9 48c-1 0-9.308 1.608-18.52 5.15-9.21 3.543-20.243 8.823-30.648 15.444C154.023 298.836 137 317 137 336c0 59.297 28.834 104.436 59.836 151h118.328C346.166 440.436 375 395.297 375 336c0-19-17.023-37.164-37.832-50.406-10.405-6.621-21.437-11.9-30.648-15.444C297.308 266.608 289 265 288 265h-64z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBedLampIcon);
    