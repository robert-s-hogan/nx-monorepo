
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPhilosopherBustIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'philosopher-bust'];
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
        <path fill="currentColor" d="M256 37.4c-28.1 0-50.9 21.3-50.9 59.9 0 29.8 12.9 58.3 12.9 58.3l15-18.5h12.6v-22.7H218V93.5h76v20.9h-27.6v22.7H279l15 18.5s12.9-28.5 12.9-58.3c0-38.6-22.8-59.9-50.9-59.9zm-66.9 72.5c-1.3 8.7-1.9 17.8-1.9 27.2 0 64.2 30.8 106.4 68.8 106.4s68.8-42.2 68.8-106.4c0-9.4-.6-18.5-1.9-27.2-2.8 28.3-13.7 52.6-13.7 52.6L298.1 187l-27-33.2h-30.2l-27 33.2-11.1-24.5s-10.9-24.3-13.7-52.6zm58.6 53.7h16.6v12.7h-16.6v-12.7zm71 19.7v.2-.2zm-145.5 5-36.9 9.3L168 339.4h61.8l24-75.1c-34.7-1.2-66.9-28.9-80.6-76zm165.6 0c-10.5 36.2-32 61-57.2 71L256 339.4h21.7l20.7-70.4 12 3.5-19.6 66.9h16.9l36.4-125.8 12 3.5-35.4 122.3H344l31.7-141.8-36.9-9.3zM197 360.6v94h18v-64h82v64h18v-94H197zm36 48v46h46v-46h-46zm-69.3 64-14 18h212.6l-14-18H163.7z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPhilosopherBustIcon);
    