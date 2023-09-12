
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHeartEarringsIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'heart-earrings'];
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
        <path fill="currentColor" d="M143.3 24.25c-1.2-.01-2.5.02-3.7.1-9.8.61-19.9 3.54-29.3 7.02C91.57 38.34 75.43 47.9 75.43 47.9l9.14 15.5s15.16-8.89 32.03-15.15c8.4-3.13 17.3-5.51 24.1-5.94 6.9-.43 10.6.91 12.4 3.1 2.1 2.48 2.7 6.78.9 13.88-1.7 7.1-5.9 15.86-10.8 24.05-7.2 12.01-15.6 22.66-19.6 27.56-20.5 2.3-36.6 19.8-36.6 40.8 0 12.9 6.08 24.5 15.5 32-9.42 7.5-15.5 19.1-15.5 32 0 19.4 13.8 35.8 32 40V315c-12.9-16.8-34.09-26.8-52.75-26.5-32.93.3-50.94 35.9-50.76 55.5.94 30.3 21.88 50.8 47.83 73.4 22.59 19.7 48.58 40.4 64.38 70.3.1-.1.1-.1.2-.1s.1 0 .1.1c15.8-29.9 41.9-50.6 64.4-70.3 26.1-22.6 46.9-43.1 47.9-73.4.1-19.6-17.9-55.2-50.7-55.5-18.7-.3-39.7 9.5-52.6 26.3v-59.1c18.2-4.2 32-20.6 32-40 0-12.9-6.1-24.5-15.5-32 9.4-7.5 15.5-19.1 15.5-32 0-16.8-10.3-31.4-24.9-37.7 4.3-5.8 9.6-13.2 14.5-21.43 5.4-9.06 10.4-18.93 12.9-28.91s2.5-21.21-4.6-29.77c-6-7.23-14.9-9.58-23.6-9.64zm256 0c-1.2-.01-2.5.02-3.7.1-9.8.61-19.9 3.54-29.3 7.02-18.7 6.97-34.9 16.53-34.9 16.53l9.2 15.5s15.1-8.89 32-15.15c8.4-3.13 17.3-5.51 24.1-5.94 6.9-.43 10.6.91 12.4 3.1 2.1 2.48 2.7 6.78.9 13.88-1.7 7.1-5.9 15.86-10.8 24.05-7.2 12.01-15.6 22.66-19.6 27.56-20.5 2.3-36.6 19.8-36.6 40.8 0 12.9 6.1 24.5 15.5 32-9.4 7.5-15.5 19.1-15.5 32 0 19.4 13.8 35.8 32 40V315c-12.8-16.8-34-26.7-52.6-26.4-32.9.3-50.9 35.9-50.7 55.5.9 30.3 21.9 50.8 47.8 73.4 22.6 19.7 48.6 40.4 64.3 70.3.1-.1.1-.1.2-.1s.1 0 .1.1c15.8-29.9 41.9-50.6 64.4-70.3 26.1-22.6 46.9-43.1 47.9-73.4.1-19.6-17.9-55.2-50.7-55.5-18.7-.3-39.9 9.6-52.7 26.4v-59.3c18.2-4.2 32-20.6 32-40 0-12.9-6.1-24.5-15.5-32 9.4-7.5 15.5-19.1 15.5-32 0-16.8-10.3-31.4-24.9-37.7 4.3-5.8 9.6-13.2 14.5-21.43 5.4-9.06 10.4-18.93 12.9-28.91s2.5-21.21-4.6-29.77c-6-7.23-14.9-9.58-23.6-9.64zM128 128.7c12.8 0 23 10.2 23 23s-10.2 23-23 23-23-10.2-23-23 10.2-23 23-23zm256 0c12.8 0 23 10.2 23 23s-10.2 23-23 23-23-10.2-23-23 10.2-23 23-23zm-256 64c12.8 0 23 10.2 23 23s-10.2 23-23 23-23-10.2-23-23 10.2-23 23-23zm256 0c12.8 0 23 10.2 23 23s-10.2 23-23 23-23-10.2-23-23 10.2-23 23-23z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHeartEarringsIcon);
    