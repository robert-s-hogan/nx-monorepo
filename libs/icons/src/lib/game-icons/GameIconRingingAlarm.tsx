
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconRingingAlarmIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'ringing-alarm'];
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
        <path fill="currentColor" d="M256 41c-89.577 0-162 72.423-162 162s72.423 162 162 162 162-72.423 162-162S345.577 41 256 41zm151.883 9.932l-12.248 13.19c42.18 39.167 52.373 78.107 55.332 118.46l17.951-1.316c-3.13-42.694-15.447-88.002-61.035-130.334zm49.334.504l-13.16 12.279c16.636 17.828 28.995 43.23 32.785 64.402l17.719-3.172c-4.514-25.216-18.03-52.81-37.344-73.51zM256 158c27.401 0 50 22.599 50 50s-22.599 50-50 50-50-22.599-50-50 22.599-50 50-50zm0 36c-7.945 0-14 6.055-14 14s6.055 14 14 14 14-6.055 14-14-6.055-14-14-14zM61.19 219.252l-17.952 1.316c3.13 42.694 15.447 88.004 61.035 130.336l12.248-13.191c-42.18-39.168-52.373-78.108-55.332-118.461zm396.197 43.543c-13.7 0-25 11.3-25 25 0 12.561 9.5 23.097 21.638 24.764 7.8 43.445-6.374 94.946-45.025 131.992v23.86c52.635-41.742 72.756-105.706 62.557-160.083 6.52-4.534 10.83-12.074 10.83-20.533 0-13.7-11.3-25-25-25zM35.314 273.719l-17.716 3.172c4.513 25.216 18.027 52.81 37.341 73.51l13.16-12.282c-16.636-17.828-28.995-43.228-32.785-64.4zM137 337.965V407h238v-69.035C343.26 365.979 301.595 383 256 383s-87.26-17.021-119-45.035zM121 425v68h270v-68H121z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconRingingAlarmIcon);
    