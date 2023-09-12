
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSoundOffIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'sound-off'];
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
        <path fill="currentColor" d="M210.652 145.922c-35.467.215-70.267 6.618-89.252 14.863-14.085 43.136-16.33 127.919-6.736 180.518-8.452-4.265-18.339-6.543-28.447-6.555-28.719 0-52 17.909-52 40s23.281 40 52 40 52.002-17.909 52.002-40c-6.166-49.187-13.74-115.12-8.225-165.437 37.756-7.722 77.49-17.422 114.688-10.715-4.152 38.294-3.03 82.424 3.377 117.552-8.452-4.265-18.335-6.543-28.444-6.554-28.719 0-52 17.908-52 40 0 22.091 23.281 40 52 40s52-17.909 52-40c-4.618-72.485-18.78-132.767.33-196.436-18.492-5.267-40.012-7.365-61.293-7.236zm5.457 15.635c11.697-.073 23.313.706 34.174 2.558-1.185 5.199-2.232 10.67-3.156 16.336-37.913-5.64-78.578 1.385-114.332 9.656a227.233 227.233 0 0 1 3.277-14.884c19.722-7.718 50.145-13.48 80.037-13.666zm116.62 17.714L307.27 204.73 358.543 256l-51.272 51.271 25.458 25.458L384 281.457l51.271 51.272 25.458-25.458L409.457 256l51.272-51.271-25.458-25.458L384 230.543l-51.271-51.272z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSoundOffIcon);
    