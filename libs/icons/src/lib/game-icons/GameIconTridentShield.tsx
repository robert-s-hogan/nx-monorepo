
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTridentShieldIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'trident-shield'];
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
        <path fill="currentColor" d="M256 27.93l-77 92.47-5.8-2c-40.9-13.6-71.3-27.85-99.6-51.64 1.29 28.41 4.96 62.54 11.24 95.44 7.89 41.4 20.06 80.8 34.66 102.7 15.5 23.2 31.5 38.4 38.8 55.5 3.6 8.5 4.4 18.5.1 27.7-3.9 7.9-10.9 14.9-21.1 22.2 1.3 19.6 11.7 39.8 31.1 59.2 20.2 20.3 50.1 39.2 87.6 54.6 37.5-15.4 67.4-34.3 87.6-54.6 19.4-19.4 29.8-39.6 31.1-59.2-10.2-7.3-17.2-14.3-21.1-22.2-4.3-9.2-3.5-19.2.1-27.7 7.3-17.1 23.3-32.3 38.8-55.5 14.6-21.9 26.8-61.3 34.7-102.7 6.2-32.9 9.9-67.03 11.2-95.44-28.3 23.79-58.7 38.04-99.6 51.64l-5.8 2zm0 77.87l30.6 61.1H265v62h50.5l43.9-58.6-6.7-5-11.7-8.7 61-30.7-11.9 67.2-16.2-12.1-49.4 65.9H265v142h21.6L256 450l-24.1-48.1-6.5-13H247v-142h-59.5L138.1 181l-16.2 12.1-11.9-67.2 48 24.2 13 6.5-18.4 13.7 43.9 58.6H247v-62h-21.6z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTridentShieldIcon);
    