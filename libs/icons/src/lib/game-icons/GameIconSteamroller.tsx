
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSteamrollerIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'steamroller'];
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
        <path fill="currentColor" d="m194.8 114.6-21.8 4.6-4 22.8 13.1 8.2-12.5 87.6c-71.85 9.7-106.95 58.9-106.95 58.9s34.1-27.6 100.45-26.2l31.7 35.7h73.3l57.9-51.9 6.4-18.2H324l-10.7-89.2 3.7-5.8v-18.7zm10 39.1 85.7.7 10.6 81-107.6.2zm181.5 112.8c-33 0-61.9 19.2-75.5 47.1H462c-13.7-27.9-42.4-47.1-75.7-47.1zm-236.2 26.8-6.2.4c-93.55 5.5-117.15 59.7-117.15 59.7l-1.2 2.5V401h25v-39c5.1-8 27.9-37.5 88.55-42.9l24.9 29.2 8.1 9.5 19.2-16.3zm67.7 35.8v16.7h38.5v-16.7zm68.2 1.2-12.1 20.4 12.1 20.4h135.2l64.3-23v-17.8zm-171.1 12.9c-24.75 0-44.95 20.2-44.95 45S90.15 433 114.9 433c25 0 45.1-20 45.1-44.8 0-24.8-20.1-45-45.1-45zm102.9 18 .1 16.7h38.4v-16.7zm-102.9 7c11.1 0 20.1 9 20.1 20 0 11.1-9 19.8-20.1 19.8-11 0-19.95-8.7-19.95-19.8 0-11 8.95-20 19.95-20zm352.9 3.9-43.7 15.6H310.7c13.7 28.3 42.5 47.3 75.6 47.3 39.2 0 72-27 81.5-62.9zm-249.9 21.2V410h38.4v-16.7z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSteamrollerIcon);
    