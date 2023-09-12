
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconKnockedOutStarsIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'knocked-out-stars'];
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
        <path fill="currentColor" d="M116.2 175l5.6 22.8-15.6 17.6 23.4 1.6 11.9 20.3 9-21.8 22.8-5.1-17.9-15.1 2.1-23.4-19.9 12.4zm255.4-91.73l7.6 15.22-7.9 15.01 16.7-2.8 11.6 12.5 2.9-16.8 15.2-7.37-15.1-7.74-2.2-16.88-12 11.95zm-59.4 48.13l-6.9 18.8-18.9 5.1 15.7 12.1-.4 7.9a67.17 246.4 64.14 0 0-68.4 29.6 67.17 246.4 64.14 0 0-.3.1 67.17 246.4 64.14 0 0-148.86 94.5l-12.28-7.2L70 268.5l-17.92 15.9-23.3-5.5 9.75 22-12.61 20.4 23.9-2.5 7.05 8.3a67.17 246.4 64.14 0 0-15.94 45.6 67.17 246.4 64.14 0 0 82.27 12L119 396l-21.49 5.8 17.69 13.5-1.2 22.3 18.4-12.5 20.9 8-6.4-21.4 14.1-17.4-22.3-.7-7-10.7a67.17 246.4 64.14 0 0 72.3-20.4l6.9 18.6 14.6-22.9 27.2-.8-8.3-10.2a67.17 246.4 64.14 0 0 47.5-21.5 67.17 246.4 64.14 0 0 120.4-71.5l8.5 18-13.9 23.5 27.1-3.5 17.9 20.5 5.3-26.7 25-10.8-24-13.2-2.4-27.1-20 18.6-17.4-3.9a67.17 246.4 64.14 0 0 65.7-91.7 67.17 246.4 64.14 0 0-153.7 7l-.2-.9 12.4-15.4-19.8-.5zm-75.4 82.7a51.33 188.2 64.14 0 1 .7-.5 51.33 188.2 64.14 0 1 63.6-26.7v.2l.6-.4a51.33 188.2 64.14 0 1 23.3-7.9l10.9 4.2-2.1-6.7a51.33 188.2 64.14 0 1 95.4 1.5 51.33 188.2 64.14 0 1-58.4 76.2l-2-10.9 10-10.3-14.4-1.6-6.5-12.9-6.1 13.1-14.4 2.4 10.7 9.8-2.1 14.2 12.5-6.8 9.9 4.8a51.33 188.2 64.14 0 1-86.1 50.3 51.33 188.2 64.14 0 1-43.6 19.2l4.3-15-25.3 9.7-22.5-15.1 1.6 27-17 13.3a51.33 188.2 64.14 0 1-89.19-3.3A51.33 188.2 64.14 0 1 236.8 214.1z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconKnockedOutStarsIcon);
    