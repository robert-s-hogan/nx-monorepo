
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconOtamatoneIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'otamatone'];
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
        <path fill="currentColor" d="M203.2 24.45c-41.8-.31-44.4 106.35-84.1 111.25-17.6 2.1-37.37-48.81-41.69-38.35C68.58 118.8 104.3 176.7 136.6 174c23.8-2.2 48.4-82.12 54.2-37.5l38.3 231.1c4.3-5.7 9.1-10.9 14.5-15.6 7.7-6.7 16.3-12.4 25.4-16.6L220.2 29.64c-5.5-3.07-10.5-4.69-15-5.09-.7-.1-1.4-.1-2-.1zM309 345.3c-3.2-.1-6.2-.1-9.1.1-14.3.9-31.3 8.7-44.5 20.2-13.1 11.4-22 26.3-22.9 40.1-1.2 17.7 7.6 38.1 22 54.7 14.3 16.5 33.9 28.8 51.7 31.6 20.8 3.3 49.7-3 72.5-15.9 22.8-12.9 38.7-31.5 39.2-50.9v-.1c.4-14.1-6.7-27.9-18.3-40.1a14.45 21.25 0 0 1 2.7 12.3 14.45 21.25 0 0 1-14.4 21.3 14.45 21.25 0 0 1-14.5-21.3 14.45 21.25 0 0 1 14.5-21.2 14.45 21.25 0 0 1 2.3.3c-3.7-3-7.6-5.9-11.9-8.6-21.1-13.3-47.5-21.7-69.3-22.5zm12.5 29.6a16.85 24.78 0 0 1 16.8 24.8 16.85 24.78 0 0 1-16.8 24.8 16.85 24.78 0 0 1-16.8-24.8 16.85 24.78 0 0 1 16.8-24.8z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconOtamatoneIcon);
    