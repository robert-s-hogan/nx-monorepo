
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHighlighterIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'highlighter'];
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
        <path fill="currentColor" d="M414 22.77l-10.8 5.41c14 9.72 29.1 22.93 43.4 37.19 14.3 14.24 27.5 29.48 37.2 43.33l5.4-10.71c-5.4-13.29-17.2-29.81-31.3-43.95-14.1-14.14-30.6-25.92-43.9-31.27zm-47.7 7.36L110.1 265.9 246 401.8l235.8-256.2c-.1 0 .1-.9-.7-3.9-1.1-4.1-4-10.2-8.4-17.1-8.8-13.8-23.1-30.83-38.8-46.5-15.7-15.68-32.8-30.07-46.6-38.86-6.9-4.39-13-7.33-17-8.43-3.4-.91-4.1-.56-4-.68zM96.89 278.1l-12.65 12.7L221.1 427.7l12.7-12.7zm-13.68 37.1c1.08 42.4-15.77 78.5-32.83 112.7l19.5 19.5 14.14 14.2c34.18-17.1 70.28-34 112.68-32.9zM39.56 442.5c-11.24 11.8-16.45 18.7-16.67 19.7-.12.7-.41.4 1.34 2.9s5.55 6.4 10.9 11.7c5.34 5.4 9.27 9.2 11.72 10.9 2.46 1.8 2.24 1.5 2.86 1.4 1.05-.2 7.91-5.4 19.66-16.7z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHighlighterIcon);
    