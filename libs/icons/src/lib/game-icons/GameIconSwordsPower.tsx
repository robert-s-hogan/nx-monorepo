
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSwordsPowerIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'swords-power'];
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
        <path fill="currentColor" d="M105.7 41.16l-47.03 1.31 29.3 36.85L116 69.13zm300.6 0L396 69.14l28 10.2 29.3-36.86zm-278.4 8.18L139 79.87l-30.5 11.14L370.7 213.1l19.4-41.6zm256.2 0l-106.7 49.7 54.4 25.36 71.7-33.38L373 79.88zM180.2 144.3l-58.3 27.2 19.4 41.6 93.3-43.4zm241.1 2.8l-49.2 105.5 13 14.9 55.9-120zm-330.63.1l-19.6.4 55.83 119.8 12.9-14.8zm349.43 44.7l-30.6 65.6-34 84.7-55.8 33.3c-3.1 7.3-6.8 14-11.2 20C295.7 413.2 277 425 256 425s-39.7-11.8-52.5-29.5c-4.4-6.1-8.2-12.8-11.3-20.2l-55.1-33.2-27.9-70-37.13-79.7-29.5 19.4 45.5 151.8 81.23 97.1V487h174v-26.2l80.6-97.1 45.6-151.9zM256 249c-14.3 0-27.7 7.9-38 22.1-10.3 14.1-17 34.4-17 56.9s6.7 42.8 17 56.9c10.3 14.2 23.7 22.1 38 22.1s27.7-7.9 38-22.1c10.3-14.1 17-34.4 17-56.9s-6.7-42.8-17-56.9c-10.3-14.2-23.7-22.1-38-22.1z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSwordsPowerIcon);
    