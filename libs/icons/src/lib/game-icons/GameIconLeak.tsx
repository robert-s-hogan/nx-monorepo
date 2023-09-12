
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconLeakIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'leak'];
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
        <path fill="currentColor" d="M367 32s-37.8 51.9-32 80c3 14.8 16.9 32 32 32 15.1 0 29-17.2 32-32 5.8-28.1-32-80-32-80zM160.2 133.4s-37.8 51.9-32 80c3 14.8 16.9 32 32 32 15.1 0 29-17.2 32-32 5.8-28.1-32-80-32-80zm241.1 134.1a91.23 38.36 0 0 0-83.9 23.4 210 77.59 0 0 0-79.7-5.9 210 77.59 0 0 0-210 77.6 210 77.59 0 0 0 210 77.6 210 77.59 0 0 0 68.2-4.3 82.62 29.64 0 0 0-4.5 9.6 82.62 29.64 0 0 0 82.6 29.6 82.62 29.64 0 0 0 82.6-29.6 82.62 29.64 0 0 0-76.8-29.5 210 77.59 0 0 0 57.9-53.4 210 77.59 0 0 0-8.6-21.8 91.23 38.36 0 0 0 53.4-34.9 91.23 38.36 0 0 0-91.2-38.4zM107.8 457.6A43.89 17.43 0 0 0 63.91 475a43.89 17.43 0 0 0 43.89 17.4 43.89 17.43 0 0 0 43.9-17.4 43.89 17.43 0 0 0-43.9-17.4z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconLeakIcon);
    