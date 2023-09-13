
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTallyMark5Icon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'tally-mark-5'];
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
        <path fill="currentColor" d="M200.8 32.38c-8 8.34-21.5 15.2-33.3 16.28L176 222.5c-18.9 2.2-37.8 4.6-56.5 7.3-4.3-55.2-10-109.9-19.57-163.17L71.88 88.71C78.5 136.6 82.81 185.5 86.17 234.8c-20.52 3.2-40.87 6.7-60.92 10.4l-7.08 33.9c23.42-3.3 46.82-6.4 70.22-9.4C92.44 337.1 95.33 405 100.2 472l35.9-7.4c-6-65.8-9.2-132.7-13.8-199.1 18.5-2.2 37-4.2 55.5-6.1l10.7 220.1c12.9.6 25.1-1.2 35.4-11.2l-11.2-212.1c23-1.9 46.1-3.5 69.1-4.6-4.3 74.8-9.9 149.7-13.8 221.3 11-9.2 22.9-15.1 36.7-13.7l7.6-208.8c22.9-.7 45.8-.9 68.7-.6-6.9 69.6-15.4 139-20.7 208.7l29.4 8.1c7.7-71.7 20.2-143.7 30-215.5 17.5.8 35 2 52.4 3.6-7.8-13.9-1-27.1 21.7-39.5-22.6-2.1-45.6-3.5-68.9-4.3 6.2-52.6 10.2-105 8.9-157.21l-41.7-14.8c.9 57.39-2.5 114.41-7.4 171.21-23.5-.1-47.1.4-70.9 1.4l6.3-173.76-32 16.75C288.5 106 286.7 159.3 284 213c-24.4 1.4-48.9 3.4-73.3 5.8z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTallyMark5Icon);
    