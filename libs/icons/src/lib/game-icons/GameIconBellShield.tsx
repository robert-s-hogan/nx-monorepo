
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBellShieldIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'bell-shield'];
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
        <path fill="currentColor" d="M214.4 76.46c0 16.75 5.8 31.54 14.3 41.84l10.2 12.2-15.6 2.9c-11.1 2.1-19.2 7.9-26.1 17.4-6.9 9.5-12.2 22.8-15.9 38-6.7 27.7-8.2 61.5-8.5 91.2h36.8l10 135.2c25.6 5.8 53 5.6 77.6 0l9-135.2h34.9c0-30.1-.4-64.3-6.5-92.2-3.3-15.4-8.4-28.6-15.4-38-7-9.4-15.5-15.2-27.9-17.1l-15.9-2.5 10-12.6c8.2-10.1 13.7-24.8 13.7-41.14 0-32.41-20.3-56.4-42.3-56.4-24.9-.32-41.9 33.01-42.4 56.4zm-28.2-52.41C109.1 77.81 19.73 258 19.73 425.3v.9c0 6.6 4.41 14.2 15.57 22.4 11.15 8.3 28.37 16.3 50.01 23.1 43.29 13.5 104.09 22.1 171.39 22.1 67.2 0 128-8.6 171.3-22.1 21.7-6.8 38.9-14.8 50-23.1 11.2-8.2 15.6-15.8 15.6-22.4 0-1.2-.1-2.4-.4-3.7-1-166.4-89.8-344.98-166.4-398.45C399.4 161 408.3 318.8 399.7 443.2c-33.4 13.4-85.1 22-143 22-58.2 0-110.1-8.7-143.5-22.2-13.49-173 12.9-342.3 73-418.95z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBellShieldIcon);
    