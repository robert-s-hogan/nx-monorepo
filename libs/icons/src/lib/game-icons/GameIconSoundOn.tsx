
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSoundOnIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'sound-on'];
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
        <path fill="currentColor" d="M333.782 80c128 64 128 288 0 352 192-64 192-288 0-352zm-48 16c64 50.843 64 270.217 0 321.06 128-50.843 128-270.217 0-321.06zm-75.13 49.922c-35.468.215-70.268 6.618-89.253 14.863-14.084 43.136-16.33 127.919-6.736 180.518-8.452-4.265-18.337-6.543-28.445-6.555-28.719 0-52 17.909-52 40s23.281 40 52 40 52-17.909 52-40c-6.166-49.187-13.74-115.12-8.225-165.437 37.756-7.722 77.49-17.422 114.688-10.715-4.152 38.294-3.029 82.424 3.379 117.552-8.452-4.265-18.337-6.543-28.446-6.554-28.719 0-52 17.908-52 40 0 22.091 23.281 40 52 40 28.72 0 52-17.909 52-40-4.618-72.485-18.78-132.767.33-196.436-18.491-5.267-40.012-7.365-61.293-7.236zm5.456 15.635c11.697-.073 23.313.706 34.174 2.558-1.185 5.199-2.232 10.67-3.156 16.336-37.913-5.64-78.578 1.385-114.332 9.656a227.233 227.233 0 0 1 3.277-14.884c19.722-7.718 50.145-13.48 80.037-13.666z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSoundOnIcon);
    