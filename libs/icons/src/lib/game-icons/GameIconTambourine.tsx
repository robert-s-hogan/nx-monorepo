
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTambourineIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'tambourine'];
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
        <path fill="currentColor" d="M256 59.5a48 48 0 0 0-41.8 24.55c13.3-2.32 27.2-3.55 41.8-3.55 14.6 0 28.6 1.24 41.9 3.56A48 48 0 0 0 256 59.5zm0 39c-99.4 0-163.7 59.3-186.6 132.3-23 73.2-6.4 160.5 52.3 219v.1l2.6 2.6h3.7c17.8 0 32.9-7.3 50.5-14.7l-3.6-17.9c-15.4 6.1-27.4 11.3-38 13.5l-5.1 1.1-3.5-3.9c-48.4-53.3-62-130.1-41.7-194.4 20.9-66.7 77-119.7 169.4-119.7 92.3 0 148.5 53 169.4 119.7 20.3 64.3 6.7 141.1-41.7 194.4l-3.5 3.9-5.1-1.1c-10.6-2.2-22.6-7.4-38-13.5l-3.6 17.9c17.6 7.4 32.7 14.7 50.5 14.7h3.7l2.6-2.6v-.1c58.7-58.5 75.3-145.8 52.3-219-22.9-73-87.2-132.3-186.6-132.3zm-151 34a48 48 0 0 0-48 48 48 48 0 0 0 4.6 20.4c11.7-25.5 28.5-48.7 49.9-67.9a48 48 0 0 0-6.5-.5zm302 0a48 48 0 0 0-6.5.5c21.4 19.2 38.2 42.4 49.9 67.9a48 48 0 0 0 4.6-20.4 48 48 0 0 0-48-48zm-151 2c-13.3 0-25.7 1.1-37.2 3.2a48 48 0 0 0 37.2 17.8 48 48 0 0 0 37.2-17.7c-11.5-2.2-23.9-3.3-37.2-3.3zm-104.7 33.7c-19.3 16-33.4 36.7-42.7 60.1a48 48 0 0 0 44.4-47.8 48 48 0 0 0-1.7-12.3zm209.3 0a48 48 0 0 0-1.6 12.3 48 48 0 0 0 44.5 47.9c-9.4-23.5-23.5-44.2-42.9-60.2zM95.7 299.4c.5 23.4 5.3 46.9 14.4 68.8a48 48 0 0 0 8.9-27.7 48 48 0 0 0-23.3-41.1zm320.6 0a48 48 0 0 0-23.3 41.1 48 48 0 0 0 8.9 27.8c9.1-22 13.9-45.5 14.4-68.9zm-374.8 3.3A48 48 0 0 0 23 340.5a48 48 0 0 0 35.9 46.4c-11-26.9-16.7-55.6-17.4-84.2zm429.1 0c-.8 28.6-6.5 57.2-17.5 84.2a48 48 0 0 0 35.9-46.4 48 48 0 0 0-18.4-37.8zM256 402.5c-25.6 0-46.5 5-64 11l3.5 17.7c16.8-5.9 36.2-10.7 60.5-10.7 24.3 0 43.7 4.8 60.5 10.7l3.5-17.7c-17.5-6-38.4-11-64-11z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTambourineIcon);
    