
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconStackIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'stack'];
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
        <path fill="currentColor" d="M256 18.365L50.14 136 256 253.635 461.86 136 256 18.365zm-154 168L50.14 216 256 333.635 461.86 216 410 186.365l-154 88-154-88zm0 80L50.14 296 256 413.635 461.86 296 410 266.365l-154 88-154-88zm0 80L50.14 376 256 493.635 461.86 376 410 346.365l-154 88-154-88z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconStackIcon);
    