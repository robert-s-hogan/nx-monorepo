
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconChelseaBootIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'chelsea-boot'];
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
        <path fill="currentColor" d="M247.3 86.6c-30.5 8.58-50.4 30.6-50.6 58l18-5.6c2.7-18.5 20.6-31 36.6-34.8zm-206.52 1L29.2 101.4c19.15 16.1 34.3 32.5 35.25 47.5l17.96 6.8c-1.04-30.9-21.74-51.4-41.63-68.1zm150.52 86.3l13.8 136.8c5.9 44.1-74.9 48.1-82.7 5.4L104.7 197c-8.62-24.3-19.67-24.7-40.02-30.1.5 45.4-.6 85.3-12.73 125.4-11.17 36.8-14.35 71.9-12.82 93.5C72.78 392.1 243 422.5 333.6 418c43.5-2.1 133.3-16.5 155.8-20.2 2.6-10.9 1.8-27.3-34.5-34.2-64.5-11.1-112.5-25.4-169.7-64.2-14.3-7.5-57.8-56.3-68.9-143.3-10.2-.5-25.5 8.6-25 17.8zm-16.9 12.2c-18.2 4.2-35.6 5.4-52.3 5.2l18.1 122.2c3.1 21.1 48.6 16 46.9-1zm-135.23 218l-4.68 56.2c42.9 15.6 94.81 17.1 139.41 11.2l2.6-26c35.2 8.6 83.5 25.5 108.3 26.5 59.5 2.5 153.8-12.7 205.9-32l-.1-24.1c-24.4 4-110.8 17.9-156.2 20.1-91.9 4.5-253.05-24-295.23-31.9z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconChelseaBootIcon);
    