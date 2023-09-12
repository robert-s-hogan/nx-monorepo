
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconFlagObjectiveIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'flag-objective'];
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
        <path fill="currentColor" d="M247 26v163.2c-15 .8-28.5 3.3-39.4 7.4-6.5 2.4-12.1 5.4-16.5 9.3-4.5 4-8.1 9.5-8.1 16.1 0 6.6 3.6 12.1 8.1 16.1 4.4 3.9 10 6.9 16.5 9.3 13 4.9 29.8 7.6 48.4 7.6 18.6 0 35.4-2.7 48.4-7.6 6.5-2.4 12.1-5.4 16.5-9.3 4.5-4 8.1-9.5 8.1-16.1 0-6.6-3.6-12.1-8.1-16.1-4.4-3.9-10-6.9-16.5-9.3-10.9-4.1-24.4-6.6-39.4-7.4V26zm38 .99v70.02L378.4 62zM247 207.3v29.4c-13.1-.7-24.8-3-33.1-6.2-5.1-1.9-8.9-4.1-10.9-5.9-2-1.8-2-2.5-2-2.6 0-.1 0-.8 2-2.6s5.8-4 10.9-5.9c8.3-3.2 20-5.5 33.1-6.2zm18 0c13.1.7 24.8 3 33.1 6.2 5.1 1.9 8.9 4.1 10.9 5.9 2 1.8 2 2.5 2 2.6 0 .1 0 .8-2 2.6s-5.8 4-10.9 5.9c-8.3 3.2-20 5.5-33.1 6.2zm-9 70.7L96 358l128-16-32 144h128l-32-144 128 16z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconFlagObjectiveIcon);
    