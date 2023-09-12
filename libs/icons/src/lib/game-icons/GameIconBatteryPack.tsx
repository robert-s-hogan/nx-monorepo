
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBatteryPackIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'battery-pack'];
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
        <path fill="currentColor" d="M230.218 16c-14.245 0-51.563 11.946-51.563 26.718v26.718h-51.093C99.072 69.436 76 93.326 76 122.874V442.56C76 472.11 99.072 496 127.563 496h256.875c28.49-.002 51.562-23.892 51.562-53.44V122.874c0-29.547-23.072-53.437-51.563-53.437h-51.093V42.718c0-14.774-37.317-26.718-51.562-26.718H230.22zM256 122.875V256h102.657L256 442.563V309.438H153.343L256 122.875z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBatteryPackIcon);
    