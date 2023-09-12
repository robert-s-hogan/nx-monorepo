
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAntiAircraftGunIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'anti-aircraft-gun'];
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
        <path fill="currentColor" d="M472.7 22.8l-38.5 44.91L448 84.24l48-34.65zm-50.4 55.05L312.2 178.7l-25.3 8.1-66.3 69.6 22.8 24.7 69.3-65.4 12.9-21.5L435.7 93.27zm-8.7 72.65l-19.9 25.6 10.3 13.4 26.6-19.6zm-32.4 37.1l-68.5 62.3-16 3.6-42.1 39.2 20.7 22.3 43.6-39.5 6.4-13.8 65.2-62.4zm-245.8 67.3c-26.6.3-52.06 25.8-52.33 52.4-.33 17.8 9.08 34.4 24.53 43.3l23.6-7.6c-18-2.1-31.59-17.5-31.39-35.7 0-19.7 15.89-35.7 35.59-35.7 10-.2 19.5 3.8 26.4 11v-17c-8-4.7-17.1-11-26.4-10.7zm44.5 8.2v78.5L120.5 365v23.5h145v-55.2l-65.4-70.2zM87.51 407.2l-43.29 43h13.47l11.54 8 35.57-27.3h107.6l11.5 19.3H245l6.1-19.3h23.4l97.3 28.2 9.6-8.9h16l-106.5-43zm-50.68 59.9l-20.85 22.1h62.55l-20.84-22.1zm187.07 0L203 489.2h62.9L245 467.1zm160.7 0l-19.3 22.1h61L407 467.1z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAntiAircraftGunIcon);
    