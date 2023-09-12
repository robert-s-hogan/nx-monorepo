
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCompactDiscIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'compact-disc'];
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
        <path fill="currentColor" d="M336.77 30.56A240 240 0 0 0 137.145 48 240 240 0 0 0 20.162 298.94l142.405-25.665c-6.87-38.47 10.598-78.89 46.42-99.323 25.063-14.296 53.977-15.877 79.228-6.808L336.77 30.56zm52.936 26.914l-80.56 120.245c11.773 7.904 21.943 18.56 29.43 31.683 25.942 45.482 10.03 103.645-35.452 129.588-43.752 24.957-99.236 11.178-126.487-30.395L55.644 388a240 240 0 0 0 319.322 76.943 240 240 0 0 0 89.56-327.382 240 240 0 0 0-74.82-80.086zM290.19 187.387c-22.148-10.942-49.142-11-72.286 2.2-30.09 17.163-44.195 51.33-37.098 83.402 1.637 7.4 4.404 14.687 8.364 21.63 21.123 37.033 68.003 49.86 105.035 28.737s49.858-68.003 28.736-105.035c-7.92-13.887-19.463-24.37-32.75-30.935zm-15.607 33.635a40 40 0 0 1 16.218 15.632 40 40 0 0 1-14.927 54.563 40 40 0 0 1-54.56-14.927 40 40 0 0 1-4.31-11.153 40 40 0 0 1 19.232-43.41 40 40 0 0 1 38.348-.705zm-109.206 63.764L27.33 327.966a240 240 0 0 0 13.3 34.151L170.765 298.3c-2.17-4.418-3.96-8.937-5.388-13.514z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCompactDiscIcon);
    