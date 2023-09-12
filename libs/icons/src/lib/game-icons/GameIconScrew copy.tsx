
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconScrew copyIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'screw copy'];
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
        <path fill="currentColor" d="M259.2 20.25c-24.2.16-49.4 5.94-73 16.17-26.5 40.57-38.4 73.68-30.9 118.98-26.9-15.8-43.1-31.6-48.5-58.83-8.74 11.03-16 22.83-21.41 35.13-14.06 32-15.85 67.5 1.15 104.1L368.2 77.3c-22.6-34.19-53.9-51.23-88.5-55.81-4.7-.62-9.4-1-14.2-1.16-2.1-.1-4.2-.1-6.3-.1zm67.6 101.85l-40.9 23-61.5 93.9-41.3 60.6 15.4 10.6 22-32.3c8.3 12.2 16.8 24.2 25.7 36.1l86.7-120.9c-7.9-14.7-16.2-29.2-24.9-43.5zm-76.1 42.8l-74.4 41.8c7.1 12.6 14.6 25.1 22.4 37.6zm108.2 22.4L239.3 355.5l15.2 10.8 15.4-21.6c11 13.6 22.4 26.9 34.1 39.9l69.4-103.7c-6.7-17.2-14.1-34.2-22-50.9l22.7-31.9zm37.3 93.7l-14.6 21.6s-.1-.1-.1-.2l-24.9 37.3-61.3 90.8 15.4 10.4 19.4-28.7c8 8.2 16.2 16.2 24.6 23.9l47.5-66.9c-3.9-14.9-8.3-29.8-13.1-44.5l22.5-33.3zm26.3 93.1L408.2 394c-.1-.3-.1-.5-.2-.8l-39.4 55.5.1.1-13.5 18.8 15.2 11 12.6-17.5c12.9 10.8 26.2 21 39.6 30.7-1.8-24.3-4.9-48.6-9.3-72.7l24.4-34z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconScrew copyIcon);
    