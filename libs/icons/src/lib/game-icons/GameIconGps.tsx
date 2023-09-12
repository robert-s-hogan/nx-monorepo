
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconGpsIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'gps'];
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
        <path fill="currentColor" d="M25 57v398h462V57H25zm30 30h306v338H55V87zm78.94 18l10.042 27.62L73 122.48v18.182l77.957 11.14 36.223 99.612 24.806-37.12L172.244 105H133.94zM278 105v18h64v-18h-64zm0 32v18h64v-18h-64zm106 39h82v48h-82v-48zm18 18v12h46v-12h-46zm-59 28.666l-115.803 22.107 7.26 16.936L343 240.99v-18.324zM384 240h82v48h-82v-48zm-174.178 9.928l-57.314 85.77 48.18-11.243 49.18 18.893-40.046-93.42zM402 258v12h46v-12h-46zm23.646 53c22.538 0 41 18.463 41 41s-18.462 41-41 41c-22.537 0-41-18.463-41-41s18.463-41 41-41zm0 18c-12.81 0-23 10.19-23 23s10.19 23 23 23 23-10.19 23-23-10.19-23-23-23zm-226.25 14.24l-17.777 4.15L176.2 407h36.146l5.164-56.8-18.115-6.96z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconGpsIcon);
    