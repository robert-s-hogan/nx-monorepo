
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDefenseSatelliteIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'defense-satellite'];
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
        <path fill="currentColor" d="M256 26.816l-39 26v23.455L243.729 103h24.542L295 76.271V52.816l-39-26zM119.027 41l-11.5 46H151V41h-31.973zM361 41v46h43.473l-11.5-46H361zM169 55v18h30V55h-30zm144 0v18h30V55h-30zm-86.734 55.994c-.06.03-.123.057-.182.086-7.048 3.524-9.084 7.157-9.084 8.92s2.036 5.396 9.084 8.92S243.961 135 256 135c12.039 0 22.868-2.556 29.916-6.08 7.048-3.524 9.084-7.157 9.084-8.92s-2.036-5.396-9.084-8.92c-.059-.03-.123-.057-.182-.086L275.73 121H236.27l-10.005-10.006zM199 143.977c-61.739 6.488-118.528 23.478-154.256 49.627 7.202 8.662 15.23 16.686 23.967 24.052 15.382-8.683 32.294-16.008 50.289-21.996V192c0-6.438 2.95-12.44 7.168-16.457 4.218-4.018 9.452-6.435 15.021-7.914 5.57-1.48 11.577-2.058 17.666-1.74a64.318 64.318 0 0 1 18.166 3.632l.12.043 21.859 8.49v-34.077zm114 0v34.078l21.86-8.49.119-.044a64.318 64.318 0 0 1 18.166-3.632c6.09-.318 12.096.26 17.666 1.74s10.803 3.896 15.021 7.914S393 185.563 393 192v3.66c17.995 5.988 34.907 13.313 50.29 21.996 8.737-7.366 16.764-15.39 23.966-24.052-35.728-26.15-92.517-43.139-154.256-49.627zm-96 .5v80.908c13.604 10.234 26.464 15.115 39 15.115 12.536 0 25.396-4.881 39-15.115v-80.908c-.344.18-.685.369-1.033.543C283.643 150.182 270.47 153 256 153c-14.47 0-27.643-2.818-37.967-7.98-.348-.174-.689-.362-1.033-.543zm-62.371 39.437c-3.215.05-6.246.428-8.818 1.111-2.588.688-4.44 1.661-5.85 2.623L199 215.2v-17.834l-28.037-10.89c-4.094-1.457-8.664-2.277-13.068-2.502a48.853 48.853 0 0 0-3.266-.059zm202.742 0a48.853 48.853 0 0 0-3.266.059c-4.404.225-8.974 1.045-13.068 2.502L313 197.365V215.2l59.04-27.55c-1.41-.963-3.263-1.936-5.85-2.624-2.573-.683-5.604-1.06-8.819-1.11zM41 216.217v42.86C79.07 314.612 167.082 344.5 256 344.5s176.93-29.887 215-85.424v-42.86C418.828 270.5 337.25 297 256 297S93.172 270.499 41 216.217zm164.191 23.023l-57.197 22.217c13.515 4.655 27.557 8.377 41.916 11.186l40.64-18.965c-8.619-3.254-17.095-8.104-25.359-14.438zm101.618 0c-8.264 6.334-16.74 11.184-25.36 14.438l40.64 18.965c14.36-2.81 28.402-6.531 41.917-11.186l-57.197-22.217zM256 261.666l-33.646 15.701A349.784 349.784 0 0 0 256 279c11.255 0 22.498-.555 33.646-1.633L256 261.666zm-39 99.047v52.746c6.479 10.81 22.181 17.541 39 17.541s32.521-6.732 39-17.541v-52.746a428.936 428.936 0 0 1-39 1.787c-13.033 0-26.077-.606-39-1.787zm16 85.06V464c0 20 46 20 46 0v-18.227c-7.402 2.19-15.267 3.227-23 3.227-7.733 0-15.598-1.036-23-3.227z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconDefenseSatelliteIcon);
    