
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBanjoIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'banjo'];
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
        <path fill="currentColor" d="M375.2 23.61l-12.7 12.7 24.5 24.5c.5-1.2 1-2.3 1.5-3.5 2.4-6.6 4.1-12.4 4.9-15.5zm33.3 30.5c-.9 3-1.9 5.9-3.3 9.6-4 10.8-9.1 23.4-20.2 30.4-4 2.4-8.1 2.6-11.2 2.3-3.1-.3-5.6-1.1-7.5-1.6-1.7-.4-2.6-.6-3.2-.7-.6.9-1.2 2.2-1.6 4.5-.8 3.19-1 7.49-.8 11.59.1 6 .7 10.5 1.2 13.1l26.8 26.8c2.6.4 7.1 1 13 1.2 7.5.1 14.3-1.8 16-2.7-.1-.8-.2-1.4-.6-2.9-.5-2-1.3-4.5-1.7-7.6-.3-3.1 0-7.3 2.3-11.2 7-11.1 19.6-16.2 30.5-20.3 3.6-1.4 6.6-2.2 9.6-3.1l-16.4-32.89zm-67.2 3.4l-12.7 12.7 17.4 17.5c1.3-2.9 3-5.6 5.6-7.9 2.5-2.2 5.6-3.3 8.3-3.7zm128.9 60.99c-3.2.8-9.1 2.4-15.7 5-1.1.4-2.2.8-3.4 1.3l24.6 24.6 12.7-12.7zm-120.7 17.9L217.4 262.3l9.8 9.8 129-129zm86.3 15.5c-.4 2.8-1.5 6-3.8 8.5s-4.8 4.3-7.5 5.6l17.3 17.3 12.7-12.7zm-66.9 3.9L240 284.9l9.7 9.6 125.9-132zm-226.3 94.5c-30.4 0-60.87 11.6-84.13 34.9-46.53 46.5-46.53 121.7 0 168.3C105 500 180.2 500 226.8 453.5c35.8-35.9 43.9-88.5 24.7-132.2L156.8 416l14.9 14.9-12.8 12.7-90.46-90.5 12.73-12.7 14.75 14.7 94.78-94.7c-15.3-6.8-31.7-10.1-48.1-10.1zm60.6 23.2l-94.5 94.4 11.3 11.3 94.5-94.4zm24 24L132.7 392l11.2 11.2 94.6-94.4z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBanjoIcon);
    