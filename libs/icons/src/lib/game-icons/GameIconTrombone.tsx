
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTromboneIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'trombone'];
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
        <path fill="currentColor" d="M92.2 34.29h-2.29c-15.74.37-31.19 7.48-41.51 20.73-8.73 11.3-13.05 25.74-11.34 40.04 1.7 14.34 9.3 27.44 20.43 36.24l118.81 94.3-10.5 13.1-11.1-9-14.7 19.4s34.9 27.7 52.3 41.4l15.4-19.7-28.8-21.8 10.5-13.1 28.7 21.7 15.5-19.6L73.28 111.7c-6.61-4.8-10.48-11.85-11.4-19.58-.92-7.72 1.18-15.49 6.48-21.67 9.87-12.71 28.34-14.92 41.04-4.9l58.2 45.85c.3.2 70.3 55.3 106.4 102.4 7.2 9.4 13 18.3 16.4 26.3 2.1 5.3 3.7 9.8 2.1 13.5-2.4 5.8-.2 12.5 5.2 15.7 5.3 3.1 12.2 1.8 16.1-3.1l54.1-68.8c3.9-4.9 3.5-11.9-.9-16.4-4.3-4.5-11.4-5.1-16.4-1.3-3.2 2.4-7.9 1.9-13.5 1.1-8.6-1.4-18.7-4.9-29.5-9.7-54.2-24.1-124.2-79.18-124.7-79.45l-58.1-45.74a54.34 54.34 0 0 0-32.6-11.62zM110 76.64 84.01 109.7 97.12 120l25.98-33.06zm32 24.06-25.9 33.1 13 10.3L155 111zm55.4 43.7-26 33 13 10.4 26-33.1zm-75.1 55.8L104 223.5l23.5 13.5 13.5-17.2zm124.3 48.1-41.2 52.5 215.8 169.8c14.5 11.4 35.5 8.9 47-5.6 11.3-14.5 8.8-35.5-5.6-46.8zm-.7 32.5 201.2 157c3.6 2.8 4.3 8.1 1.4 11.8-2.9 3.6-8.2 4.3-11.8 1.4L235.6 294z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTromboneIcon);
    