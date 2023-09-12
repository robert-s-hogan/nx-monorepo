
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBatteryPackAltIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'battery-pack-alt'];
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
        <path fill="currentColor" d="M226 16c-24.93 0-45 13.38-45 30v15h-45c-29.547 0-60 30.453-60 60v315c0 29.547 30.453 60 60 60h240c29.547 0 60-30.453 60-60V121c0-29.547-30.453-60-60-60h-45V46c0-16.62-20.07-30-45-30h-60zm-90 105h240v315H136V121zm120 30v105h-75l75 150V301h75l-75-150z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBatteryPackAltIcon);
    