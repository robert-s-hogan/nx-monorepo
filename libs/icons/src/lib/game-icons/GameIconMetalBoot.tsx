
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMetalBootIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'metal-boot'];
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
        <path fill="currentColor" d="M269 23.95l-87.7.1c1.1 61.4-2.4 116.05-14 159.45-9 34-23.6 61.6-45.2 79-.1 9.5-.8 19-2.1 28.6-3.1 22.9-13.5 43.2-22.75 65 23.55-1.3 43.55-11.6 65.35-24.8 20.6-12.5 42.4-27.5 68.9-37.8-.2-1.4-.4-2.9-.4-4.2-1.9-23.7.1-52.2 4.1-83.2C243 147.6 257.9 81.05 269 23.95zm-105.7.1H80.65c-1.6 36.5 10.1 76.15 21.65 119.15 8.3 30.4 16.5 62.3 19 95.7 12.6-14.3 21.8-34.4 28.6-60 10.8-40.6 14.4-94.15 13.4-154.85zm41.8 14.9a9 9 0 0 1 .1 0 9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 8.9-9zm-2.4 52.5a9 9 0 0 1 .1 0 9 9 0 0 1 9 8.95 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 8.9-8.95zm-5.9 56.25a9 9 0 0 1 .1 0 9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 8.9-9zm-16 60.6a9 9 0 0 1 .1 0 9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 8.9-9zm-32 48.1a9 9 0 0 1 .1 0 9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 8.9-9zm85.7 55.3c-22.6 9.6-42.3 22.9-62.6 35-24.6 14.9-50.5 27.9-81.85 27.5-8.2 22.7-13.8 48-10 79.9h82.35c13.2-41.4 42.9-78 95.1-106.8-1.4-1-2.9-2.1-4.3-3.2-9.6-7.6-15.3-18.8-18.7-32.4zm40.2 46.7c-52.1 26.2-80.4 58.5-93.6 95.7h127.4c0-14.3.6-29 3.9-43.6 2.6-11.5 7-22.9 14-33.9-16.1-3.3-33.5-8.1-51.7-18.2zm70.8 21.8c-8.2 10.9-12.8 22.3-15.5 34.3-2.8 12.5-3.5 25.8-3.5 39.6h104c-2-17.8-12.5-39.8-28.1-52.1-17.8-13.9-36-17.9-56.9-21.8zm8.3 10.5a9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9zm-254.05 35a9 9 0 0 1 .1 0 9 9 0 0 1 8.95 9 9 9 0 0 1-8.95 9 9 9 0 0 1-9-9 9 9 0 0 1 8.9-9zm44.85.6a9 9 0 0 1 .1 0 9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 8.9-9zm201.5.1a9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9zM72.05 470v18.1H440V470z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMetalBootIcon);
    