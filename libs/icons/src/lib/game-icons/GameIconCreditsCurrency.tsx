
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCreditsCurrencyIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'credits-currency'];
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
        <path fill="currentColor" d="M224 22v63.46c-31.9 7.25-58.7 20.94-80.3 41.14-33.7 31.5-50.53 74.7-50.53 129.6 0 54.3 16.53 97.3 49.63 129 21.9 20.9 49 35 81.2 42.1V492h64v-59.4c21.5-.6 42.3-3.2 62.7-7.9 23.5-5.3 56.3-13.2 78.2-23.9l-16-163.8H302l-36 58.8h69.6l8 66.2c-16.2 6.2-36.3 7.1-54.6 7.1-33.5 0-59.4-9.8-77.7-29.5-18.3-19.6-27.4-47.4-27.4-83.4 0-36.4 9.4-64.3 28.3-83.8 19-19.6 46-29.4 80.9-29.4 18.9 0 37.7 2.7 56.4 8 18.9 5.3 33.8 13.4 52.8 24.2l-8-72.5c-18.4-8.35-26-12.66-46.9-16.94-18.9-3.94-38.7-6.06-59.4-6.38V22h-64z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCreditsCurrencyIcon);
    