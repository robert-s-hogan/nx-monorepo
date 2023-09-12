
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTiredEyeIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'tired-eye'];
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
        <path fill="currentColor" d="M255.7 136.9c-87.5 0-147.7 38.5-207.05 106.3 67.05-19.8 134.05-31.6 200.55-32.7 2.4 0 4.8-.1 7.2-.1 62.2-.3 124 8.7 185.3 29.3-18.3-18.2-34.6-37.8-53.6-54.8-30.6-27-67.4-48-132.4-48zm34.1 93.1a37.23 37.23 0 0 1 3.1 15 37.23 37.23 0 0 1-1.7 10.9 18.61 18.61 0 0 0-16.9-10.9 18.61 18.61 0 0 0-18.6 18.7 18.61 18.61 0 0 0 10.9 16.9 37.23 37.23 0 0 1-10.9 1.6 37.23 37.23 0 0 1-37.3-37.2 37.23 37.23 0 0 1 3-14.6c-9.9.6-19.8 1.5-29.6 2.5-.8 4-1.2 8-1.2 12.1 0 36.1 29 65 65.1 65 36.1 0 65-28.9 65-65 0-4.3-.4-8.6-1.3-12.7-9.8-1.1-19.8-1.8-29.6-2.3zm49.2 4.7c.4 3.4.6 6.8.6 10.3 0 46.2-37.7 83.9-83.9 83.9s-83.8-37.7-83.8-83.9c0-3.3.2-6.5.6-9.7-42 5.8-84.03 15.5-126.42 28.3 65.52 32.2 137.42 72.7 209.62 72.7 61.2 0 121.5-14 204-70-40.1-15.5-80.3-25.9-120.7-31.6zm126.9 50.2c-15.2 10.1-29.9 18.9-44 26.6-64 74.6-160.7 104.3-267.4 108.7l.9 18.9c110.3-4.6 214-36.4 282.2-117.1-19.2 52.3-61.3 92.6-104.6 134.4l13.2 13.6c53.4-51.6 110-104.8 119.7-185.1z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTiredEyeIcon);
    