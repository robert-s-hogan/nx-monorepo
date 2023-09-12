
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMartyrMemorialIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'martyr-memorial'];
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
        <path fill="currentColor" d="M265.1 20.35l-18.1.1-.2 55.7c6-1 12.2-1 18.2 0zm-77 25.1c10 97.85 12.2 189.15-8 262.15-21.1 77.2-68.8 134.1-155 152.2l-.15 31.8 130.95.1c28.5-30.2 47.9-79.3 59.2-125.2 11.9-47.2 15.9-91.4 15.7-105.9l.2-.1c0-15.7-.4-55.9-2.5-95.9-1-19.9-2.5-39.8-4.7-56.2-1.8-15.65-4.8-28.45-7.2-34.35zm134.3 1.3L294 75.05c-2.1 5.7-4.6 18.2-6.5 33.55-1.8 16.4-3.2 36.1-4.2 55.9-1.9 39.7-2.2 80-2.2 96l-.1.1c0 14.4 3.9 58.6 15.7 105.7 11.5 46 30.8 95 59.3 125.3l131.1-.2-.1-31.8c-86.4-18.1-134.2-74.9-155.4-151.8-20.3-72.9-18.6-163.8-9.2-261.05zm-65.9 46.7c-5.9-.1-11.7 1.1-16 3.5.5 3 .8 5.95 1.3 9.15.7 5.5 1.3 11.3 1.8 17.2l24.4.1c.5-5.9 1-11.5 1.6-16.9.4-3.4.9-6.65 1.3-9.85-4.1-2.1-9.2-3.2-14.4-3.2zm-11.4 47.95c.4 4.6.7 9.3.9 14h19.7c.3-4.7.6-9.3.9-13.9zm1.9 32.1c1.6 36.2 2 70.7 2 86h14c0-15.2.3-49.7 1.8-85.9zm1.1 104c-.3 4.1-.6 8.6-1.1 13.5v200.5h17.8V290.1c-.5-4.6-.8-8.8-1.2-12.7zM283 384.6v106.8h14l-.2-64.7c-5.5-13.9-10-28.1-13.8-42.1zm-54.2.7c-3.8 13.9-8.5 28.1-13.8 41.8v64.3h13.8z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMartyrMemorialIcon);
    