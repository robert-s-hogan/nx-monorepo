
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconShieldImpactIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'shield-impact'];
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
        <path fill="currentColor" d="M193.7 19.2l40.1 107.9-7.1-107.9h-33zm99.3 0l2.3 100.4 22.6-100.4H293zm159.1 0L306.3 170.5l36.2 11.4L492.6 26.15V19.2h-40.5zm40.5 111c-58.4 39.6-125.8 86.4-125.8 86.4l125.8-15.9v-70.5zm-372.8 3c-19.8 51.9-56.72 98-101.44 141.3C61.35 342.9 110.5 402 156.6 440.7c23.7 19.9 46.6 34.4 66.9 42.1 20.3 7.8 37.6 8.7 51.5 3.1 10.1-4.1 17.7-16.3 22.1-37.1 4.5-20.8 5.3-48.9 3.7-80.3-1.7-33-6.1-69.5-11.4-105.8l-16.4 17 .4 20.4-83.6 39.8 6 24.3 53.1 8.4-2.8 17.8-45.7-7.2 5.5 22.5-17.4 4.2-13.2-54-52.9 10.4-3.4-17.6 35.6-7 6.1-13.9-44-31.8-40.59-20 7.96-16.2 30.53 15 7.1-30.3 17.6 4.2-8.5 35.3 37.2 26.8 34.3-79.3 20.5-.4 52.9-54.9-.3-2.1c-45.9-7.9-99.5-15.4-155.6-40.9zM292.3 185l-13 13.5 36.2 11.4 13-13.5-36.2-11.4zm-27 28l-17 17.7 14.8-.3 9-.2.4 24.2 29-30-36.2-11.4zm227.3 27.6c-65.3 10.2-149.5 23.7-149.5 23.7l149.5 20.9v-44.6zm-238.1 8l-40.2.7-32.2 74.4 73.1-34.8-.7-40.3z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconShieldImpactIcon);
    