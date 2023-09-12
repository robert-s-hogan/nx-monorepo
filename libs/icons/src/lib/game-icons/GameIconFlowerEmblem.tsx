
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconFlowerEmblemIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'flower-emblem'];
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
        <path fill="currentColor" d="M256 24c-11.8 0-24.5 10.15-34.6 30.32-7.1 14.37-12.6 33.19-15.1 54.48 4.6 4 9.2 8.2 13.7 12.7 11.4 11.3 21.2 23.3 29.3 35.3 2.2-.1 4.5-.2 6.7-.2 2.4 0 4.8.1 7.2.3 8.1-12.1 17.9-24 29.3-35.4 4.3-4.3 8.8-8.5 13.3-12.3-2.6-21.44-8-40.42-15.2-54.88C280.5 34.15 267.8 24 256 24zM113.2 84.12c-9.2.13-16.33 2.76-20.99 7.44-8.32 8.32-10.16 24.44-3 45.84 7.15 21.4 22.89 46.5 45.59 69.2 8.3 8.3 17 15.7 25.6 22.1 9.5-33.2 35.9-59.3 69.2-68.5-6.4-8.8-13.9-17.6-22.3-26-22.7-22.7-47.8-38.48-69.2-45.64-9.4-3.13-17.8-4.54-24.9-4.44zm286.1 0c-7.1-.1-15.5 1.33-24.8 4.48-21.4 7.14-46.5 22.9-69.2 45.6-8.5 8.5-16 17.3-22.4 26.1 33.2 9.3 59.4 35.5 68.8 68.7 8.8-6.5 17.6-14 26-22.4 22.7-22.7 38.4-47.8 45.6-69.2 7.2-21.4 5.3-37.49-3-45.83-4.7-4.69-11.8-7.33-21-7.45zM256 174.6c-45.1 0-81.4 36.3-81.4 81.4 0 45.1 36.3 81.4 81.4 81.4 45.1 0 81.4-36.3 81.4-81.4 0-45.1-36.3-81.4-81.4-81.4zm-146.2 31.6c-21.67 2.5-40.87 8-55.48 15.2C34.15 231.5 24 244.2 24 256s10.15 24.5 30.32 34.6c14.48 7.2 33.48 12.6 54.88 15.2 4.1-4.7 8.4-9.4 12.9-13.9 11.2-11.2 22.9-20.9 34.7-28.9-.1-2.3-.2-4.6-.2-7 0-2.6.1-5.2.3-7.7-11.9-8-23.6-17.7-34.8-28.9-4.3-4.3-8.4-8.8-12.3-13.2zm292.8 0c-3.9 4.4-7.9 8.8-12.2 13.1-11.4 11.4-23.3 21.2-35.3 29.3.2 2.4.3 4.9.3 7.4 0 2.2-.1 4.5-.2 6.7 11.9 8 23.8 17.8 35.1 29.1 4.6 4.6 8.9 9.2 12.9 13.9 21.3-2.5 40.1-8 54.5-15.1 20.2-10.1 30.3-22.8 30.3-34.6s-10.1-24.5-30.3-34.6c-14.5-7.2-33.6-12.7-55.1-15.2zm-50.8 76.1c-9.1 33.4-35.3 59.8-68.5 69.3 6.3 8.6 13.6 17.2 21.9 25.4 22.7 22.7 47.8 38.4 69.2 45.6 21.4 7.1 37.5 5.3 45.8-3 8.4-8.3 10.2-24.5 3-45.9-7.1-21.4-22.9-46.5-45.6-69.2-8.4-8.4-17-15.8-25.8-22.2zm-191.6.4c-8.6 6.4-17.1 13.7-25.4 21.9-22.7 22.7-38.43 47.8-45.57 69.2-7.21 21.4-5.37 37.5 2.97 45.9 8.3 8.3 24.5 10.2 45.8 2.9 21.4-7.1 46.5-22.9 69.2-45.6 8.2-8.2 15.5-16.7 21.9-25.3-33.3-9.4-59.5-35.7-68.9-69zm88.6 72.4c-8 11.8-17.6 23.5-28.8 34.7-4.5 4.5-9.1 8.8-13.8 12.8 2.5 21.5 8 40.6 15.2 55.1 10.1 20.2 22.8 30.3 34.6 30.3s24.5-10.1 34.6-30.3c7.2-14.6 12.7-33.8 15.2-55.5-4.5-3.9-9-8.1-13.4-12.5-11.2-11.2-20.8-22.8-28.7-34.6-2.6.2-5.1.3-7.7.3-2.4 0-4.8-.1-7.2-.3z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconFlowerEmblemIcon);
    