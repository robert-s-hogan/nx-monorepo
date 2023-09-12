
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAccordionIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'accordion'];
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
        <path fill="currentColor" d="M343.8 87.8 340.3 403c3.5-1 7.1-1 10.7-2l20.6-310.4c-9.1-.95-19.1-2.31-27.8-2.8zm48.6 4.2-20.5 309h9L419 95.9s-9.8-1.9-26.6-3.9zm-101.1.3L306.4 412c4.1-1 8.4-3 13-4l3.5-313.7zm-110.9 7.6c-8.8 2-17.7 4.2-26.6 6.7l88.2 7.8L269.5 430s6.1-4 16.4-9l-14.8-315.7zm262.4 1.5-42.5 300.1s17.8-6.6 30.1-11.2c7.3-2.8 12.6-9 14.1-16.7 8.5-42.4 36.6-183.7 47.1-236.4 2.4-11.3-4.4-22.5-15.5-25.9-15-4.5-33.3-9.9-33.3-9.9zm-325.6 24.5s-56.64 18.6-84.95 28c-8.87 2.9-14.03 12.1-11.86 21.2C32.62 226.5 70.73 386.6 83.5 440c1.12 5 4.06 9 8.17 11 4.11 3 9.03 4 13.63 2 14-3 31.1-7 31.1-7s26.6 6 47.4 10c15.7 4 32.1 2 46.4-6 8.4-4 16-8 16-8l-30.6-308.5zm-4.8 43.3 51.6 4.4L196.1 419l-45.2-8c18.1-23.2 20.6-74.6 13.1-124.4-7.9-53.2-27.4-104.5-51.5-116.9zm-23.2.5c4.84.2 9.09 3.7 9.96 8.7L140.6 414c1 6-2.8 11-8.5 12-5.6 1-11-2-12-8l-.2-1-18.4 5-3.36-16 18.86-5-1.7-10.4-19.27 5.2-3.43-16.3 19.8-5.4-6.3-35.4-20.87 5.7-3.44-16.3 21.51-5.9-1.9-10.3-21.75 6-3.44-16.3 22.37-6.2-1.86-10.5-22.71 6.2-3.44-16.3 23.26-6.4-6.27-35.7-24.42 6.7-3.44-16.3 24.97-6.9-2.13-12-25.36 6.9-3.43-16.3 25.89-7.1-1-5.7c-1-5.7 2.79-11.1 8.46-12.1.71-.1 1.41-.2 2.1-.2z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAccordionIcon);
    