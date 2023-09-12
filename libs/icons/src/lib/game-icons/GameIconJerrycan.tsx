
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconJerrycanIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'jerrycan'];
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
        <path fill="currentColor" d="M374.014 53.123c-.72-.008-1.435.002-2.15.033-1.758.076-3.503.267-5.235.57-13.857 2.41-27.79 12.364-38.913 30.905-13.823 23.04-37.3 32.308-61.654 35.438-23.677 3.043-49.05 1.085-72.016.97L105 165.564V487h302V67.955c-11.04-10.112-22.205-14.706-32.986-14.832zM201.514 55l-16.873 50.617 5.235-2.617H192c4.122 0 8.278.064 12.44.145L214.485 73h99.285c4.337-6.844 9.166-12.885 14.41-18H201.514zm173.884 22.354l17.204 5.292L329 289.352v109.625l60.123 41.623-10.246 14.8-90.133-62.4H176v-.775l-40.512 60.767-14.976-9.984L183 349.275V242.068l-60.21-42.728 10.42-14.68L221.052 247H323.2l52.198-169.646zM144.713 96.602l-41.576 19.68 12.836 27.116 41.576-19.68L144.712 96.6zM201 265v110h110V265H201z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconJerrycanIcon);
    